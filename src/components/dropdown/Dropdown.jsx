//REACT
import React, { useState, useRef } from 'react';

// VARIABLE
import arrowDropdown from '../../assets/icons/arrow-down.256x139.png'

// STYLE
import './dropdown.scss';

function Dropdown({description}) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownTitleContainerArrowRef = useRef(null);
    const dropdownTextContainerRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className='sectionDropdown'>
            <article className='sectionDropdown__dropdownContainer'>
                <div className='dropdownTitleContainer' onClick={toggleDropdown}>
                    <h2 >Description</h2>
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
                </div>
            </article>
        </section>
    )
}

export default Dropdown;