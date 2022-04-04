import './title.scss';

const Title = ({titleText}) => {
	return (
		<h2 className={'title'}>{titleText}</h2> //receive title from props and use it
	)
}

export default Title;