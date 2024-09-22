// VARIABLES
import gitHub from '../../assets/icons/github.256x251.png';

// STYLE
import './projectCard.scss';

function ProjectCard({project, style, text}) {
  return (
    <div className='slide' style={style}>
        <img className='slide__img' src={project.image.stringValue} alt={`présentation de ${project.title.stringValue}`} />

        <h3 className='slide__title'>{project.title.stringValue}</h3>
        <p className='slide__text'>{project.text.stringValue}</p>
        <a className='slide__lien' href={project.lienGitHub.stringValue} target="_blank" rel="noreferrer">
          <img className='slide__lien--icon' src={gitHub} alt="icon de GitHub"/>
        </a>
    </div>
  );
}

export default ProjectCard;