import './for-pleasure.scss';
import Header from "../common/header/header";
import CardDescription
	from "../common/card-description/card-description";
import {
	cardDescr02,
	coffeeCard01,
	coffeeCard02,
	coffeeCard03
} from "../../assets/img/imgIndex";
import Footer from "../common/footer/footer";
import Card from "../common/card/card";

const ForPleasure = ({menuItems, pageId}) => {
	const cardData = {
		image: cardDescr02,
		title: 'About our goods',
		text: `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.\n\n
		Afraid at highly months do things on at. Situation recommend objection do intention
		so questions.\n
			As greatly removed calling pleased improve an. Last ask him cold feel
		met spot shy want. Children me laughing we prospect answered followed. At it went
		is song that held help face.`,
	};

	const cardItemsData = [
		{
			image: coffeeCard01,
			name: 'Solimo Coffee Beans 2 kg\n\nBrazil',
			price: '10.73$',
			country: 'Brazil'
		},
		{
			image: coffeeCard02,
			name: 'Presto Coffee Beans 1 kg\n\nKenya',
			price: '15.99$',
			country: 'Kenya'
		},
		{
			image: coffeeCard03,
			name: 'AROMISTICO Coffee 1 kg\n\nColumbia',
			price: '6.99$',
			country: 'Columbia'
		},
		{
			image: coffeeCard01,
			name: 'Solimo Coffee Beans 2 kg\n\nBrazil',
			price: '10.73$',
			country: 'Brazil'
		},
		{
			image: coffeeCard02,
			name: 'Presto Coffee Beans 1 kg\n\nKenya',
			price: '15.99$',
			country: 'Kenya'
		},
		{
			image: coffeeCard03,
			name: 'AROMISTICO Coffee 1 kg\n\nColumbia',
			price: '6.99$',
			country: 'Columbia'
		},
	];

	const cardItems = cardItemsData.map((item, i) => {
		return <Card key={i}
					 image={item.image}
					 name={item.name}
					 price={item.price}/>
	})
	return (
		<>
			<Header menuItems={menuItems}
					pageId={pageId}/>
			<section
				className={'for-pleasure-about'}>
				<CardDescription
					image={cardData.image}
					title={cardData.title}
					text={cardData.text}/>
			</section>
			<div className={'mini-divider'}/>
			<section
				className={'for-pleasure-cards'}>
				{cardItems}
			</section>
			<Footer
				menuItems={menuItems}/>
		</>
	)
}

export default ForPleasure;