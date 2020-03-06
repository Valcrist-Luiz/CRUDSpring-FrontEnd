import React, { Component } from 'react';

import './App.css';



class App extends Component {

    state = {
        isLoading: true,
        Usuarios: [],
    }


    async remove(id){
        await fetch('/api/deletar/${id}' ,{
            method: 'DELETE',
            headers:{
                'Accept' : 'application/json',
                'Content-type' : 'application/json'
            }
        })
        .then(() =>{
            let updatedUsuarios = [...this.state.Usuarios].filter(i => i.id !== id);
            this.setState({Usuarios : updatedUsuarios})
        });
    }


0
    async componentDidMount() {
        const response = await fetch('/api/all');
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
                            <th>Emails</th>
                            <th>Papel</th>
                            <th>Telefones</th>
                            <th>CEP</th>
                            <th>Logradouro</th>
                            <th>Complemento</th>
                            <th>Bairro</th>
                            <th>Cidade</th>
                            <th>UF</th>
                            
                        </tr>

                        {Usuarios.map(user => (


                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.nome}</td>
                                <td>{user.cpf}</td>
                                <td>{user.login}</td>
                                <td>
                                    {(user.emails).map(email => (
                                        email.email + ", "
                                    ))}

                                </td>
                                <td>{user.papel}</td>

                                <td>
                                    <table className="tabelaTelefone">
                                        <th>Tipo</th>
                                        <th>Número</th>
                                        <tr>
                                            <td className="tipo">
                                                {(user.telefones).map(telefone => (
                                                    telefone.tipo+" "
                                                ))}
                                            </td>

                                            <td className="numero"> {(user.telefones).map(telefone => (
                                                telefone.telefone+" "
                                                ))}
                                            </td>
                                        </tr>

                                    </table>
                                </td>

                                <td>{user.cep}</td>
                                <td>{user.logradouro}</td>
                                <td>{user.complemento}</td>
                                <td>{user.bairro}</td>
                                <td>{user.cidade}</td>
                                <td>{user.uf}</td>
                                
                                <td> <button className="btEditar">Editar</button></td>
                                <td><button className="btDeletar"  onClick={ ()=> this.remove(user.id)} >Deletar</button></td>
                            </tr>

                        ))}
                    </table>
                </div>
            </main>



        );



    }


}

export default App;