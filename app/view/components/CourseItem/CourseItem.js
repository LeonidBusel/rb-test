import React, { useState } from 'react';

import { default as FrontInfo } from "./FrontInfo/FrontInfo";
import { default as MockMoreInfo } from "./MockMoreInfo/MockMoreInfo";

const CourseItem = ({ id, logo, type, title, period }) => {
    const [showMoreInfo, setShowMoreInfo] = useState(false);

    const onClickButton = () => {
        setShowMoreInfo(!showMoreInfo);
    }

    if (showMoreInfo) {
        return <MockMoreInfo logo={logo} type={type} title={title} period={period} onClick={onClickButton} />;
    }

    return <FrontInfo logo={logo} type={type} title={title} period={period} onClick={onClickButton} />;
}

export default CourseItem;