import "./header.scss";
import {headerMainBg, headerOurCoffee, headerForPleasure} from "../../assets/img/imgIndex";
import MainMenu from "../main-menu/main-menu";
import MainTitle from "../main-title/main-title";

const Header = ({menuItems, pageId}) => {
    const options = {
        imageBgVariants: {
            main: headerMainBg, our: headerOurCoffee, pleasure: headerForPleasure
        }, titleText: {
            main: 'Everything You Love About Coffee', our: 'Our Coffee', pleasure: 'For your pleasure'
        }
    } //create variants for images, title texts, etc.

    const settings = []

    for (let item in options) {
        for (let key in options[item]) {
            if (key === pageId) {
                settings.push(options[item][key])
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
            <img className={'header-bg'} src={settings[0]} alt="header background"/>
            <div className={'header-content-wrapper'}>
                <MainMenu menuItems={menuItems}/>
                <MainTitle titleText={settings[1]}/>
            </div>
        </header>

    )
}

export default Header;