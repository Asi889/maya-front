/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Eye from '../svg/Eye';
import ProfileFavoriteEmpty from './ProfileFavoriteEmpty';
import CategoryPercentage from './CategoryPercentage';
import JustHeart from '../common/JustHeart';

export default function ProfileFavoriteData({ jobs, categoryType }) {
  let data = [];

  switch (true) {
    case 'jobs' === categoryType.id:
      data = jobs;
      break;
    case 'studies' === categoryType.id:
      data = jobs;
      break;
    case 'professions' === categoryType.id:
      data = jobs;
      break;
    default:
      break;
  }

  const sendJob = () => {};

  if (!Array.isArray(data) || !data.length) {
    return <ProfileFavoriteEmpty categoryType={categoryType} />;
  }
  return (
    <ul className="jobs-list flex flex-col gap-y-4 mt-4">
      {data.map((dataItem) => (
        <div>
          <div className="border-b-[1px] mt-[20px] border-[rgba(151,151,151,0.13)] py-2">
            <div className="flex justify-between">
              <div className="flex">
                <div className="flex">
                  <CategoryPercentage percentage={dataItem?.percentage} />
                  <div className="profile-fav-company leading-6 mr-[15px]">
                    <div className="font-bold text-[#333300] text-[20px]">{dataItem.group}</div>
                    <div className="description font-bold text-[18px] text-[#333300]">
                      {dataItem.title}
                    </div>
                  </div>
                </div>
              </div>
              <div className="description leading-5 w-[450px] mr-10 text-[#333300] opacity-70 text-[18px]">
                {dataItem.description}
              </div>
              <div className="mr-[100px] flex items-center">
                <JustHeart id={dataItem.id} type={categoryType.id} />
                <button
                  className="ml-[35px] mr-[20px] focus:outline-none rounded-full border-black border"
                  type="button"
                >
                  <Eye />
                </button>
                {'jobs' === categoryType.id && (
                  <button
                    className="border-black border-2 text-black rounded-[10px] py-[2px] px-[20px] active:bg-gray-lighter focus:outline-none h-10"
                    type="button"
                    onClick={sendJob}
                  >
                    הגשת מועמדות
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </ul>
  );
}
