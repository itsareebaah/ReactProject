import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './components/frontend/Home';
import AboutUs from './components/frontend/AboutUs';
import Projects from './components/frontend/Projects';
import Services from './components/frontend/Services';
import ContactUs from './components/frontend/ContactUs';
import Requireauth from './components/common/Requireauth';


// import {Login} from './components/backend/Login';
// App.jsx
import  Login  from './components/backend/login';
import  {Dashboard}  from './components/backend/Dashboard';
import { ToastContainer } from 'react-toastify';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import Bootstrap first, then custom styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.scss';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Dashboard' element={
        <Requireauth><Dashboard/></Requireauth> } />
        {/* <Route path='/admin/login' element={<Login/>} /> */}
     </Routes>
     </BrowserRouter>
      <ToastContainer  position='top-center'/>
    </>
  )
}

export default App
