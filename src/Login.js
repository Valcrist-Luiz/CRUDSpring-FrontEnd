import React from 'react';
import './Login.css';

function Login() {
  return (
    <div id="loginPai">
      <main>

        <strong>Login de Usuário</strong>

        <form>
          <br />
          <div className="input-block">
            <label htmlFor="login">Login</label>
            <input name="login" id="login" required/>
          </div>

          <div className="input-block">
          <label htmlFor="senha">Senha</label>
            <input type="password" name="senha" id="senha" required />
          </div>

          <button type="submit">Entrar</button>
        </form>
      </main>
    </div>

  );
}

export default Login;
