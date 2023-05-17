import './App.css';
import { Navbar } from './Components/atoms/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AboutUs } from './Components/atoms/Aboutus';
import { Login } from './Components/atoms/login';
import { Register } from './Components/atoms/Register';
import { Contact } from './Components/atoms/Contact';
import { Home } from './Components/atoms/home';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/aboutus' Component={AboutUs}/>
        <Route path='/login' Component={Login}/>
        <Route path='/register' Component={Register}/>
        <Route path='/contact' Component={Contact}/>
      </Routes>
    </Router>
  );
}

export default App;
