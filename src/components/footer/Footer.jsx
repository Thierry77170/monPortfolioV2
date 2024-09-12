// VARIABLES
import gitHub from '../../assets/icons/github.256x251.png';
import linkedin from '../../assets/icons/social-linkedin.256x256.png'
import discord from '../../assets/icons/discord.256x198.png'
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
            <ul className='footer__lienContainer'>
                <li>
                    <a href="https://github.com/Thierry77170?tab=repositories" 
                        target='_blank' 
                        rel="noopener noreferrer"
                    >
                        <img src={gitHub} alt="lien vers mon GitHub" className='imgLienFooter' />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/thierry-de-sousa-9266a4295/"
                        target='_blank'
                        rel="noopener noreferrer"
                    >
                        <img src={linkedin} alt="lien de mon linkedin" className='imgLienFooter' />
                    </a>
                </li>
                <li>
                    <a href="https://discord.gg/g4EetmgVUk"
                        target='_blank'
                        rel="noopener noreferrer"
                    >
                        <img src={discord} alt="lien de mon linkedin" className='imgLienFooter' />
                    </a>
                </li>
            </ul>
            <p className='footer__textContainer'>
                Cette application web a été développée avec :
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