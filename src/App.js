import React, { Component } from 'react';



import './App.css';



class App extends Component {

    state = {
        isLoading: true,
        Usuarios: []
    }

    async componentDidMount() {
        const response = await fetch('/all');
        const body = await response.json();
        this.setState({ Usuarios: body, isLoading: false });
    }

    render() {
        const { Usuarios, isLoading } = this.state;

        if (isLoading)
            return (<div>Carregando...</div>);

        return (

            <main>
                <h2>Lista de Usuários</h2>

                <button type="submit">Novo Usuário</button>

                <div>
                    <table className="tabelaAll">
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Login</th>

                            <th>Papel</th>
                            <th>CEP</th>
                            <th>Logradouro</th>
                            <th>Bairro</th>
                            <th>Cidade</th>
                            <th>UF</th>
                            <th>Complemento</th>
                        </tr>


                        {Usuarios.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.nome}</td>
                                <td>{user.cpf}</td>
                                <td>{user.login}</td>

                                <td>{user.papel}</td>
                                <td>{user.cep}</td>
                                <td>{user.logradouro}</td>
                                <td>{user.bairro}</td>
                                <td>{user.cidade}</td>
                                <td>{user.uf}</td>
                                <td>{user.complemento}</td>
                                <td> <button className="btEditar">Editar</button></td>
                                <td><button className="btDeletar" >Deletar</button></td>
                            </tr>

                        ))}
                    </table>
                </div>
            </main>



        );



    }


}

export default App;