// VARIABLES
import Error404 from '../../assets/images/404Error-amico.png'

// STYLE
import './pageError.scss'

function PageError() {
    return (
        <main>
            <section className='errorPageContainer'>
                <div className='errorImgContainer'>
                    <img 
                        src={Error404} 
                        alt="Erreur 404" 
                        className='errorImgContainer__img'
                    />
                </div>
                <div className='ErrorMessageContainer'>
                    <p className='ErrorMessageContainer__text'>
                        Oups ! La page que vous demandez n'existe pas.
                    </p>
                </div>
            </section>
            
        </main>
    )
}

export default PageError;