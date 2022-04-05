import './h-title.scss';

const HTitle = ({titleText}) => {
	return (<h1 className={'h-title'}>{titleText}</h1> //receive title from props and use it
	)
}

export default HTitle