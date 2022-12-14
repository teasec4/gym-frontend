import { useState } from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Footer from './components/footer';
import Nav from './components/Nav';
import { useAuthContext } from './hooks/useAuthContext';
import Achive from './pages/achive';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Welcome from './pages/welcme';

function App() {

  const {user} = useAuthContext()

  const [click, setClick] = useState(false)

  return (
    <div className='page-container'>
      <div className='content-wrap'>
        <BrowserRouter>
          <Nav click={click} setClick={setClick}/>
            <Routes>
              <Route path={'/'} element={!user ? <Welcome/> : <Home/>}
              />
              <Route path={'/achive'} element={user ? <Achive/> : <Navigate to='/'/>}
              />
              <Route path={'/dashboard'}  element={user ? <Home/> : <Navigate to='/login'/>}
              />
              <Route path={'/login'} element={!user ? <Login/> : <Navigate to='/dashboard'/>}
              />
              <Route path={'/signup'} element={!user ?<Signup/> : <Navigate to='/dashboard'/>}
              />
            </Routes> 
        </BrowserRouter>
     </div>
        <Footer/>
    </div>
  );
}

export default App;
