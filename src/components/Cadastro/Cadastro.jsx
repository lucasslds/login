
import './Cadastro.css'

function Cadastro() {
    return(
        <>
            <div className="container">
                <h1 className='cadastro-usuario'>Cadastro</h1>
                <div className="nome-cadastro">
                    <input type="text" placeholder="Nome" />
                </div>
                <div className="sobrenome-cadastro">
                    <input type="text" placeholder="Sobre-nome"/>
                </div>
                <div className="telefone-cadastro">
                    <input type="text" placeholder="Telefone"/>
                </div>
                <div className="senha-cadastro">
                    <input type="password" placeholder="Senha"/>
                </div>
                <div className="confirmarsenha-cadastro">
                    <input type="password" placeholder="Confirmar Senha"/>
                </div>
                <div className="email-cadastro">
                    <input type="text" placeholder="Email"/>
                </div>
                <div className='button-cadastro'>
                    <button>Salvar</button>            
                    <button>Cancelar</button>
                </div>
                <footer>
                    <div className='footer'>
                        <p>© Desenvolvedor Lucas Santos</p>
                    </div>
                </footer>
            </div>
        </>        
    );
};

export default Cadastro;