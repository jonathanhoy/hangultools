import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Calculator from './components/calculator';
import Clock from './components/clock';
import Reference from './components/reference';
import About from './components/About';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/calculator" component={Calculator} />
        <Route path="/clock" component={Clock} />
        <Route path="/reference" component={Reference} />
        <Route path="/about" component={About} />
      </Router>
    </div>
  );
}

export default App;
