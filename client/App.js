import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import future components
import MainContainer from './components/containers/MainContainer.js';
import MessageContainer from './components/containers/MessageContainer';
import Signup from './components/Signup.js';
import Login from './components/Login.js';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      //   <BrowserRouter>
      //     {/* essentially a switch statement that chooses the component to render based on the path */}
      //     <Switch>
      //       <Route exact path='/' render={() => <MainContainer />} />
      //       <Route exact path='/message' render={() => <MessageContainer />} />
      //       <Route path='/signuppage' render={() => <Signup />} />
      //       <Route path='/login' render={() => <Login />} />
      //     </Switch>
      //   </BrowserRouter>

      <div>
        <MainContainer />
      </div>
    );
  }
}

export default App;
