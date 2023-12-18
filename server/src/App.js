// import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Add from "./components/add/Add.jsx"
import List from './components/lists/List.jsx';
import Update from './components/Update.jsx';
import SignIn from './components/Signin/Signin.jsx';
import ListeUser from './components2/ListeUser.jsx';
import ChocoDetails from './components2/aya/ChocoDetails.jsx';
import Pannier from './components2/carts/pannier.jsx';
function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<SignIn/>} />

      <Route path="/add" element={<Add/>} />

      <Route path="/listAdmin" element={<List/>} />
      <Route path="/update/:id" element={<Update/>} />
    

      <Route path="/listUser" element={<ListeUser/>} />


      <Route path="/ChocoDetails/:name" element={<ChocoDetails/>} />

       <Route path="/Pannier" element={<Pannier/>} />




      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
