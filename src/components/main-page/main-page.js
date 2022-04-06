import './main-page.scss';
import HeaderMain from "./header-main/header-main";
import MainAbout from "./main-about/main-about";
import OurBest from "./our-best/our-best";
import Footer from "../common/footer/footer";

const MainPage = ({menuItems, pageId}) => {

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