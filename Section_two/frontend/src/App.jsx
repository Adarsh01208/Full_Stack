import { BrowserRouter, Routes, Route, Navigate  } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import EventHandling from './components/EventHandling';
import StateManagement from './components/StateManagement';
import Todo from './components/Todo';
import ChatApp from './components/ChatApp';
import ContactUs from './components/ContactUs';
import Browse from './components/Browse';



function App() {
  return (
    <div>


      <BrowserRouter>
        {/* <Link to="/home">Home Page</Link>
        <Link to="/login">Login Page</Link>
        <Link to="/signup"> Signup Page</Link>
        <Link to="/signin">Signin Page</Link> */}

        <Navbar />

        <Routes>
          <Route path='/' element={<Navigate to="/home" />} />
          <Route path='home' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='event' element={<EventHandling/>} />
          <Route path='statemanagement' element={<StateManagement/>} />
          <Route path='todo' element={<Todo/>} />
          <Route path='chatapp' element={<ChatApp/>} />
          <Route path='contactus' element={<ContactUs/>} />
          <Route path='browse' element={<Browse/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
