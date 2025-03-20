import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cadastro from './components/Cadastro/Cadastro.jsx';

const router = createBrowserRouter([
  {
    path: "/App",
    element:<App />
  },
  {
    path:"/Cadastro",
    element:<Cadastro/>
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
