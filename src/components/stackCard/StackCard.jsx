

// STYLE
import './stackCard.scss';

function StackCard({ title, techno }) {
    return (
        <article className='stackCard'>
            <img src={techno} alt={`icon de ${title}`} className='stackCard__img' />
            <h3 className='stackCard__title'>{title}</h3>
        </article>
    )
}

export default StackCard;