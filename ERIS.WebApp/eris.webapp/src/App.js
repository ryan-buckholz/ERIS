import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login'
import Home from './Pages/Home';


function App() {
  return (
    <div className="App" >
      <Router>
        <Routes>
          <Route path="/Home" element={ <Home /> } />
          <Route path="/" element={ <Login /> } />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
