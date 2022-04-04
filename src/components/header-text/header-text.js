import './header-text.scss';

const HeaderText = ({headerText}) => {
    const textElems = headerText.map((item, i) => {
        return (
            <div key={i} className={'header-text-item'}>{item}</div>
        )
    })

    return (
        <div className={'header-text-wrapper'}>
            {textElems}
        </div>
    )
}

export default HeaderText;