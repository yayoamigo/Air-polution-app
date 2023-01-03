import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import './App.css';

const App = () => {
   return (
     <Router>
       <div className="App">
         <Routes>
           <Route exact path="/" element={<HomePage />} />   
         </Routes>
       </div>
     </Router>
   );
 }


export default App;
