import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Expense from './Components/Expense';
import Budget from './Components/Budget';
import ExpenseRecord from './Components/ExpenseRecord';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/expense' element={<Expense/>}/>
        <Route path='/budget' element={<Budget/>}/>
        <Route path='/record' element={<ExpenseRecord/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
