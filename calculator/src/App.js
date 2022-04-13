import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cal from './components/Cal';

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/React-calculator/">
            <Cal />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
