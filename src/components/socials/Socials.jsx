// STYLE
import './socials.scss';

// VARIABLES
import gitHub from '../../assets/icons/github.256x251.png';
import linkedin from '../../assets/icons/social-linkedin.256x256.png'
import discord from '../../assets/icons/discord.256x198.png'

function Socials() {
    return (
        <div className="card">
            <div className="background"></div>
            <p className="socialsText">Mes réseaux</p>
            <a href="https://github.com/Thierry77170?tab=repositories" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Lien vers mon Github"
            >
                <div className="box box1">
                    <span className="ContainerIcon">
                        <img 
                            src={gitHub} 
                            alt={`icon de ${gitHub}`}
                            className='containerIcon__icon' 
                        />
                    </span>
                </div>
            </a>
            <a href="https://www.linkedin.com/in/thierry-de-sousa-9266a4295/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Lien vers mon Linkedin"
            >
                <div className="box box2">
                    <span className="ContainerIcon">
                        <img 
                            src={linkedin} 
                            alt={`icon de ${linkedin}`}
                            className='containerIcon__icon' 
                        />
                    </span>
                </div>
            </a>  
            <a href="https://discord.gg/g4EetmgVUk"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Lien vers mon Discord"
            >
                <div className="box box3">
                    <span className="ContainerIcon">
                        <img 
                            src={discord}
                            alt={`icon de ${discord}`}
                            className='containerIcon__icon' 
                        />
                    </span>
                </div>
            </a>
        </div>
    )
}

export default Socials;