import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { Button } from "elements";
import { default as ItemSchedulte } from "../ItemSchedule/ItemSchedule";
import { logoImg } from "./logo";
import { MOBILE_MEDIA_QUERY } from "consts/device-breakpoint";

import "./frontInfo.less";

const FrontInfo = ({ id, logo, type, title, period, onClick }) => {
    const isMobile = useMediaQuery({
        query: MOBILE_MEDIA_QUERY
    });


    return <div className="course-item-wrapper">
        <div className="logo">
            {logoImg[logo]}
        </div>
        <div className="type">{type}</div>
        <div className="title">{title}</div>
        <ItemSchedulte period={period} />
        <Button title="More Info" type="green" onClick={!isMobile ? onClick : () => { }} />
    </div>
};

export default FrontInfo;