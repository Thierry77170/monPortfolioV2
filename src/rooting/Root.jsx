//React-ROUTER-DOM
import { Outlet } from 'react-router-dom';

// COMPONENTS
import Header from '../components/header/Header.jsx'

function Root() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default Root;