
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Certificates from './pages/Certificates';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
  <div>
      <Header/>
      <Routes>
         <Route element={<Home/>} path='/' />
         <Route element={<Contact/>} path='/contact'/>
          <Route element={<Certificates/>} path='/certificates'/>
      </Routes>
      <Footer/>
 </div>
  );
}

export default App;
