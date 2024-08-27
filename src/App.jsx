import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/login" Component={Login}/>
        <Route path="/signup" Component={Signup}/>
      </Routes>
    </div>
  );
}

export default App
