import './footer.scss';
import MainMenu from "../main-menu/main-menu";
import Divider from "../divider/divider";

const Footer = ({menuItems}) => {
	return (
		<div className="footer">
			<MainMenu menuItems={menuItems} isSecondary={true}/>
			<Divider inverted={true}/>
		</div>
	)
}

export default Footer;