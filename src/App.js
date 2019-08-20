import React, { Component } from 'react';
import Table from './Components/Table'
import Row from './Components/Row'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
class App extends Component() {

  constructor() {
    super()
    this.state = {
      repos: []
    }
    this.searchUser('');
  }

  searchUser(userName) {
    axios.get(`http://api.github.com/users/${userName}/repos`)
      .then(response => {
        this.setState({ repos: response.data });
      })
      .catch(error => {
        console.log(error);

      })
  }


  render() {

    return (
      <div className="App">
        <Table onSearch={searchTerm => this.searchUser(searchTerm) }  searchResult={this.state.repos}/>
        <Row />
      </div>
    );
  }
}

export default App;
