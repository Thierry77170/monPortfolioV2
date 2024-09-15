// VARIABLES
import gitHub from '../../assets/icons/github.256x251.png';
import linkedin from '../../assets/icons/social-linkedin.256x256.png'
import discord from '../../assets/icons/discord.256x198.png'
import Email from '../../assets/icons/e-mail.256x256.png'
import mapPin from '../../assets/icons/map-pin.144x256.png'
import mobile from '../../assets/icons/mobile.160x256.png'
import HTML5 from '../../assets/icons/file-type-html.226x256.png'
import CSS3 from '../../assets/icons/css3.226x256.png'
import JavaScript from '../../assets/icons/javascript-js.256x256.png'
import ReactJs from '../../assets/icons/reactjs-fill.256x230.bleu.png'
import Firebase from '../../assets/icons/firebase.187x256.png'

// STYLE
import './footer.scss'

function Footer() {
    return (
        <footer className='footer'>
            <p className='footer__textContainer'>
                Je suis disponible pour une offre d'emploi.
            </p>
            <h2 className='footer__title'>Me contacter</h2>
            <div className='footerCards'>
                <a href="https://github.com/Thierry77170?tab=repositories" 
                        target='_blank' 
                        rel="noopener noreferrer"
                        className='socialContainer' 
                >
                    <img src={gitHub} alt="lien de GitHub" className='socialContainer__img'/>
                </a>
                <a href="https://www.linkedin.com/in/thierry-de-sousa-9266a4295/"
                    target='_blank'
                    rel="noopener noreferrer"
                    className='socialContainer' 
                >
                    <img src={linkedin} alt="lien de mon Linkedin" className='socialContainer__img' />
                </a>
                <a href="https://discord.gg/g4EetmgVUk"
                    target='_blank'
                    rel="noopener noreferrer"
                    className='socialContainer' 
                >
                    <img src={discord} alt="lien de mon Discord" className='socialContainer__img' />
                </a>
                <a href="mailto:thierry.desousa77@gmail.com" 
                    className='socialContainer'
                >
                        <img src={Email} alt="mon E-mail" className='socialContainer__img' />
                </a>
            </div>
            <ul className='contactContainer'>
                <li className='contactContainer__info'>
                    <img src={mobile} alt="icon de mobile" className='contactContainer__info--img' />
                    <p className='contactContainer__info--text'>06 24 26 50 20</p>
                </li>
                <li className='contactContainer__info'>
                    <img src={mapPin} alt="icon de localisation" className='contactContainer__info--img' />
                    <p className='contactContainer__info--text'>Seine-et-Marne (77), Île-de-France</p>
                </li>
            </ul>
            <p className='footer__textContainer'>
                Cette application web a été développée avec
            </p>
            <div className='iconsContainerFooter'>
                <img src={HTML5} alt="icon HTML5" className='iconsContainerFooter__icon' />
                <img src={CSS3} alt="icon CSS3" className='iconsContainerFooter__icon' />
                <img src={JavaScript} alt="icon JavaScript" className='iconsContainerFooter__icon' />
                <img src={ReactJs} alt="icon React.js" className='iconsContainerFooter__icon' />
                <img src={Firebase} alt="icon Firebase" className='iconsContainerFooter__icon' />
            </div>
        </footer>
    )
}

export default Footer;