import './main-about.scss';
import Title from "../../common/title/title";
import Divider
	from "../../common/divider/divider";
import Text from "../../common/text/text";

const MainAbout = () => {
	const titleText = 'About Us';
	const text = 'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face. \n \n Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set preserved far recommend. Did even but nor are most gave hope. Secure active living depend son repair day ladies now.';
	return (
		<section className={'main-about'}>
			<Title titleText={titleText}/>
			<Divider inverted={true}/>
			<div className={'main-about-content'}>
				<Text text={text}/>
			</div>

		</section>
	)

}

export default MainAbout;