// REACT
import { useState } from 'react';
import { useEffect } from 'react';

// REACT-ROUTER-DOM
import { useLocation } from 'react-router-dom';

// STYLE
import './btnNavBar.scss';

function BtnNavBar({title}) {
    const location = useLocation();

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if ((location.pathname === "/" || location.pathname === "/home") && title === "Accueil") {
            setIsActive(true);
        } else if (location.pathname === "/about" && title === "À propos") {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [location.pathname, title]);

    const handleClick = () => {
        setIsActive(true);
    };

    return (
        <button 
            className={isActive ? 'active' : 'disabled'}
            onClick={handleClick}
        >
            {title}
        </button>
    )
}

export default BtnNavBar;