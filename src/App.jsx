import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';



import Main from './components/Main/Main'



import Search from './components/Search/Search'

import Login from './components/Login/Login';
import Register from './components/Register/Register';

import NotFound from './pages/NotFound';
import Discussion from './components/Discussion/Discussion';


function App() {
  return (
    <>
      <BrowserRouter >
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/search' element={<Search />} />
          <Route path='/discussion' element={<Discussion />} />

          <Route path='/questions' element={<>QUESTION PAGE</>} />
          <Route path='/tags' element={<>TAG PAGE</>} />
          <Route path='/users' element={<>USERS PAGE</>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );


}

export default App;
