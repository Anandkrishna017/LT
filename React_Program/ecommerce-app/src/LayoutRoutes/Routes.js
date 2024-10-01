import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import { Header } from '../components/Header.js'
import Home from '../components/Home.js'
import Footer from '../components/Footer.js'
import Logout from '../components/Logout.js'
import ProductDetails from '../components/ProductDetails.js'

function RoutesLayout() {
  return (
   <>
   <Router>
    <Header/>
    <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/logout' element={<Logout/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
    </Routes>
    <Footer/>
   </Router>
   </>
  )
}

export default RoutesLayout