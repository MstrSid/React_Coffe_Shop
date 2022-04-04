import './divider.scss';
import {dividerImage} from "../../../assets/img/imgIndex";

const Divider = ({inverted}) => {
    return(
        <div className={'divider-wrapper'}>
            <div className={`${inverted ? 'divider-line-black': 'divider-line'}`}/>
            <img src={dividerImage} className={`${inverted ? 'divider-image-black': 'divider-image'}`} alt={'divider coffee icon'}/>
            <div className={`${inverted ? 'divider-line-black': 'divider-line'}`}/>
        </div>

    )
}

export default Divider;