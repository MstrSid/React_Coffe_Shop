import './main-page.scss';
import Header from "./header/header";
import MainAbout from "./main-about/main-about";

const MainPage = () => {
    const menuItems = [
        'Coffee house',
        'Our coffee',
        'For your pleasure'
    ]; //create menu links names

    const pageId = 'main'; //pageId for header text title

    return(
        <>
            {/*create header and pass props*/}
            <Header menuItems={menuItems} pageId={pageId}/>
            <MainAbout/>
        </>
    )

}

export default MainPage;