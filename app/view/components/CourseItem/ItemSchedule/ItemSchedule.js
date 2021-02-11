import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { MOBILE_MEDIA_QUERY } from "consts/device-breakpoint";
import graduateSVG from "img/graduate.svg";
import periodSVG from "img/period.svg";

import "./itemSchedule.less";

const ItemSchedulte = ({ period }) => {
    const isMobile = useMediaQuery({
        query: MOBILE_MEDIA_QUERY
    });

    if (isMobile) {
        return <div className="item-schedule-wrapper">
                <div>Postgraduate</div>
                <div className="price">£8,500</div>
        </div>
    }

    return <div className="item-schedule-wrapper">
        <div className="graduate">
            <img src={graduateSVG} width="18" height="15" />
            <span>Postgraduate</span>
        </div>
        <div className="period">
            <img src={periodSVG} width="15" height="15" />
            <span>{period}</span>
        </div>
    </div>
};

export default ItemSchedulte;