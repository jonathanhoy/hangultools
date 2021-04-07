import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import Calculator from './components/calculator';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/calculator" component={Calculator} />
        {/* <Route path="/clock" component={Calculator} /> */}
      </Router>
    </div>
  );
}

export default App;
