import React from "react";
import { motion } from "framer-motion";
import {Link} from "react-router-dom";
// import ".article.css";


const Article = ({ data }) => {
  return (
    <motion.div
      whileHover={{rotate:"-1deg"}}
      transition={{duration:.5}}
      whileTap={{scale:.99}}
      className=" article-con flex p-[20px] gap-[30px] border-[2px] border-[#161513] mb-[40px]"
    >
      <Link to={data.link} target="_blank">
        <div className="font-[700] ">
          <p className="text-[#EA4334] leading-[30px]">
            {data.type} / {data.date}
          </p>
          <p className=" text-[1.5rem] text-[#161513] ">{data.title}</p>
        </div>
        <div className="text-gray-700  self-center">{data.content}</div>
      </Link>
    </motion.div>
  );
};

export default Article;
