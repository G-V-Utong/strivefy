import Header from './components/header/header';
import Signup from './components/registration/signup';
import './App.css'
import './styles/main.scss';
import Signin from './components/registration/signin';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';

function App() {

  return (
   <div>
    <Header/>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/signin' element={<Signin/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </Router>
   </div>
  )
}

export default App
