import React from 'react';
import Login from './form.js';
import SignUp from './signup.js'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Router>
             <Switch>
             <Route exact path="/" component={Login}></Route>
             <Route path="/s" component={SignUp} />
             </Switch>
         </Router>
    )
  }
}

export default App;
