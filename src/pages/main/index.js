import React, { Component } from "react";
import { Link } from "react-router-dom";

import { FaUserPlus, FaGithub } from "react-icons/fa";

import api from "../../services/api";

import { Container, Form, List, Button } from "./styles";

export default class main extends Component {
  state = {
    users: [],
    user: ""
  };

  //carregar dados do localStorage
  componentWillMount() {
    const favorites = localStorage.getItem("favorites");

    if (favorites) {
      this.setState({
        users: JSON.parse(favorites)
      });
    }
  }

  //salvar dados no localStorage
  componentDidUpdate(_, prevState) {
    const { users } = this.state;

    if (prevState.users !== users) {
      localStorage.setItem("favorites", JSON.stringify(users));
    }
  }

  handleInputChange = e => {
    this.setState({
      user: e.target.value
    });
  };

  handleSubmit = async e => {
    const { user, users } = this.state;
    e.preventDefault();

    const response = await api.get(`/users/${user}`);

    this.setState({
      users: [...users, response.data],
      user: ""
    });
  };

  render() {
    const { users } = this.state;
    return (
      <Container>
        <h1>
          <FaGithub /> Meus Perfis Favoritos
        </h1>
        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleInputChange}
            value={this.state.user}
            placeholder="Digite o repositorio para adicionar ..."
          />
          <Button>
            <FaUserPlus />
          </Button>
        </Form>
        <List>
          {users.map(user => (
            <li key={user.id}>
              <img src={user.avatar_url} alt="Avatar do usuário" />
              <div>
                <p>{user.name}</p>
                <p>{user.bio}</p>
                <p>
                  <Link to={`/repository/${user.login}`}>Repositórios</Link>
                </p>
              </div>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}
