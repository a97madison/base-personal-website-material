import React from 'react';
import {makePressableObject} from '../GlobalHelpers';
import EducationHeader from './EducationHeader';

import * as Constants from '../JsxConstants';

import './Education.scss';
import '../ConstantStyles.scss';

function Education(props) {
  const education = props.educationProps;

  function headerFunction(text) {
    return (
      <div className="education-header">
        <p> {text} </p>
      </div>
    );
  }

  function textToObjectFunction(textObject) {
    const key = textObject[1];
    const text = textObject[0];

    return (
      <div key={key} className="education-bullet-points">
        <p> {text} </p>
      </div>
    );
  }

  const headerObject = headerFunction(education.headerText)
  const bulletPointObjects = education.bulletPointsArray.map(textToObjectFunction);

  const text = Constants.emptyText;
  const imageName = Constants.waterlooImageName;
  const link = education.schoolLink;
  const pressableType = Constants.educationPressableType;
  const pressableObject = makePressableObject(text,imageName,link,pressableType);

  // RETURN EDUCATION DIV
  return (
    <div id="education" className="education">
      <EducationHeader />

      <div className="education-info">
        {headerObject}
        <div className="education-information">
          <div className="education-image-parent">
            {pressableObject}
          </div>
          <div>
            <div className="education-bullet-points">
              {bulletPointObjects}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
