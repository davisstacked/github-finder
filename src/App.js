import React, { Fragment, Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';


class App extends Component {

  state = {
    users: [],
    loading: false,
  }

  async componentDidMount() {
    this.setState({ loading: true })
    // Make a request to Github API 
    const res = await axios.get('https://api.github.com/users');

    this.setState({ users: res.data, loading: false })
  }

  render() {

    return (
      <div className='App'>
        <Navbar />
        <div className="container">
        <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );

  }
}

export default App;
