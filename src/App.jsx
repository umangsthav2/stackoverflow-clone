import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';



import Footer from './components/Footer';
import Header from './components/Header';

import Home from './pages/Home';
import Discussion from './pages/Discussion';
import Users from './pages/Users';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Search from './pages/Search';
import NotFound from './pages/NotFound';
import UserProfile from './pages/UserProfile';
import Tags from './pages/Tags';


function App() {
  return (
    <>
      <BrowserRouter >
        <ToastContainer />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/discussion' element={<Discussion />} />
          <Route path='/user' element={<UserProfile />} />

          <Route path='/questions' element={<>QUESTION PAGE</>} />
          <Route path='/tags' element={<Tags/>} />
          <Route path='/users' element={<Users />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<NotFound />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );


}

export default App;
