import React from 'react';
import "./service.css";
import {motion} from "framer-motion";

const Service = ({data}) => {
    return (
        <motion.div whileTap={{scale:".9"}} transition={{ type: "spring", stiffness: 70, damping: 17 }} className='ser-item border-[1px] border-[#171512] basis-[calc(50%-50px)] p-[2rem]'>
            <p className='text-[2rem] font-[700] leading-[2.5rem] pb-[1rem] text-[rgb(22, 21, 19)]'>{data.title}</p>
            <p className='text-[1.125rem] font-[500] leading-[2rem] text-gray-800'>{data.content}</p>
        </motion.div>
    );
}

export default Service;
