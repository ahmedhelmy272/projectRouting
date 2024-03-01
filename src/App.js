import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Layout from './Layout/Layout';

function App() {
  let routers = createBrowserRouter([ 
    {
      path: "", element: <Layout />, children: [
        { index:true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },
      ]
    }

  ])
  return <>
    <RouterProvider router={routers} />
  </>
}

export default App;
