import { useState } from 'react';
// import useFormStudy from '../../../src/hooks/useFormStudy';
import useFormStudyInner from '../../src/hooks/useFormStudyInner';
import CompareStepTwo from './CompareStepTwo';
import CompareStepOne from './CompareStepOne';

const CompareSidePop = ({ open, setOpen, comparedCategorys, studies }) => {
  const [compare, setCompare] = useState(false);
  const { inputs, handleChange, clearForm } = useFormStudyInner({
    categories: [],
  });
  const handleCompare = () => {
    const filtered = [];
    inputs.categories.forEach((x) => {
      studies.forEach((y) => {
        // eslint-disable-next-line eqeqeq
        if (x == y.id) {
          filtered.push(y);
        }
      });
    });
    setCompare(filtered);
    return filtered;
  };

  return (
    <>
      {compare ? (
        <CompareStepTwo
          open={open}
          inputs={inputs}
          setOpen={setOpen}
          setCompare={setCompare}
          comparedCategorys={comparedCategorys}
          studies={studies}
          clearForm={clearForm}
          compare={compare}
        />
      ) : (
        <CompareStepOne
          open={open}
          inputs={inputs}
          handleChange={handleChange}
          handleCompare={handleCompare}
          setOpen={setOpen}
          comparedCategorys={comparedCategorys}
          studies={studies}
        />
      )}
    </>
  );
};
export default CompareSidePop;
