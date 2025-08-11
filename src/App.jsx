import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Main from './component/Main/Main'
import Search from './component/Search/Search'

;
/* import Login from './component/Login';
import Register from '.component/Register';
 */






function App() {
  return (
    <>
      <BrowserRouter >
        <Header  />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/search' element={<Search/>} />
        </Routes>
        {/* <Login/>
    <Register/> */}
        <Footer />
      </BrowserRouter>
    </>
  );


}

export default App;
