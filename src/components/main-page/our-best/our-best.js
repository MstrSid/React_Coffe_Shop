import './our-best.scss';
import Title from "../../common/title/title";
import Card from "../../common/card/card";
import {coffeeCard01, coffeeCard02, coffeeCard03} from "../../../assets/img/imgIndex";

const OurBest = () => {
	const titleText = 'Our best';
	const cardItemsData = [
		{
			image: coffeeCard01,
			name: 'Solimo Coffee Beans 2 kg',
			price: '10.73$'
		},
		{
			image: coffeeCard02,
			name: 'Presto Coffee Beans 1 kg',
			price: '15.99$'
		},
		{
			image: coffeeCard03,
			name: 'AROMISTICO Coffee 1 kg',
			price: '6.99$'
		},
	]

	const cardItems = cardItemsData.map(item => {
		return <Card image={item.image} name={item.name} price={item.price}/>
	})

	return (
		<section className={'our-best'}>
			<Title titleText={titleText}/>
			<div className={'cards-wrapper'}>
				{cardItems}
			</div>

		</section>
	)
}

export default OurBest;