/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import Xcircle from '../../svg/Xcircle';
import Button from '../Button';

const stage2Top = ({ data, close }) => (
  <>
    <div className="stage-top-wrapper flex justify-between">
      <button className="self-start" type="button" onClick={close}>
        <Xcircle />
      </button>
      <div className="grid justify-center">
        <h1 className="text-3xl font-bold text-center text-[#333333]">דוח תוצאות</h1>
        <h2 className="text-3xl text-[#333333]">{data.title}</h2>
      </div>
      <Link href="/profile">
        <a>
          <Button className="w-24" type="button" status="main" name="עריכה" />
        </a>
      </Link>
    </div>

    <div className="text-center py-8 bg-[#F5F5F5] mt-7 mx-8 px-5">
      <p className="text-xl text-[#393939] ">
        <strong>{data?.firsttext1}</strong>
        <br />
        {data?.firstText2}
      </p>
    </div>

    <div className="text-center py-8 px-[113px]">
      <p className="text-xl text-[#393939]">{data?.secondText}</p>
    </div>
  </>
);
export default stage2Top;
