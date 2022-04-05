import "./main-menu.scss";
import {coffeeMenuLogo} from "../../../assets/img/imgIndex";

/*
receive menu items names from props and use it when created elements;
for first menu item create logo;
*/

const MainMenu = ({menuItems, isSecondary}) => {
    const mainClass = isSecondary ? 'main-menu_secondary' : 'main-menu';
    const mainImgClass = isSecondary ? 'main-menu-img_inverted' : 'main-menu-img';
    const menuItemsLocal = menuItems.map((item, i) => {
        if (i === 0) {
            return (<li key={i} className={'main-menu-item'}>
                    <img className={mainImgClass} src={coffeeMenuLogo} alt={'coffee menu logo'}/>
                    <span>{item}</span>
                </li>)
        } else {
            return (<li key={i} className={'main-menu-item'}>
                    <span>{item}</span>
                </li>)
        }
    });
    return (<ul className={mainClass}>
            {menuItemsLocal}
        </ul>)

}

export default MainMenu;