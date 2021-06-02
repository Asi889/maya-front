/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export default function CheckboxGroup() {
  return (
    <div className="button-group">
      <div className="button-sec">
        <input type="radio" id="r1" name="r-group" className="cursor-pointer" />
        <label className="button-label cursor-pointer" htmlFor="r1">
          הכל
        </label>
      </div>
      <div className="button-sec">
        <input type="radio" id="r2" name="r-group" className="cursor-pointer" />
        <label className="button-label cursor-pointer" htmlFor="r2">
          הכי מתאים
        </label>
      </div>
      <div className="button-sec">
        <input type="radio" id="r3" name="r-group" className="cursor-pointer" />
        <label className="button-label cursor-pointer" htmlFor="r3">
          הכי חדש
        </label>
      </div>
    </div>
  );
}