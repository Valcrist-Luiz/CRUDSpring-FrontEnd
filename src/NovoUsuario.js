import React, { Component } from 'react';



function NovoUsuario(){
    return(

        <main>
            <strong>Cadastro de Usuário</strong>

            <form>
                <label htmlFor="nome">Nome</label>
                <input name="nome" id="nome" required/>

                <label htmlFor="cpf">CPF</label>
                <input name="cpf" id="cpf" />

                <label htmlFor="login">Login</label>
                <input name="login" id="login"/>

                <label htmlFor="senha">Senha</label>
                <input name="senha" id="senha"/>

                <label htmlFor="cep">CEP</label>
                <input name="cep" id="cep"/>
                
                <label htmlFor="logradouro">Logradouro</label>
                <input name="logradouro" id="logradouro"/>

                <label htmlFor="bairro">Bairro</label>
                <input name="bairro" id="bairro"/>

                <label htmlFor="cidade">Cidade</label>
                <input name="cidade" id="cidade"/>

                <label htmlFor="uf">UF</label>
                <input name="uf" id="uf"/>

                <label htmlFor="complemento">Complemento</label>
                <input name="complemento" id="complemento"/>


                <button type="submit">Salvar</button>

            </form>
        </main>

    );
}

export default NovoUsuario;