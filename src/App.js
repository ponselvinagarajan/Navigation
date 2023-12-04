import logo from './logo.svg';
import './App.css';
import Home from './Home'
import About from './About'
import Product from './Product'
import Contact from './Contact'

import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='About' element={<About/>}></Route>
        <Route path='/Product' element={<Product/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>

      </Routes>
         
         
         
       </div>
  )
}

export default App;
