import './card.scss';

const Card = ({image, name, price}) => {
	return(
		<div className={'card'}>
			<img src={image} alt="coffee type" className={'card-image'}/>
			<div className={'card-name'}>{name}</div>
			<div className={'card-price'}>{price}</div>
		</div>
	)
}

export default Card;