import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Calculator from './components/calculator';
import Clock from './components/clock';
import Positions from './components/positions';
import Resources from './components/resources';
import About from './components/About';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Route path="/" exact component={Home} />
          <Route path="/calculator" component={Calculator} />
          <Route path="/clock" component={Clock} />
          <Route path="/positions" component={Positions} />
          <Route path="/resources" component={Resources} />
          <Route path="/about" component={About} />
        </main>
      </Router>
    </div>
  );
}

export default App;
