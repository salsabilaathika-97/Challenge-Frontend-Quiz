import { Routes, Route } from 'react-router';
import './App.css';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <div>
      <Routes>
        <Route path = "/" element = {<Login />} />
        <Route path = "/dashboard" element = {<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
