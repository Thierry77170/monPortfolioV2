// REACT-ROUTER-DOM
import { Outlet } from 'react-router-dom';

// COMPONENTS
import Header from '../components/header/Header.jsx'
import Footer from '../components/footer/Footer.jsx'

function Root() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Root;