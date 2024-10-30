// REACT-ROUTER-DOM
import { NavLink } from 'react-router-dom';

// VARIABLES
import Email from '../../assets/icons/e-mail.256x256.png'
import mapPin from '../../assets/icons/map-pin.144x256.png'
import mobile from '../../assets/icons/mobile.160x256.png'
import logoDST from '../../assets/images/logoDST.png'

// COMPONENTS
import Socials from '../socials/Socials.jsx'

// STYLE
import './header.scss';

// COMPONENTS
import BtnNavBar from '../btnNavBar/BtnNavBar.jsx'

function Header() {

    return (
        <header className='header'>
            <img src={logoDST} alt="logo DST" className='header__logo' />
            <div className='header__nameContainer'>
                <nav className='navContainer'>
                    <ul className='ulContainer'>
                        <li>
                            <NavLink to='/home'>
                                <BtnNavBar title="Accueil" />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/about'>
                                <BtnNavBar title="À propos" />
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className='nameContainer'>
                    <h1 className="nameContainer__title">
                        <span>DE SOUSA</span>
                        <span>Thierry</span>
                    </h1>
                    <p className='nameContainer__text1'>Développeur web Front-End JavaScript/React.js</p>
                    <p className='nameContainer__text2'>Passionné et engagé</p>
                </div>
            </div>
            <div className="contact">
                <div className="contact__inner">
                    <div className="frontContact">
                        <p className="frontContact__text">
                            Je suis à l'écoute pour
                            <span>
                                toute opportunité professionnelle
                            </span>
                            <span>ou tout projet freelance !</span>
                        </p>
                        <h2 className="frontContact__title">Me contacter</h2>
                    </div>
                    <div className="backContact">
                        <div className="backContact__contact">
                            <div className="backContact__contact--container">
                                <img src={mobile} alt="icon de mobile" className='backContactImg' />
                                <p className='backContactText'>(+33) 6 24 26 50 20</p> 
                            </div>
                            <a href="mailto:thierry.desousa77@gmail.com" className="backContact__contact--container">
                                <img src={Email} alt="mon E-mail" className='backContactImg' />
                                thierry.desousa77@gmail.com 
                            </a>
                            <div className="backContact__contact--container">
                                <img src={mapPin} alt="icon de localisation" className='backContactImg' />
                                <p className='backContactText'>Seine-et-Marne (77), Île-de-France</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Socials />
        </header>
    )
}

export default Header;