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
            </article>
        </section>
    )
}

export default AboutMe;
