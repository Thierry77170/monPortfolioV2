// STYLE
import './btnSlider.scss';

function BtnSlider({src, alt, onClick}) {
    return (
        <>
            <button className="arrow" onClick={onClick}>
                <img src={src} alt={alt} className='arrow__icons' />
            </button>
        </>  
    )
}

export default BtnSlider;