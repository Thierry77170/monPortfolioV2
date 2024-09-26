// VARIABLES
import gitHub from '../../assets/icons/github.256x251.png';
import web from '../../assets/icons/web.256x256.png';

// STYLE
import './projectCard.scss';

function ProjectCard({project, style, text}) {
  return (
    <div className='slide' style={style}>
        <img className='slide__img' src={project.image.stringValue} alt={`présentation de ${project.title.stringValue}`} />
        <h3 className='slide__title'>{project.title.stringValue}</h3>
        <p className='slide__text'>{project.text.stringValue}</p>
        <div className='containerSlideLien'>
          <a className='containerSlideLien__lien' href={project.lienGitHub.stringValue} target="_blank" rel="noreferrer">
            <img className='containerSlideLien__lien--icon' src={gitHub} alt="icon de GitHub"/>
          </a>
          {project.lienWeb.stringValue && (
            <a
              className='containerSlideLien__lien'
              href={project.lienWeb.stringValue}
              target="_blank"
              rel="noreferrer"
            >
              <img className='containerSlideLien__lien--icon' src={web} alt="icon de site web" />
            </a>
          )}
        </div>
       
    </div>
  );
}

export default ProjectCard;