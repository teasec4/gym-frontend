import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Nav from './components/Nav';
import { useAuthContext } from './hooks/useAuthContext';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Welcome from './pages/welcme';

function App() {

  const {user} = useAuthContext()

  return (
    <div>
        <BrowserRouter>
          <Nav/>
            <Routes>
              <Route path='/' element={!user ? <Welcome/> : <Home/>}
              />
              <Route path={'/dashboard'} element={user ? <Home/> : <Navigate to='/login'/>}
              />
              <Route path={'/login'} element={!user ? <Login/> : <Navigate to='/dashboard'/>}
              />
              <Route path={'/signup'} element={!user ?<Signup/> : <Navigate to='/dashboard'/>}
              />
            </Routes> 
        </BrowserRouter>
    </div>
  );
}

export default App;
