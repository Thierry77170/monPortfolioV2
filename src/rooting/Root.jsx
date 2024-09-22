// REACT
import React, { useEffect } from 'react';


// REACT-ROUTER-DOM
import { Outlet, useNavigate } from 'react-router-dom';

// COMPONENTS
import Header from '../components/header/Header.jsx'
import Footer from '../components/footer/Footer.jsx'

function Root() {
    const navigate = useNavigate();

    useEffect(() => {
        if (window.location.pathname !== '/home') {
          navigate('/home'); // Redirige vers la page "home" lorsque la page est rafraîchie
        }
      }, [navigate]);

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Root;