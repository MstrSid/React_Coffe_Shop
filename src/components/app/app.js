import './app.scss';
import MainPage from "../main-page/main-page";
import OurCoffee from "../our-coffee/our-coffee";
import CoffeeItem
	from "../coffee-item/coffee-item";
import ForPleasure
	from "../for-pleasure/for-pleasure";

function App() {
	const menuItems = [
		'Coffee house',
		'Our coffee',
		'For your pleasure'
	]
	return (
		<div className="app">
			<MainPage menuItems={menuItems} pageId={'main'}/>
			<OurCoffee menuItems={menuItems} pageId={'our'}/>
			<CoffeeItem menuItems={menuItems} pageId={'our'}/>
			<ForPleasure menuItems={menuItems} pageId={'pleasure'} />
		</div>
	);
}

export default App;
