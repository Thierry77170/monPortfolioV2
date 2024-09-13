// REACT-ROUTER-DOM
import { NavLink } from 'react-router-dom';

// STYLE
import './header.scss';

// COMPONENTS
import BtnNavBar from '../btnNavBar/BtnNavBar.jsx'

function Header() {
    
    return (
        <header className='header'>
            <div className='headerContainer'>
                <h1 className="headerContainer__title">Thierry DE SOUSA</h1>
                <p className='headerContainer__text1'>Développeur web Front-End JavaScript/React.js</p>
                <p className='headerContainer__text2'>Passionné et engagé</p>
            </div>
            <nav className='navContainer'>
                <ul className='ulContainer'>
                    <li>
                        <NavLink to='/home' className={({ isActive }) => isActive ? 'active' : ''}>
                            <BtnNavBar title="Accueil"/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className={({ isActive }) => isActive ? 'active' : ''}>
                            <BtnNavBar title="À propos" />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;