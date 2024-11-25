// VARIABLES
import HTML5 from '../../assets/icons/file-type-html.226x256.png'
import CSS3 from '../../assets/icons/css3.226x256.png'
import Sass from '../../assets/icons/sass.256x256.png'
import JavaScript from '../../assets/icons/javascript-js.256x256.png'
import ReactJs from '../../assets/icons/reactjs-fill.256x230.bleu.png'
import Firebase from '../../assets/icons/firebase.187x256.png'

// STYLE
import './footer.scss'

function Footer() {
    return (
        <footer className='footer'>
            <a href="/files/cvThierryDeSousa.pdf" 
                download="" 
                className="downloadCV" 
                title="Téléchargez mon C.V. au format PDF" 
                aria-label="Téléchargez mon C.V. au format PDF"
            >
                    Téléchargez mon C.V. (PDF)
            </a>
            <p className='footer__textContainer'>
                Cette application web a été développée avec
            </p>
            <div className='iconsContainerFooter'>
                <img src={HTML5} alt="icon HTML5" className='iconsContainerFooter__icon' />
                <img src={CSS3} alt="icon CSS3" className='iconsContainerFooter__icon' />
                <img src={Sass} alt="icon Sass" className='iconsContainerFooter__icon' />
                <img src={JavaScript} alt="icon JavaScript" className='iconsContainerFooter__icon' />
                <img src={ReactJs} alt="icon React.js" className='iconsContainerFooter__icon' />
                <img src={Firebase} alt="icon Firebase" className='iconsContainerFooter__icon' />
            </div>
        </footer>
    )
}

export default Footer;