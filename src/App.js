import './App.css';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import  Gif  from './Pages/Gif';
import Popup from './Pages/Popup';

function App() {

  return (
    <div className="App">
     <div className='header'>
     <h1>WELCOME TO GIPHY APP</h1>
     </div>
     <Routes>
       <Route path='/' exact element={<Home/>} />
     </Routes>
     <Popup/>

    </div>
  );
}

export default App;
