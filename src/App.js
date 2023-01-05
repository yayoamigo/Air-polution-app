import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  HomePage  from './Pages/HomePage';
import Details from './Pages/Details';
import Nav from './Components/Nav';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
      <Nav/>
        <Routes>
          <Route exact path="/" element={<HomePage />} />  
          <Route exact path="/country/:name" element={< Details/> }/> 
        </Routes>
      </div>
    </Router>
  );
}


export default App;
