import "./header.scss";
import {headerMainBg, headerOurCoffee, headerForPleasure} from "../../assets/img/imgIndex";
import MainMenu from "../main-menu/main-menu";
import HeaderTitle from "../header-title/header-title";
import Divider from "../divider/divider";
import HeaderText from "../header-text/header-text";

const Header = ({menuItems, pageId}) => {
    const options = {
        imageBgVariants: {
            main: headerMainBg, our: headerOurCoffee, pleasure: headerForPleasure,
        }, titleText: {
            main: 'Everything You Love About Coffee', our: 'Our Coffee', pleasure: 'For your pleasure',
        }
    } //create variants for images, title texts, etc.

    const headerText = ['We makes every day full of energy and taste', 'Want to try our beans?'];

    const settings = {};
    for (let item in options) {
        for (let key in options[item]) {
            if (key === pageId) {
                settings[item] = options[item][key];
            }
        }
    } //receive settings from options based on pageId


    /*
    create background based on settings;
    create wrapper for best positioning;
    create main menu and pass menu names link as props;
    create main title and pass title based on settings;
    */
    return (<header className={'header'}>
            <img className={'header-bg'} src={settings.imageBgVariants.toString()} alt="header background"/>
            <div className={'header-content-wrapper'}>
                <MainMenu menuItems={menuItems}/>
                <HeaderTitle titleText={settings.titleText}/>
                <Divider/>
                <HeaderText headerText={headerText}/>
            </div>
        </header>

    )
}

export default Header;