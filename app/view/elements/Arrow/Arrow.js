import React from 'react';

import arrowSVG from "img/arrow.svg";
import arrowOpenSVG from "img/arrow_open.svg";

const Arrow = ({ isOpen }) => {
    return <img src={isOpen ? arrowOpenSVG : arrowSVG} />
}

export default Arrow;