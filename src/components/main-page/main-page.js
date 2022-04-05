import './main-page.scss';
import HeaderMain from "./header-main/header-main";
import MainAbout from "./main-about/main-about";
import OurBest from "./our-best/our-best";
import Footer from "../common/footer/footer";

const MainPage = () => {
    const menuItems = [
        'Coffee house',
        'Our coffee',
        'For your pleasure'
    ]; //create menu links names

    const pageId = 'main'; //pageId for header-main text title

    return(
        <>
            {/*create header-main and pass props*/}
            <HeaderMain menuItems={menuItems} pageId={pageId}/>
            <MainAbout/>
            <OurBest/>
            <Footer menuItems={menuItems}/>
        </>
    )

}

export default MainPage;