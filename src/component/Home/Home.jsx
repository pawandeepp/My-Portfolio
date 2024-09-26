import React, { useEffect, useRef, useState } from "react";
import heroSelected from "./../../assets/heroSelected.png";
import logoOrangepic from "./../../assets/logoOrangepic.png";
import heroWithLogo from "./../../assets/hero-with-logo.png";
import "./home.css";
import Button from "../../Button/Button";
import logo from "../../assets/logo.svg";
import logoOrange from "../../assets/logoOrange.png";
import Tape from "../Tape/Tape";
import TitleAndDesc from "./../TitleNDescription/TitleAndDesc";
import ExpProClient from "./ExpProClient/ExpProClient";
import Service from "./Service/Service";
import Article from "./Article/Article";
import animationEffect from "./../../assets/animationEffect.svg";
import { NavLink } from "react-router-dom";
import { motion, spring, AnimatePresence } from "framer-motion";
import {toast} from "react-hot-toast";

function Home() {
  const ref1 = useRef(null);
  const [handleVisibles, setHandleVisibles] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setHandleVisibles(entry.isIntersecting);
    });

    if (ref1.current) observer.observe(ref1.current);
  }, []);

  return (
    <AnimatePresence>
      <div className="container">
        <div className="home w-[100%] mx-[auto]" style={{ maxWidth: "1500px" }}>
          <div className="style-logo">
            <img
              src={animationEffect}
              alt="image for design only"
              className="styleLogo1 size-50 absolute end-[-120px] bottom-[850px]"
            />
            <img
              src={animationEffect}
              alt="image for design only"
              className="styleLogo2 size-50 absolute start-[-150px] bottom-[1500px]"
            />
          </div>

          <div className=" mainContainer w-[100%] ">
            <motion.div
              // animate={{ x: 0, opacity: 1 }}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "linear" }}
              className="hero-text"
            >
              <p className="beforelondon">
                HI, I’M PAWAN.&nbsp;
                <span>
                  A CREATIVE
                  <motion.img
                    animate={{ rotate: 180 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    drag
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    dragElastic={1}
                    src={logoOrange}
                    alt=""
                    className="w-[54px] border-3 herohash"
                    style={{
                      display: "inline-block",
                      margin: "0px 0px 10px 10px",
                    }}
                  />
                </span>
                DESIGNER{" "}
              </p>
              <p className="london">
                BASED IN <strike></strike>INDIA
              </p>

              <div className="ux font-[600] flex flex-wrap gap-[10px] mt-[20px] mb-[40px]">
                <p>UX DESIGN</p>
                <i>
                  <img
                    src={logoOrange}
                    alt=""
                    className="size-[14px]"
                    style={{ display: "inline-block" }}
                  />
                </i>
                <p>DEVELOPMENT</p>
                <i>
                  <img
                    src={logoOrange}
                    alt=""
                    className="size-[14px]"
                    style={{ display: "inline-block" }}
                  />
                </i>
                <p>WEBFLOW</p>
              </div>

              <div className="hero-button">
                <Button text={"Got a Project"} color={"black"} />
                <NavLink
                  // onClick={closeNavBar}
                  to="/contact"
                  className={({ isActive }) =>
                    `${isActive ? "text-orange-700 " : ""}`
                  }
                >
                  <Button text={"Let's Talk"} />
                </NavLink>
              </div>
            </motion.div>

            <motion.div
              // animate={{ x: 0, opacity: 1 }}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "linear", delay: 0.3 }}
              className="hero-image flex justify-end"
            >
              <div className="hero-image-insdie">
                <img src={logoOrangepic} alt="" className="hmge" />
                <img src={heroSelected} alt="hero" className="heroSelected" />
              </div>
            </motion.div>
          </div>

          <div className="mb-[100px] ">
            <div className="tape-Component w-[109vw] rotate-[-5deg] mb-[50px] bg-[#161513] text-[#ffffff] absolute left-[-15px]">
              <Tape />
            </div>
          </div>

          <div className="infotabmain p-[100px]  w-[100%]">
            <motion.div
              ref={ref1}
              initial={{ opacity: 0, y: 200 }}
              // animate={handleVisibles ? { opacity: 1, y: 0 } : {}}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="info-section flex gap-[60px] justify-center mt-[50px]"
            >
              <div className="tiltle">
                <p className="font-[700] text-[24px]">
                  Pawandeep
                  <img
                    className="inline-block mx-[10px]"
                    src="https://assets.website-files.com/62673e4070051ac9b30ad8c7/62673e4070051abbfd0ad8d5_Icon%203.svg"
                    alt=""
                  />
                  Singh
                </p>
                <p className="text-[3.5rem] font-bold sm:leading-[4rem] sm:mt-[20px] mt-[10px]">
                  Lead product designer and developer.
                </p>
              </div>

              <div className="additional-info ">
                <p className="font-bold text-[2rem] sm:leading-[40px] ">
                  Passionate about crafting exceptional user experiences and
                  bringing innovative ideas to life.
                </p>
                <p className=" text-[14px] sm:text-[18px]  font-[500] my-[40px]">
                  I believe in the power of design and technology to transform
                  businesses and make a positive impact on people's lives.
                </p>

                <div className=" exptabs flex justify-between">
                  <TitleAndDesc title={"BORN IN"} desc={"Rajasthan"} />
                  <TitleAndDesc title={"EXPERIENCE"} desc={"1+ Years"} />
                  <TitleAndDesc title={"DATE OF BIRTH"} desc={"04 May 2002"} />
                </div>
              </div>
            </motion.div>

            <motion.div
              // ref={ref1}
              initial={{ opacity: 0, y: 200 }}
              // animate={true ?  : {}}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="epc"
            >
              <ExpProClient data={{ exp: 1, project: 5, client: 1 }} />
            </motion.div>

            <motion.div
              // ref={ref1}
              initial={{ opacity: 0, y: 200 }}
              // animate={true ? { opacity: 1, y: 0 } : {}}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="service-container my-[200px]"
            >
              <p>
                <img src={logoOrange} alt="" className="w-[3rem] mx-[auto]" />
              </p>
              <p className="text-center text-[3rem] font-[700]">Services</p>
              <p className="text-center text-[1.125rem] font-[700] leading-[2rem] mt-[.6rem]">
                REGONITIONS & ACCOIMPLISHMENTS
              </p>
              <div className="service-blocks flex flex-wrap gap-[20px] justify-center mt-[4rem]">
                <Service
                  data={{
                    title: "Web Design",
                    content:
                      "Passionate about creating visually stunning and user-friendly websites that leave a lasting impression. I specialize in translating complex ideas into intuitive and engaging digital experiences.",
                  }}
                />
                <Service
                  data={{
                    title: "Product Design",
                    content:
                      "Dedicated to conceptualizing and developing innovative products that solve real-world problems and delight users. From ideation to execution, I focus on delivering solutions that drive business growth and user satisfaction.",
                  }}
                />
                <Service
                  data={{
                    title: "UI/UX Design",
                    content:
                      "Committed to crafting seamless and delightful user interfaces that enhance usability and elevate the overall user experience. I believe in the power of thoughtful design to create meaningful connections between users and digital products.",
                  }}
                />
                <Service
                  data={{
                    title: "Development",
                    content:
                      "I take the lead in crafting visual narratives that captivate audiences and evoke powerful emotions. Every project, from inception to completion, is a journey towards creating immersive and impactful experiences that leave a lasting impression. Resonating with users on a profound level and driving engagement to new heights.",
                  }}
                />
              </div>
            </motion.div>

            <motion.div
              // ref={ref1}
              initial={{ opacity: 0, y: 200 }}
              // animate={true ? { opacity: 1, y: 0 } : {}}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="article"
            >
              <p>
                <img src={logoOrange} alt="" className="w-[3rem] mx-[auto]" />
              </p>
              <p className="text-center text-[3rem] font-[700]">Articles</p>
              <p className="text-center text-[1.125rem] text-[#161513] font-[600] leading-[2rem] mt-[1rem] opacity-80">
                REGONITIONS & ACCOIMPLISHMENTS
              </p>
              <div className="article-contiainer  mt-[4rem]">
                <motion.div
                  initial={{ x: -200, opacity: 0 }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                    transition: { delay: 0.3, duration: 0.3, type: "spring" },
                  }}
                  viewport={{ once: true }}
                >
                  <Article
                    data={{
                      type: "DESIGN",
                      date: "APRIL 28, 2022",
                      title: "Why i moved from Wordpress to Webflow",
                      content: `
                            I transitioned from Wordpress to Webflow for its intuitive design interface and seamless development experience, streamlining website creation and maintenance processes effectively.`,
                      link: "https://webflow.com/blog/transfer-website",
                    }}
                  />
                </motion.div>

                <motion.div
                  initial={{ x: 200, opacity: 0 }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                    transition: { delay: 0.5, duration: 0.3, type: "spring" },
                  }}
                  viewport={{ once: true }}
                >
                  <Article
                    data={{
                      type: "DESIGN",
                      date: "APRIL 26, 2022",
                      title: "What did i learn from doing 5+ design sprints",
                      link: "https://www.differential.com/posts/the-design-sprint-5-lessons-learned#:~:text=One%20of%20the%20most%20important,built%20before%20the%20sprint%20begins.",
                      content: `
From 5+ design sprints, I've learned efficient collaboration and rapid prototyping, enhancing creativity and problem-solving skills.`,
                    }}
                  />
                </motion.div>

                <motion.div
                  initial={{ x: -200, opacity: 0 }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                    transition: { delay: 0.7, duration: 0.3, type: "spring" },
                  }}
                  viewport={{ once: true }}
                >
                  {/* <Article
                    data={{
                      type: "BUSINESS & OFFICE",
                      date: "APRIL 26, 2022",
                      title: "Fostering professional growth in your company",
                      link: "https://lovinglifeco.com/corporate/10-effective-ways-to-foster-staff-development-in-your-organisation/",
                      content: `
          Lorem ipsum dolor, sit amet consectetur  dicta. Reprehenderit facilis eius quibusdam eos nisi?`,
                    }}
                  /> */}
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              // ref={ref1}
              // initial={{ opacity: 0, y: 200 }}
              
              // whileInView={{ opacity: 1, y: 0 }}
              // viewport={{ once: true }}
              // transition={{ duration: 0.5, delay: 0.1 }}
              onClick={() => {
                  toast("More articles are on the way 🤞");
                }}
              className="bg-[#161513] p-[5px] w-[90%] mx-[auto]"
            >
              
                <Button text={"Browse Article"} color={"black"} />
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}

export default Home;
