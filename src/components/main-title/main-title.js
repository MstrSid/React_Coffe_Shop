import "./main-title.scss";

const MainTitle = ({titleText}) => {
    return (<h1 className={'main-title'}>{titleText}</h1> //receive title from props and use it
    )
}

export default MainTitle;