import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useForm from '../../src/hooks/useForm';
import Infoservice from '../../src/services/info.service';
import AgeInput from './register_form/inputs/AgeInput';
import CellphoneInput from './register_form/inputs/CellphoneInput';
import EmailInput from './register_form/inputs/EmailInput';
import FemaleRadio from './register_form/inputs/FemaleRadio';
import MaleRadio from './register_form/inputs/MaleRadio';
import FullnameInput from './register_form/inputs/FullnameInput';
import SearchCountryInput from './SearchCountryInput';
import SearchStreetInput from './SearchStreetInput';
import CoefficientCheckbox from './register_form/inputs/CoefficientCheckbox';
import ConditionsCheckbox from './register_form/inputs/ConditionsCheckbox';
import MainTitle from './register_form/texts/MainTItle';
import SubTitle from './register_form/texts/SubTitle';
import Group18Img from '../svg/Group18Img';
import Group11 from '../svg/Group11';
import UserAPI from '../../src/services/user.service';
import Button from '../common/Button';
import Loader from '../common/Loader';

const RegisterForm = ({ cities, termsText }) => {
  const [cityId, setCityId] = useState(null);
  const [cityData, setCityData] = useState('');
  const [theStreets, setTheStreets] = useState(null);
  const [theStreet, setTheStreet] = useState(null);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const router = useRouter();
  const [inputValue, setInputValue] = useState();

  const { inputs, handleChange, resetForm } = useForm({
    username: '',
    email: '',
    password: '',
    cellphone: '',
    age: '',
    fullname: '',
    gender: '',
    employment_coefficient: null,
    terms_and_conditions: null,
  });

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
    setLoader(true);

    const dataToSend = {
      ...inputs,
      city: theStreet ? JSON.stringify(cityData) : null,
      street: theStreet ? JSON.stringify(theStreet) : null,
      username: inputs.email,
    };

    const { data, status } = await UserAPI.register(dataToSend);
    if (200 !== status) {
      setError(data.message);
    }

    if (200 === status) {
      // TODO: Set cookie with nookies
      resetForm();
      router.push('/user/login?error="נרשמת בהצלחה, כעת נותר להתחבר"'); // TODO: go to last page user visited
    }
    setLoader(false);
  };

  return (
    <div className="registerPage_container mt-24 relative max-w-5xl mx-auto mb-40 mq-register">
      {/* <div className="registerPage_container relative xl:-mt-24 max-w-5xl mx-auto mb-40 "> */}
      {/* <ConditionsPopup /> */}
      <MainTitle />
      <Group11 />
      <div className="registerPage_form_container relative bg-white px-32 pt-14 pb-9 register-form rounded-lg mq-form">
        <Group18Img />
        <form
          className="registerPage_form block mx-auto rounded-md relative"
          method="POST"
          onSubmit={handleSubmit}
          id="theform"
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
            />
            <SearchStreetInput
              theStreets={theStreets}
              setTheStreet={setTheStreet}
              cityData={cityData}
              inputValue={inputValue}
              setInputValue={setInputValue}
            />
          </div>
          <hr className="dashed my-5" />
          <div className={`grid gap-x-4 gap-y-7 md:grid-cols-2 ${loader ? 'opacity-30 ' : ''}`}>
            <EmailInput handleChange={handleChange} value={inputs.email} />

            <FullnameInput handleChange={handleChange} value={inputs.fullname} />

            <CellphoneInput handleChange={handleChange} value={inputs.cellphone} />

            <AgeInput handleChange={handleChange} value={inputs.age} />
          </div>
          {error ? <div className="text-red-500 shake mt-3">{error}</div> : ''}

          <div className=" mt-7 mb-5 col-start-1 col-end-3 flex">
            <p className="inline-block text-regiterPageDarkBottomText leading-regiterPageDarkBottomText text-regiterPageDarkBottomTextcolor">
              לפני שאנחנו ממשיכים, איך נוח לך שנפנה אליך?
            </p>
            <div className="flex gap-x-7">
              <MaleRadio handleChange={handleChange} />
              <FemaleRadio handleChange={handleChange} />
            </div>
          </div>

          <CoefficientCheckbox handleChange={handleChange} />
          <hr className="dashed col-start-1 col-end-3 my-4" />

          <div className="flex justify-between">
            <ConditionsCheckbox termsText={termsText} handleChange={handleChange} />
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
