// REACT-ROUTE-DOM
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

// COMPONENTS
import Root from './rooting/Root.jsx'
import Home from'./pages/home/Home.jsx'
import About from'./pages/about/About.jsx'

// VARIABLE
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
