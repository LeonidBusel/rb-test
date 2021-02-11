import React from 'react';

import { Button } from "elements";

import "./mockMoreInfo.less";

const MockMoreInfo = ({ onClick }) => {

    return <div className="more-info-wrapper">
        <div className="title">
            MSc Data Analytics and Information Systems Management
        </div>
        <div className="duration">
            <div className="caption">Duration:</div>
            <div>Minimum: 18 months</div>
            <div>Maximum: 36 month</div>
        </div>
        <div className="dates">
            <div className="caption">Start Dates:</div>
            <div>January, April, July, October</div>
        </div>
        <div className="price">£8,500</div>
        <Button title="More Info" onClick={onClick} />
    </div>
};

export default MockMoreInfo;