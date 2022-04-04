import './divider.scss';
import {dividerImage} from "../../../assets/img/imgIndex";

const Divider = () => {
    return(
        <div className={'divider-wrapper'}>
            <div className={'divider-line'}/>
            <img src={dividerImage} className={'divider-image'} alt={'divider coffee icon'}/>
            <div className={'divider-line'}/>
        </div>

    )
}

export default Divider;