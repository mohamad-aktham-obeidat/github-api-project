import React, { Component } from 'react';
import Search from './Components/Search';
import Table from './Components/Table'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      repos: []
    }
  }

  searchUser = (userName) => {
    axios.get(`http://api.github.com/users/${userName}/repos`)
      .then(response => {
        this.setState({
          repos: response.data.filter((repo, i) => {
            return i < 5;
          })
        });
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="App">
        <Search onSearch={this.searchUser} j />
        {this.state.repos && (

          <Table searchResult={this.state.repos} />
        )}
      </div>
    );
  }
}

export default App;
