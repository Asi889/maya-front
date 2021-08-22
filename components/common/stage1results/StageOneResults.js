import { useState } from 'react';
// import Button from '../Button';
import { Case, Switch } from '../Switch';
import CurrentEducation from './CurrentEducation';
import EducationCurrent from './EducationCurrent';
import Stage1middleTitles from './Stage1middleTitles';
import StageOneTop from './StageOneTop';
import StagesResultsWorkExperience from './StagesResultsWorkExperience';
import WhereIWantToGo from './WhereIWantToGo';
import WhereToGo from './WhereToGo';

const StageOneResults = (props) => {
  const { stageData } = props;
  console.log(stageData);
  const [test, setTest] = useState(false);
  const [workExperience, setWorkExperience] = useState(true);
  const [currentEducation, setCurrentEducation] = useState(false);
  const [whereToGo, setWhereToGo] = useState(false);
  const [selected, setSelected] = useState('work-exprerience');
  const [medal, setMedal] = useState(stageData?.stage1?.medal ? stageData?.stage1?.medal : false);

  ////////////////////////////////////////////////////////
  const [jobActive, setJobActive] = useState(true);
  const [eductionActive, setEductionActive] = useState(false);
  const [goActive, setGoActive] = useState(false);
  //////////////////////////////////////////////

  const close = () => {
    if ('undefined' === typeof window) return;
    const el = document.querySelector('#close-modal-hack');
    el?.click();
  };
  const titleCheck = (e) => {
    if ('work-exprerience' === e.target.value) {
      setJobActive(true);
      setEductionActive(false);
      setGoActive(false);
    }
    if ('current-education' === e.target.value) {
      setEductionActive(true);
      setJobActive(false);
      setGoActive(false);
    }
    if ('where-to-go' === e.target.value) {
      setGoActive(true);
      setJobActive(false);
      setEductionActive(false);
    }
  };

  const changeSelectedType = (e) => {
    setSelected(e.target.value);
    titleCheck(e);
    console.log(e.target);
  };
  return (
    <div className="stage1-wrapper grid">
      <StageOneTop stageData={stageData} />

      <hr className="dashed my-5" />

      <div className="stage1-middle-wrapper flex justify-around gap-x-[104px]">
        <Stage1middleTitles
          jobActive={jobActive}
          eductionActive={eductionActive}
          goActive={goActive}
          changeType={changeSelectedType}
        />

        <div className="grid pt-[30px] gap-y-8">
          <Switch test={selected}>
            <Case value="work-exprerience">
              <StagesResultsWorkExperience
                medal={medal}
                stageData={stageData?.stage1?.middle?.workWExperience}
              />
            </Case>

            <Case value="current-education">
              <EducationCurrent stageData={stageData?.stage1?.middle?.currentEducation} />
            </Case>

            <Case value="where-to-go">
              <WhereToGo stageData={stageData?.stage1?.middle?.whereIWantToGo} />
            </Case>
          </Switch>
        </div>
      </div>

      <div className="stage1-bottom-wrapper">
        <h1>data</h1>
        <br />
        <h1>more data</h1>
      </div>
    </div>
  );
};

export default StageOneResults;
