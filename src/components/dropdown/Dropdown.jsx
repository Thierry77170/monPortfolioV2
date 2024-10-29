//REACT
import { useState, useRef } from 'react';

// VARIABLE
import arrowDropdown from '../../assets/icons/arrow-down.256x139.png'

// STYLE
import './dropdown.scss';

function Dropdown({title, description, exemple, techno1, techno2, techno3, techno4}) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownTitleContainerArrowRef = useRef(null);
    const dropdownTextContainerRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <article className='dropdownContainer'>
            <div className='dropdownTitleContainer' onClick={toggleDropdown}>
                <h2 className='dropdownTitleContainer__title'>{title}</h2>
                <img 
                    src={arrowDropdown} 
                    alt="icon pour le volet déroulant"
                    className={`dropdownTitleContainer__arrow ${isOpen ? 'open' : ''}`}
                    ref={dropdownTitleContainerArrowRef}
                />
            </div>
            <div 
                className={`dropdownTextContainer ${isOpen ? 'open' : ''}`}
                ref={dropdownTextContainerRef}
            >
                <p className='dropdownTextContainer__text'>
                    {description}
                </p>
                <p className='dropdownTextContainer__text'>
                    {exemple}
                </p>
                <div className='dropdownTextContainer__containerIcons'>
                    {techno1 && <img src={techno1} alt="Technologie 1" className='dropdownTextContainer__containerIcons--icons' />}
                    {techno2 && <img src={techno2} alt="Technologie 2" className='dropdownTextContainer__containerIcons--icons' />}
                    {techno3 && <img src={techno3} alt="Technologie 3" className='dropdownTextContainer__containerIcons--icons' />}
                    {techno4 && <img src={techno4} alt="Technologie 4" className='dropdownTextContainer__containerIcons--icons' />}
                </div>
            </div>
        </article>
    )
}

export default Dropdown;