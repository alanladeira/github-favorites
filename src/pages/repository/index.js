import React, { Component } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";

import { Container, List, Button } from "./styles";

import { FaGithub } from "react-icons/fa";

export default class Respository extends Component {
  state = {
    repositories: []
  };

  async componentDidMount() {
    const { match } = this.props;

    const { name } = match.params;

    const response = await api.get(`/users/${name}/repos`);

    this.setState({
      repositories: response.data
    });

    console.log(this.state.repositories);
  }

  render() {
    const { repositories } = this.state;

    return (
      <Container>
        <Link to={"/"}>Voltar aos Perfis</Link>
        <h1>
          <FaGithub /> Repositórios
        </h1>
        <List>
          {repositories.map(reps => (
            <li key={String(reps.id)}>
              <div>
                <p>
                  <strong>{reps.name}</strong>
                </p>
                <p>{reps.description}</p>
              </div>
              <a href={reps.html_url} target="blank">
                <Button>Conteúdo</Button>
              </a>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}
