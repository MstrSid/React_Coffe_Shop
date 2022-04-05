import './header.scss';
import MainMenu from "../main-menu/main-menu";
import HTitle from "../h-title/h-title";
import {headerForPleasure, headerMainBg, headerOurCoffee} from "../../../assets/img/imgIndex";

const Header = ({menuItems, pageId}) => {
	const options = {
		imageBgVariants: {
			main: headerMainBg, our: headerOurCoffee, pleasure: headerForPleasure,
		}, titleText: {
			main: 'Everything You Love About Coffee', our: 'Our Coffee', pleasure: 'For your pleasure',
		}
	} //create variants for images, title texts, etc.
	const settings = {};
	for (let item in options) {
		for (let key in options[item]) {
			if (key === pageId) {
				settings[item] = options[item][key];
			}
		}
	} //receive settings from options based on pageId
	return (<header className={'header'}>
			<img className={'header-bg'} src={settings.imageBgVariants.toString()} alt="header background"/>
			<div className={'header-content-wrapper'}>
				<MainMenu menuItems={menuItems} isSecondary={false}/>
				<HTitle titleText={settings.titleText}/>

			</div>

		</header>

	)
}

export default Header;