import './coffee-item.scss';
import Header from "../common/header/header";
import Footer from "../common/footer/footer";
import {
	cardAboutIt
} from "../../assets/img/imgIndex";
import CardAbout
	from "../common/card-about/card-about";

const CoffeeItem = ({menuItems, pageId}) => {
	const description = {
			image: cardAboutIt,
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			price: '10.73$',
			country: 'Brazil'
		};
	return (
		<>
			<Header menuItems={menuItems}
					pageId={pageId}/>
			<CardAbout description={description} title={'About it'}/>
			<Footer menuItems={menuItems}/>
		</>

	)
}

export default CoffeeItem;