import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ReactCrud from './components/ReactCrud';
import AllUsers from './components/Allusers';
import AddUser from './components/AddUser';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EditUser from './components/EditUser';


function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
       
      <Route exact path = "/" element ={ <ReactCrud />} />
      <Route  exact path = "/all" element ={ <AllUsers />} />
      <Route exact path = "/add" element ={ <AddUser />} />
      <Route exact path = "/edit/:id" element ={ <EditUser />} />
      
      
      </Routes>
      
      
    </BrowserRouter>
  );
}

export default App;
