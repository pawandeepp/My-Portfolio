import React from 'react';
import { useState,useEffect } from 'react';
import {motion} from "framer-motion";

const 
Cursor = () => {
    const [cursor, setCursor] = useState({x:-30,y:-30});

   useEffect(() => {
     function handleMouse(e){
        setCursor({x:e.clientX , y:e.clientY})
    }

    window.addEventListener( "mousemove", handleMouse);

    return() => {
        window.removeEventListener("mousemove", handleMouse);
    }
    
   }, []);



    return (
        <motion.div className='cursor w-[15px] h-[15px] ' 
        // initial={{}}
        animate={{ x:cursor.x , y:cursor.y }}
        style={{
            position:"fixed",
            zIndex:"1000",
            backgroundColor:"rgb(234, 67, 52)",
            opacity:0.7,
            margin:"10px 10px",
            borderRadius:"50%",
            boxShadow: "1px 1px 10px 5px red"
        }}
        >
            
        </motion.div>
    );
}

export default Cursor;
