// STYLE
import './header.scss';

function Header() {
    return (
        <header className='header'>
            <div className='headerContainer'>
                <h1 className="headerContainer__title">Thierry DE SOUSA</h1>
                <p className='headerContainer__text1'>Développeur web Front-End JavaScript/React.js</p>
                <p className='headerContainer__text2'>Passionné et engagé</p>
            </div>
            
        </header>
    )
}

export default Header;