import './App.css';

import Nav from './components/Nav';
import Home from './components/Home';
import Calculator from './components/calculator';
import Clock from './components/clock';
import Positions from './components/positions';
import Resources from './components/resources';
import About from './components/About';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MainLayout } from './styles/Layout';

function App() {
  return (
    <div className="App">
      <Router>
        <MainLayout>
          <Nav className="leftmenu"/>
          <main className='mainbox'>
            <Route path="/" exact component={Home} />
            <Route path="/calculator" component={Calculator} />
            <Route path="/clock" component={Clock} />
            <Route path="/positions" component={Positions} />
            <Route path="/resources" component={Resources} />
            <Route path="/about" component={About} />
          </main>
        </MainLayout>
      </Router>
    </div>
  );
}

export default App;