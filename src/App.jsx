import mattelogo from './assets/mattel.png';
import hotwheels from './assets/hotwheel.png';
import barbie from './assets/barbie.png';
import './App.css';

function App() {
  return (
    <main className="container">
      <section className="login-card">
        <img src={mattelogo} alt="Logo Mattel" className="logo" />

        <div className="formulario">
          <h1>Fazer Login</h1>

          <label>Email</label>
          <input type="text" placeholder="Digite seu email" />

          <label>Senha</label>
          <input type="password" placeholder="Digite sua senha" />

          <div className="acoes">
            <button>Entrar</button>
            <a
              href="https://www.youtube.com/watch?v=qGZy0EINP3U"
            >
              Esqueceu a senha?
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;