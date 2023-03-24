import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Menubar from './components/Menubar';
import Home from './components/Home';
import About from './components/About';

class App extends Component {
  render(){
    return (
      <>
      <Menubar />
      <div className="container">
        <Routes>
          <Route path='/'element={<Home />} />
          <Route path='/about'element={<About />} />
        </Routes>
      </div>
      </>
    );
  }
}

export default App;
