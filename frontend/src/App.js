import React from 'react'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/home'
import Navbar from './components/Navbar'
import WourkOutForm from './components/WourkOutForm';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Navbar/>
       <div className='pages'>
               <Routes>


                <Route path='/' element={<Home/>} />
               </Routes>
       </div>
       
  
       
       </BrowserRouter>
      
    </div>
  );
}

export default App;
