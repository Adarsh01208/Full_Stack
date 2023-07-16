import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signin from './components/Signin';
import Signup from './components/Signup';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/home">Home Page</Link>
        <Link to="/login">Login Page</Link>
        <Link to="/signup"> Signup Page</Link>
        <Link to="/signin">Signin Page</Link>

        <Routes>
          <Route path='/' element={<Navigate to="/home" />} />
          <Route path='home' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='signin' element={<Signin />} />
          <Route path='signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
