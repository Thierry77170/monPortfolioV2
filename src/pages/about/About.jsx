// VARIABLE
import developperActivity from '../../assets/images/DevelopperActivity-amico.png'
import HTML5 from '../../assets/icons/file-type-html.226x256.png'
import CSS3 from '../../assets/icons/css3.226x256.png'
import JavaScript from '../../assets/icons/javascript-js.256x256.png'
import ReactJs from '../../assets/icons/reactjs-fill.256x230.bleu.png'
import Redux from '../../assets/icons/redux.256x243.violet.png'
import apiRest from '../../assets/icons/rest-api.256x254.beige.png'
import VSC from '../../assets/icons/visual-studio-code.256x255.png'
import chromeDevTools from '../../assets/icons/chrome-devtools.256x256.png'
import Sass from '../../assets/icons/file-type-sass.256x192.png'
import Git from '../../assets/icons/git.256x256.png'
import GitHub from '../../assets/icons/github.256x251.png'

// STYLE
import './about.scss'

// COMPONENTS
import StackCard from "../../components/stackCard/StackCard.jsx"

function About() {
    return (
        <main>
            <section className='aboutMeSection'>
                <h2 className='aboutMeSection__title'>
                    À propos de moi
                </h2>
                <article className='aboutMeContainer'>
                    <img 
                        src={developperActivity} 
                        alt="Activité de développeur" 
                        className='aboutMeContainer__img'
                    />
                    <p className='aboutMeContainer__text'>
                        Après avoir exploré différents horizons professionnels, j'ai décidé d'effectuer une reconvertion professionnel dans le développement web, un domaine qui m'anime depuis longtemps.
                        Récemment diplômé en qualité de développeur intégrateur web, j'ai acquis une solide base de compétences techniques en HTML, CSS, JavaScript, React, Redux, et bien d'autres.
                        Mais au-delà de mes compétences techniques, je suis convaincu que c'est ma curiosité, mon esprit d'équipe et ma capacité à résoudre les problèmes qui font de moi un véritable atout pour toute entreprise en quête d'innovation et de qualité.
                        Je suis impatient de mettre mes compétences et ma passion au service de projets stimulants et de continuer à apprendre et à grandir dans ce domaine en constante évolution.
                    </p>
                </article>
            </section>
            <section className='maStackSection'>
                <div className='maStackContainer'>
                    <h2 className='maStackContainer__title'>Ma stack</h2>
                    <div className='maStack'>
                        <StackCard title="HTML5" techno={HTML5}/>
                        <StackCard title="CSS3" techno={CSS3}/>
                        <StackCard title="JavaScript" techno={JavaScript}/>
                        <StackCard title="React.js" techno={ReactJs}/>
                        <StackCard title="Redux" techno={Redux}/>
                        <StackCard title="API REST" techno={apiRest}/>
                    </div>
                </div>
                <div className='mesOutilsContainer'>
                    <h2 className='mesOutilsContainer__title'>Les outils que j'utilise </h2>
                    <div className='mesOutils'>
                        <StackCard title="VS code" techno={VSC}/>
                        <StackCard title="DevTools" techno={chromeDevTools}/>
                        <StackCard title="Sass" techno={Sass}/>
                        <StackCard title="Git" techno={Git}/>
                        <StackCard title="GitHub" techno={GitHub}/>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default About;