// STYLE
import './btnSlider.scss';

function BtnSlider({value, onClick}) {
    return (
        <>
            <button className="arrow" onClick={onClick} >{value}</button>
        </>  
    )
}

export default BtnSlider;