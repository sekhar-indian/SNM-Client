import {Routes,Route} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Post from './components/Post.jsx';
import Navbar from './components/Navbar.jsx';
import Banner from './components/Banner.jsx';
import Catagiri from './components/Catagiri.jsx';
import Footer from './components/Footerin.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path='/' element={<><Banner/> <Catagiri/> <Footer/></>}></Route>
        <Route path='/home' element={<><Banner/> <Catagiri/> <Footer/></>}></Route>
      </Routes>
      {/* <Post name="sekhar" /> */}
      
     </BrowserRouter>
    </div>
    
  )
}
export default App
