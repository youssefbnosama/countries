import { createContext } from 'react';
import './App.css'
import Countries from './components/Countries';
import Filter from './components/Filter';
import Navbar from './components/Navbar';
import  json  from './data.json'
import { useState } from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Country from './components/Country';
export let context = createContext()
function App() {
  const [arr,setArr] = useState(json)

  return(
    <Router>
        <div className='app'>
      <context.Provider value={[arr,setArr]}>
         <Navbar />
        <Routes>
    <Route path='/' element={<><Filter /> <Countries /></>}/>
    <Route path=':country' element={<Country />}/>
        </Routes>

      </context.Provider>
    </div>  
    </Router>

   
  )

}

export default App;
