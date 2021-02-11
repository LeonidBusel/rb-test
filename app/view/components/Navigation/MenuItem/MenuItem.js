import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Arrow } from "elements";
import "./menuItem.less";

const MenuItem = ({ title, menuId, isOpenMenu, items = [], courseId, onClickMenu }) => {
    const subMenu = items.map(item => {
        const { id, title } = item;

        return <Link className={`sub-menu-item-wrapper${courseId === id ? " active" : ""}`} to={`/course/${id}`} key={id}>
            <div className="sub-menu-item">{title}</div>
        </Link>;
    });

    return <div className="menu-item-wrapper" key={menuId}>
        <div className={`menu-item-title${isOpenMenu ? " open" : ""}`} onClick={() => { onClickMenu(menuId) }}>
            <span>{title}</span>
            <Arrow isOpen={isOpenMenu} />
        </div>

        {isOpenMenu && <div className="sub-menu-wrapper">{subMenu}</div>}
    </div>
};

export default MenuItem;