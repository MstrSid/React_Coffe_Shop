import "./main-menu.scss";
import {coffeeMenuLogo} from "../../../assets/img/imgIndex";

/*
receive menu items names from props and use it when created elements;
for first menu item create logo;
*/

const MainMenu = ({menuItems}) => {
    const menuItemsLocal = menuItems.map((item, i) => {
        if (i === 0) {
            return (<li key={i} className={'main-menu-item'}>
                    <img className={'main-menu-img'} src={coffeeMenuLogo} alt={'coffee menu logo'}/>
                    <span>{item}</span>
                </li>)
        } else {
            return (<li key={i} className={'main-menu-item'}>
                    <span>{item}</span>
                </li>)
        }
    });
    return (<ul className={'main-menu'}>
            {menuItemsLocal}
        </ul>)

}

export default MainMenu;