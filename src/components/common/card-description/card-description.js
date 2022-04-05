import './card-description.scss';
import Title from "../title/title";
import Divider from "../divider/divider";
import Text from "../text/text";

const CardDescription = ({image, title, text}) => {
	return(
		<div className={'card-descr-wrapper'}>
			<img className={'card-descr-img'} src={image} alt="woman with coffee"/>
			<div className="card-descr-content">
				<Title titleText={title}/>
				<Divider inverted={true}/>
				<Text text={text}/>
			</div>
		</div>
	)
}

export default CardDescription;