import React from 'react'
import Offerpart from '../Layouts/Offerpart'
import Footer from '../Layouts/Fotter'
import { Link } from 'react-router-dom'
import Navber from '../Components/Navber'

const Home = () => {
  return (
    <div>
        <Offerpart/>
        <Navber/>
        <Footer/>

        
    </div>
  )
}

export default Home