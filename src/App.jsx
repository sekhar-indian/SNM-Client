import {Routes,Route} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Post from './components/Post.jsx';
import Navbar from './components/Navbar.jsx';
import Banner from './components/Banner.jsx';
import Catagiri from './components/Catagiri.jsx';
import Footer from './components/Footerin.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login/login.jsx';
import Signup from './components/signup/signup.jsx';
import Topdeals from './components/topdeals/topdeals.jsx';
import LowestDeals from './components/lowest-deals/lowest-deals.jsx';
import './app.css';

function App() {
  return (
    <div className='app-container'>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<> <Navbar/><Banner/> <Catagiri/><Topdeals/> <LowestDeals/><Footer/></>}></Route>
        <Route path='/home' element={<> <Navbar/><Banner/> <Catagiri/><Topdeals/> <Footer/></>}></Route>
        <Route path='/login' element={<><Login/></>}></Route>
        <Route path='/signup' element={<><Signup/></>}></Route>
      </Routes>
      
      
     </BrowserRouter>
    </div>
    
  )
}
export default App
