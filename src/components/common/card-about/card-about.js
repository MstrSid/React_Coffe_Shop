import './card-about.scss';
import Title from "../title/title";
import Divider from "../divider/divider";

const CardAbout = ({description, title}) => {
	const {
		image,
		text,
		price,
		country
	} = description
	return (
		<div className={'card-about-wrapper'}>
			<img className={'card-about-img'}
				 src={image}
				 alt="coffee"/>
			<div className="card-about-content">
				<Title titleText={title}/>
				<Divider inverted={true}/>
				<div
					className={'card-about-country'}>
					<span
						className={'card-about-country-label'}>Country: </span>
					<span
						className={'card-about-country-text'}>{country}</span>
				</div>
				<div
					className={'card-about-description'}>
					<span
						className={'card-about-description-label'}>Description: </span>
					<span
						className={'card-about-description-text'}>{text}</span>
				</div>
				<div
					className={'card-about-price'}>
					<span
						className={'card-about-price-label'}>Price: </span>
					<span
						className={'card-about-price-text'}>{price}</span>
				</div>
			</div>
		</div>
	)
}

export default CardAbout;