
import { Navigate, useNavigate } from 'react-router-dom'
import './App.css'
import Imagem from './assets/image/icon-canalhass.png'

function App() {
  const navigate = useNavigate()


  function onSeeDatailsClick() {
    navigate(`/Cadastro`)
  }

  return (
    <>
      <div className='container'>
        <img src={Imagem} />
        <h1>Login</h1>
        <div className='email'>
          <input type="text" placeholder='Email:' />
        </div>
        <div className='password'>
          <input type="password" placeholder='Senha:'/>
        </div>      
        <div className='buttons'>
          <button>Entrar</button>
          <button onClick={onSeeDatailsClick}>Cadastrar</button>
        </div>
        <footer>
          <div className='footer'>
            <p>© Desenvolvedor Lucas Santos</p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
