import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useForm from '../../src/hooks/useForm';
import Infoservice from '../../src/services/info.service';
import UserAPI from '../../src/services/user.service';
import { allowedCityIds } from '../../src/utils/consts';
import { validateRegister } from '../../src/utils/validateRegister';
import Button from '../common/Button';
import Loader from '../common/Loader';
import Group11 from '../svg/Group11';
import Group18Img from '../svg/Group18Img';
import AgeInput from './register_form/inputs/AgeInput';
import CellphoneInput from './register_form/inputs/CellphoneInput';
import CoefficientCheckbox from './register_form/inputs/CoefficientCheckbox';
import ConditionsCheckbox from './register_form/inputs/ConditionsCheckbox';
import EmailInput from './register_form/inputs/EmailInput';
import FemaleRadio from './register_form/inputs/FemaleRadio';
import FirstName from './register_form/inputs/FirstName';
import LastName from './register_form/inputs/LastName';
import MaleRadio from './register_form/inputs/MaleRadio';
import MainTitle from './register_form/texts/MainTItle';
import SubTitle from './register_form/texts/SubTitle';
import SearchCountryInput from './SearchCountryInput';
import SearchStreetInput from './SearchStreetInput';

const errorsInitial = {
  email: false,
  password: false,
  cellphone: false,
  birth_year: false,
  firstName: false,
  lastName: false,
  gender: false,
  cityData: false,
  theStreet: false,
  employment_coefficient: false,
  terms_and_conditions: false,
};

const RegisterForm = ({ cities, termsText }) => {
  const [cityId, setCityId] = useState(null);
  const [cityData, setCityData] = useState('');
  const [theStreets, setTheStreets] = useState(null);
  const [theStreet, setTheStreet] = useState(null);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const router = useRouter();
  const [inputValue, setInputValue] = useState();
  const [errors, setErrors] = useState({ ...errorsInitial });

  const {
    inputs,
    handleChange: handleChangeInForm,
    resetForm,
  } = useForm({
    username: '',
    email: '',
    password: '',
    cellphone: '',
    birth_year: null,
    firstName: '',
    lastName: '',
    gender: 'm',
    employment_coefficient: false,
    terms_and_conditions: false,
  });
  const handleChange = (e) => {
    setErrors({ ...errorsInitial });
    handleChangeInForm(e);
  };
  const checkValidation = () => {
    const { isValid, errors: newErrors } = validateRegister({ ...inputs, theStreet, cityData });
    setErrors({ ...errors, ...newErrors });

    return isValid;
  };

  useEffect(() => {
    setError(null);
  }, [inputs]);

  useEffect(() => {
    const getStreets = async () => {
      const data = await Infoservice.getStreetInfo(cityId);
      if (data) {
        setTheStreets(data);
      }
    };
    if (cityId) {
      getStreets();
    }
  }, [cityId]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!checkValidation()) {
      return;
    }
    setLoader(true);

    const dataToSend = {
      ...inputs,
      cellphone: inputs.cellphone.replace(/-/g, ''),
      city: theStreet ? JSON.stringify(cityData) : null,
      street: theStreet ? JSON.stringify(theStreet) : null,
      username: inputs.email,
    };

    const { data, status } = await UserAPI.register(dataToSend);
    if (200 !== status) {
      console.log(data, status);
      if (data.message && 'string' === typeof data.message) {
        setError(`${data.message}`);
      } else {
        setError('תקלה בצד שרת');
      }
      setLoader(false);
    }
    if (200 === status) {
      resetForm();
      if (!allowedCityIds.includes(cityData.id_area)) {
        window.location.href = `/user/not-valid?email=${inputs.email}&location=${
          cityData?.name
        }&fullName=${inputs.firstName + ' ' + inputs.lastName}`;
        return;
      }
      router.push(`/user/validate?email=${data.email}`);
    }
  };

  return (
    <div className="registerPage_container mt-9 relative max-w-5xl mx-auto mb-40 mq-register">
      <MainTitle />
      <Group11 />
      <div className="registerPage_form_container relative bg-white px-32 pt-14 pb-9 register-form rounded-lg mq-form">
        <Group18Img />
        <form
          className="registerPage_form block mx-auto rounded-md relative"
          method="POST"
          onSubmit={handleSubmit}
        >
          <Loader
            loading={loader}
            className="absolute right-0 left-0 m-auto top-0 z-20 bottom-0 my-auto"
          />
          <SubTitle />
          <span />
          <div className={`grid gap-x-4 gap-y-7 md:grid-cols-2 ${loader ? 'opacity-30 ' : ''}`}>
            <SearchCountryInput
              cityId={cityId}
              setCityId={setCityId}
              setCityData={setCityData}
              cities={cities}
              error={error}
              setError={setError}
              setTheStreet={setTheStreet}
              setInputValue={setInputValue}
              emptyStateError={errors.cityData}
            />
            <SearchStreetInput
              theStreets={theStreets}
              setTheStreet={setTheStreet}
              cityData={cityData}
              inputValue={inputValue}
              setInputValue={setInputValue}
              emptyStateError={errors.theStreet}
            />
          </div>
          <hr className="dashed my-5" />
          <div
            className={`second-grid grid gap-x-4 gap-y-7 grid-cols-2 ${
              loader ? 'opacity-30 ' : ''
            }`}
          >
            <FirstName
              handleChange={handleChange}
              value={inputs.firstName}
              isError={errors.firstName}
            />
            <LastName
              handleChange={handleChange}
              value={inputs.lastName}
              isError={errors.lastName}
            />

            <CellphoneInput
              handleChange={handleChange}
              value={inputs.cellphone}
              isError={errors.cellphone}
            />
            <EmailInput handleChange={handleChange} value={inputs.email} isError={errors.email} />

            <AgeInput
              handleChange={handleChange}
              value={inputs.birth_year}
              isError={errors.birth_year}
            />
            <div className="signup-radio-wrapper mb-5  flex">
              <p className="inline-block text-regiterPageDarkBottomText leading-regiterPageDarkBottomText text-regiterPageDarkBottomTextcolor">
                לפני שאנחנו ממשיכים, איך נוח לך שנפנה אליך?
              </p>
              <div className="signup-radio-sub-wrapper flex md:gap-x-7">
                <MaleRadio handleChange={handleChange} />
                <FemaleRadio handleChange={handleChange} />
              </div>
            </div>
          </div>
          {error ? <div className="text-red-500 shake mt-3">{error}</div> : ''}
          <CoefficientCheckbox
            handleChange={handleChange}
            checked={inputs.employment_coefficient}
          />
          <hr className="dashed col-start-1 col-end-3 my-4" />

          <div className="md:flex-row flex-col flex items-center md:justify-between">
            <ConditionsCheckbox
              termsText={termsText}
              handleChange={handleChange}
              checked={inputs.terms_and_conditions}
              isError={errors.terms_and_conditions}
            />
            <Button
              type="submit"
              status="main"
              name="שנתחיל?"
              className="h-[50px] w-[250px]"
              disabled={loader}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
