import React, { useState, useMemo } from 'react';
import { useParams } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

import { default as MenuItem } from "./MenuItem/MenuItem";

import { Divider, Button, Arrow } from "elements";
import { MOBILE_MEDIA_QUERY } from "consts/device-breakpoint";
import careerSVG from "img/career.svg";

import "./navigation.less";

import config from "./config.json";

const getAllMenuId = (arr = []) => {
    return arr.map(item => item.id);
}

const Navigation = () => {
    const isMobile = useMediaQuery({
        query: MOBILE_MEDIA_QUERY
    });

    const menuIds = getAllMenuId(config.careers);
    const [openMenuIds, setOpenMenuIds] = useState([]);
    const [openButtonClick, setOpenButtonClick] = useState(false);
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    let { courseId = "" } = useParams();

    const onClickButton = () => {
        setOpenMenuIds(!openButtonClick ? menuIds : []);
        setOpenButtonClick(!openButtonClick);
    }

    const onClickMenu = (menuId) => {
        const index = openMenuIds.indexOf(menuId);

        if (index > -1) { // повторный клик на открытое меню, закрываем;
            setOpenMenuIds(openMenuIds.filter(el => el !== menuId));
        } else {
            setOpenMenuIds(openMenuIds.concat(menuId));
        }
    }

    const onClickMobileMenu = () => {
        setOpenMobileMenu(!openMobileMenu);
    }

    let menuList;

    menuList = useMemo(() => {
        return config.careers.map(menu => {
            const { id, title, items } = menu;
            const isOpenMenu = openMenuIds.indexOf(id) > -1;

            return <MenuItem key={id} isOpenMenu={isOpenMenu} isFirstOpen={openMenuIds === null} menuId={id} title={title} items={items} courseId={courseId} onClickMenu={onClickMenu} />;
        });
    }, [config.careers, openMenuIds, courseId]);

    if (isMobile) { // для быстроты, в реальном проекте и в случае если предполагается, что поведение будет различаться - делаем компоненты desktop-navigation, mobile-navigation
        return <div className="mobile-navigation-wrapper">
            <div className="mobile-head" onClick={onClickMobileMenu}>
                <img src={careerSVG} width="18" height="15" />
                <span className="title">CHOOSE YOUR CAREER</span>
                <Arrow isOpen={openMobileMenu} />
            </div>
            {openMobileMenu && <div className="mobile-menu">{menuList}</div>}
        </div>
    }

    return <div className="navigation-wrapper">
        <div className="head">
            <img src={careerSVG} width="18" height="15" />
            <span className="title">CAREERS</span>
        </div>
        <Divider />
        <div className="menu">{menuList}</div>
        <Divider />
        <Button title={`${openButtonClick ? "hide" : "show"} all programmes`} onClick={onClickButton} />
    </div>
};


export default Navigation;