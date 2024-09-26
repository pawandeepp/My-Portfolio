import React from "react";
import Button from "../../Button/Button";
import "./contact.css";
import logoOrange from "../../assets/logoOrange.png";
import { motion } from "framer-motion";
import { useState } from "react";
import { comment } from "postcss";
import toast from "react-hot-toast";
import { Flag } from "lucide-react";
import GifConversion from "../../gifconversion";
import loader from "./../../assets/loader.json";
import Spiner from "../../Spiner/Spiner";
import { EmailSend } from "../../emailSend";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [Comment, setCommnet] = useState("");

  const [load, setLoad] = useState(false);

  var data = {
    service_id: "service_5q9rl2i",
    template_id: "template_4f5i7gd",
    user_id: "IJpaFiFGHLY2B1-La",
    template_params: {
      user_name: name,
      user_email: email,
      user_subject: subject,
      user_commnet: Comment,
    },
  };

  async function handleForm(e) {
    setLoad((prev) => !prev);
    e.preventDefault();
    let resp = await EmailSend({
      name: name,
      email: email,
      subject: subject,
      Comment: Comment,
    });
    console.log("form response -", resp);
    setLoad((prev) => !prev);

    // resetting the useState

    setName("");
    setCommnet("");
    setEmail("");
    setSubject("");
  }
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, type: "spring", delay: 0.2 }}
      className="w-[100%] pt-[50px] contact-main"
      style={{ maxWidth: "1500px",margin:"0 auto" }}
    >
      <div className="contact-img pb-4">
        <img src={logoOrange} alt="" className="w-[3rem] mx-[auto]" />
      </div>
      <form className=" contact-form w-[50%] mx-auto" onSubmit={handleForm}>
        <h1 className="text-center font-[700] text-[56px] text-[#161513]">
          Get in touch today!
        </h1>
        <p className="text-center font-[500] text-[18px] text-[#161513]">
          Very nice to see you on our platform . Hope you enjoy scrolling.
        </p>

        <div className="contact-input w-[80%] mx-auto mt-[50px]">
          <div>
            <label className="contact-name">
              <p className="text-[16px] font-[700] text-[#161513]">
                Name <b className="text-red-500 text-[15px]">*</b>
              </p>
              <input
                className="border-[1px] border-black w-[100%] py-[7px] px-[5px]"
                type="text"
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
              />
            </label>
          </div>

          <div>
            <label className="contact-name">
              <p className="text-[16px] font-[700] text-[#161513]">
                Subject <b className="text-red-500 text-[15px]">*</b>
              </p>
              <input
                className="border-[1px] border-black w-[100%] py-[7px] px-[5px]"
                type="text"
                required
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                value={subject}
              />
            </label>
          </div>

          <div>
            <label className="contact-name">
              <p className="text-[16px] font-[700] text-[#161513]">
                Work Mail <b className="text-red-500 text-[15px]">*</b>
              </p>
              <input
                className="border-[1px] border-black w-[100%] py-[7px] px-[5px]"
                type="email"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
            </label>
          </div>

          <div>
            <label className="contact-name">
              <p className="text-[16px] font-[700] text-[#161513]">
                Comment <b className="text-red-500 text-[15px]">*</b>
              </p>
              <textarea
                name=""
                id=""
                className="border-[1px] border-black w-[100%] py-[7px] px-[5px]"
                required
                onChange={(e) => {
                  setCommnet(e.target.value);
                }}
                value={Comment}
              ></textarea>
            </label>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              // className="submit-Button font-[600] border-[1px] bg-[#e94d35] text-[white] p-[5px] px-[20px] "
            >
              {load ? (
                <Button text={<Spiner />} customColor={"#e94d35"} />
              ) : (
                <>
                  <Button text={"Submit"} customColor={"#e94d35"} />
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default Contact;
