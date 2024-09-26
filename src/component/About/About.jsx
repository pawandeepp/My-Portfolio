import { useEffect } from "react";
import logoOrange from "../../assets/logoOrange.png";
import GifConversion from "../../gifconversion";
import Building from "../../assets/building.json";
import ExpProClient from "../Home/ExpProClient/ExpProClient";
import PhoneAnimation from "../../assets/Phone-animation.json";
import Service from "../Home/Service/Service";
import { motion } from "framer-motion";
import Contact from "./../Contact/Contact";
import "./about.css";

const About = () => {
  const mainText = `You're launching a business and we can help you make it look pretty.`;
  const arrtext = mainText.split(" ");

  const animi = {
    hidden: {
      opacity: 0,
      // y:-100
    },
    visible: (i) => ({
      opacity: 1,
      // y:0,
      transition: { delay: i * 0.1 },
    }),
  };

  return (
    <>
      <div className="container mt-4 w-[90%] mx-auto">
        {/* <h1 className="text-center text-5xl">About Us</h1> */}
        <section className="top">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={animi}
            transition={{ duration: 0.2, type: "spring" }}
            className=" about-main-text font-bold text-[3rem] text-center w-[60%] mx-[auto] text-[#161513] pb-[40px] flex flex-wrap justify-center gap-[10px]"
          >
            {arrtext.map((item, i) => (
              <motion.span variants={animi} key={item} custom={i}>
                {item}
                {console.log(item)}
              </motion.span>
            ))}
          </motion.p>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            className="sub-text font-[700] flex flex-wrap gap-[15px] mt-[20px] mb-[40px] justify-center items-center"
          >
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
          </motion.div>

          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            // viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            className="gif mx-[auto] flex justify-center align-center relative h-[90vh] overflow-hidden"
            style={{ translate: "0 -50px", alignItem: "center" }}
          >
            <GifConversion data={Building} />
          </motion.div>

          <div className="text-about mt-[-50px]">
            <p className="md:columns-2 lg:px-[60px] font-[500] text-[18px] leading-[32px] text-[#161513] gap-[50px]">
              Embarking on the journey of launching a business is both thrilling
              and challenging. At this pivotal moment, the importance of making
              a strong first impression cannot be overstated. That's where our
              expertise comes in. With a dedicated team of professionals, we
              offer comprehensive solutions to help turn your entrepreneurial
              dreams into reality. From branding to design, we're committed to
              ensuring that your business stands out in the competitive
              landscape. Our meticulous attention to detail and innovative
              approach will not only make your venture look visually appealing
              but also set it apart from the crowd. Let us be your partner in
              success as you embark on this exciting journey.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            viewport={{ once: true }}
            className="epc"
          >
            <ExpProClient data={{ exp: 1, project: 5, client: 1 }} />
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
            className="text-about"
          >
            <p
              className="px-[20px] font-[500] md:w-[60%] leading-[32px] text-[18px] mx-[auto] text-[#161513] gap-[50px]"
              style={{ marginBottom: "50px" }}
            >
              As you prepare to launch your business, it's essential to consider
              every aspect of its presentation. <i><b>
                Our team specializes in crafting
                compelling brand identities that resonate with your target
                audience.
               From logo design to website development, we ensure that
              every touchpoint reflects your brand's values and message.</b></i>
              Furthermore, our expertise extends beyond aesthetics. We offer
              strategic guidance to help you navigate the complexities of the
              market landscape. With our industry insights and market analysis,
              you can make informed decisions that propel your business forward.
              Moreover.
            </p>
            <p className="px-[20px] font-[500] md:w-[60%] text-[18px] leading-[32px] mx-[auto] text-[rgb(22, 21, 19)] gap-[50px]">
              we understand the importance of scalability. Our solutions are
              designed to grow with your business, ensuring long-term success
              and sustainability. By partnering with us, you not only gain
              access to top-notch design and marketing services but also a
              trusted advisor committed to your business's success. Let's embark
              on this journey together and create a brand that leaves a lasting
              impression on your audience.
              <div className="gif mx-[auto] flex justify-center h-[100vh] overflow-hidden ">
                <GifConversion data={PhoneAnimation} />
              </div>
              <b style={{fontFamily:"Bilbo, cursive",wordSpacing:"5px"}} className="text-[25px]" >"With our comprehensive approach to design and strategic guidance,
              you can confidently launch your business knowing that every detail
              has been meticulously crafted to captivate your audience and
              propel your success."</b>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, type: "spring" }}
            className="service-container my-[100px]"
          >
            <p>
              <img src={logoOrange} alt="" className="w-[3rem] mx-[auto]" />
            </p>
            <p className="text-center text-[3rem] font-[700]">Services</p>
            <p className="text-center text-[1.125rem] font-[700] leading-[2rem] mt-[1rem]">
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
        </section>
      </div>

      <div id="contact-id" className="contact-section bg-[#fffefe]">
        <Contact />
      </div>
    </>
  );
};

export default About;
