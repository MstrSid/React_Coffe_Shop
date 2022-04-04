import './main-page.scss';
import Header from "./header/header";

const MainPage = () => {
    const menuItems = [
        'Coffee house',
        'Our coffee',
        'For your pleasure'
    ]; //create menu links names

    const pageId = 'main'; //pageId for header text title

    return(
        <Header menuItems={menuItems} pageId={pageId}/> //create header and pass props
    )

}

export default MainPage;