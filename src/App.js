import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Registration from './components/Registration';
import Profile from './components/Profile'
import Timeline from './components/Timeline'
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  return (
    <Router>
          <div className="App">
      <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" exact component={Login} />
      <Route exact path="/registration" component={Registration}  />
      <Route exact path="/profile" component={Profile}  />
      <Route exact path="/timeline" component={Timeline}  />
      <Route component={Error}/>
      </Switch>
  </div>

    </Router>

  );
}

export default App;
