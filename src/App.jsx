import { useState } from "react";
import "./App.css";
import Layout from "./component/Layout";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";

import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Routes } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { motion,useScroll } from "framer-motion";
import Cursor from "./component/cursor/Cursor";
function App() {
  const [count, setCount] = useState(0);

// const router = createBrowserRouter([{
//   path:"/",
//   element:<Layout/>,
//     children : [
//       {
//         path:"/",
//         element:<Home/>
//       },
//       {
//         path:"/about",
//         element:<About/>
//       },
//       {
//         path:"/contact",
//         element:<Contact/>
//       },
//       ]
// }])

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
    <Route path="" element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="contact" element={<Contact/>}/>
  </Route>
))
const { scrollYProgress } = useScroll();

  return (
    <>
    <Cursor/>
      <div className="app-main relative">
        
        <RouterProvider router={router}/>

        {/* scrool bar 100%  */}
        <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress, position: 'fixed',top: 0,left: 0,right: 0,height: '7px' ,background: 'linear-gradient(90deg, #f8ff00 0%, #3ad59f 100%)',transformOrigin: '0%',borderRadius:"2px" }}
      />

      </div>
    </>
  );
}


export default App;
