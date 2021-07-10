import Home from './components/Home';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './components/Create';
import Detail from './components/BlogDetail';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/create"><Create /></Route>
          <Route exact path="/post/:id"><Detail /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
