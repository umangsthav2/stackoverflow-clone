import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';


import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';



import Main from './components/Main/Main'



import Search from './components/Search/Search'

import Login from './components/Login/Login';
import Register from './components/Register/Register';







function App() {

  useEffect(() => { document.title = "Stack Overflow Clone" }, []);

  return (
    <>
      <BrowserRouter >
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/search' element={<Search />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );


}

export default App;
