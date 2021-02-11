import React from 'react';
import refreshSVG from "img/refresh.svg";

import "./footer.less";

const Footer = () => <div className="footer">
    <span>More Programmes</span>
    <img width="16" height="16" src={refreshSVG} />
</div>;

export default Footer;