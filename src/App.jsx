import React from 'react'

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Signup from './Pages/Signup';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/"  element={<Home />} ></Route>
    <Route path="/about"  element={<About />} ></Route>
    <Route path="/contact"  element={<Contact />} ></Route>
    <Route path="/signup"  element={<Signup />} ></Route>
    </>
  )
);


const App = () => {
  return (
    <div>
       <RouterProvider router={router} />
       
    </div>
  )
}

export default App