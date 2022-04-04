import "./header-title.scss";

const HeaderTitle = ({titleText}) => {
    return (<h1 className={'main-title'}>{titleText}</h1> //receive title from props and use it
    )
}

export default HeaderTitle;