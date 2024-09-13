// VARIABLES
import developperActivity from '../../assets/images/DevelopperActivity-amico.png'

// STYLE
import './aboutMe.scss'


function AboutMe() {
    return (
        <section className='aboutMeSection'>
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
    )
}

export default AboutMe;
