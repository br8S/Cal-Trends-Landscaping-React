import './App.css';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';
import Commercial from './Commercial';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav /> 
        <Switch>
          <Route path="/" exact component={ Home }/> 
          <Route path="/about" component={ About }/> 
          <Route path="/gallery" component={ Gallery }/> 
          <Route path="/contact" component={ Contact }/> 
          <Route path="/commercial" component={ Commercial }/> 
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
