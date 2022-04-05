import './our-coffee.scss';
import Header from "../common/header/header";
import Footer from "../common/footer/footer";
import CardDescription
	from "../common/card-description/card-description";
import {
	cardDescr01,
	coffeeCard01, coffeeCard02, coffeeCard03
} from "../../assets/img/imgIndex";
import Card from "../common/card/card";
import SearchForm
	from "./search-form/search-form";
import {Component} from "react";

class OurCoffee extends Component {
	constructor(props) {
		super(props);
		this.menuItems = [
			'Coffee house',
			'Our coffee',
			'For your pleasure'
		]; //create menu links names
		this.cardData = {
			image: cardDescr01,
			title: 'About our beans',
			text: 'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.\n' +
				'\n' +
				'Afraid at highly months do things on at. Situation recommend objection do intention\n' +
				'so questions. \n' +
				'As greatly removed calling pleased improve an. Last ask him cold feel\n' +
				'met spot shy want. Children me laughing we prospect answered followed. At it went\n' +
				'is song that held help face.',
		};
		this.pageId = 'our'; //pageId for header-main text title
		this.state = {
			cardItemsData: [
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
			],
			searchTerm: '',
			filterTerm: 'All'
		}
	}

	searchCoffee = (items, searchTerm) => {
		if (searchTerm === 0) {
			return items;
		}
		return items.filter(item => {
			return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
		})
	}

	onUpdateSearch = (searchTerm) => {
		this.setState({searchTerm: searchTerm})
	}

	filterCoffee = (items, filterTerm) => {
		switch (filterTerm) {
			case 'All':
				return items;
			case 'Brazil':
				return items.filter(item => item.country === 'Brazil');
			case 'Kenya':
				return items.filter(item => item.country === 'Kenya');
			case 'Columbia':
				return items.filter(item => item.country === 'Columbia');
			default:
				return items;

		}
	}

	onFilter = (filterTerm) => {
		this.setState({filterTerm: filterTerm})
	}

	render() {
		const {cardItemsData, filterTerm, searchTerm} = this.state;

		const visible = this.filterCoffee(this.searchCoffee(cardItemsData, searchTerm), filterTerm);
		const cardItems = visible.map((item, i) => {
			return <Card key={i}
						 image={item.image}
						 name={item.name}
						 price={item.price}/>
		})
		return (
			<>
				{/*create header-main and pass props*/}
				<Header menuItems={this.menuItems}
						pageId={this.pageId}/>
				<section
					className={'our-coffee-about'}>
					<CardDescription
						image={this.cardData.image}
						title={this.cardData.title}
						text={this.cardData.text}/>
				</section>
				<div className={'mini-divider'}/>
				<SearchForm onUpdateSearch={this.onUpdateSearch} filter={filterTerm} onFilter={this.onFilter}/>
				<section
					className={'our-coffee-cards'}>
					{cardItems}
				</section>

				<Footer
					menuItems={this.menuItems}/>
			</>
		)
	}


}

export default OurCoffee;