import React from "react";
import { Route,  Switch } from 'react-router-dom'
import Forms from "./Forms"
import HomePage from "./HomePage";



const App = () => {
  return (
    <div>
      <Switch>
        <Route path='/pizza' render={() => <Forms />} />
        <Route path='/' render={() => <HomePage />} />
      </Switch>
      
    </div>
  );
};
export default App;
