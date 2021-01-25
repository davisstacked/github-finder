import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';

import GithubState from './context/github/GithubState';

import './App.css';


const App = () => {
  // state, function to change state = useState(initial state)
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);


  // Set Alert 
  const showAlert = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => setAlert(null), 5000);
  };


  return (
    <GithubState>
      <Router> 
        <div className='App'>
          <Navbar />
          <div className="container">
          <Alert alert={alert}/>
          <Switch>
            <Route 
              exact path='/' 
              render={props => (
              <Fragment>  
                <Search 
                  set Alert={showAlert}  
                />
                <Users />
              </Fragment>
              )} 
            />
            <Route exact path='/about' component={About} />
            <Route 
              exact 
              path='/user/:login' 
              component = {User}
            )} 
            />
          </Switch>
          </div>
        </div>
      </Router> 
    </GithubState>
  );

  
}

export default App;
