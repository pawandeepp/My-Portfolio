import React, { useEffect, useState } from "react";
import {toast} from "react-hot-toast";
import whitelogo from '../../assets/whitelogo.png'
import "./footer.css";
import { Linkedin,Instagram,Facebook } from 'lucide-react';
import Button from "../../Button/Button";
import {EmailSend} from "./../../emailSend";
import Spiner from "../../Spiner/Spiner";
import {Link} from "react-router-dom";
const Footer = () => {

  const [email,setEmail] = useState("");
  const [loader,setLoader] = useState(false);



  async function handleSubscribe(e){
    setLoader((prev)=>!prev)
    e.preventDefault();
    let resp = await EmailSend({email : email , name: "Subscribe" ,subject:"subscribe to news letter" , Comment:"Subscribe"})
    console.log("subcribe response - ",resp)
    setLoader((prev)=>!prev)
    setEmail("")
  }

  useEffect(()=>{
    console.log("email -",email)
  },[email])

  function underDev(){
     toast("This page is under development.",
  {
    icon: '🤷‍♂️',
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  }
);      
  }

  return (
    <>
    <div className="bfsub bg-[#e7e3df] py-[70px]">
        <div className="subscribe flex justify-between w-[80%] mx-auto items-center h-[100%] ">
            <p className="text-2xl font-bold">Subscribe to our newsletter</p>
        
            <form className="flex gap-[20px] border-2 border-red" onSubmit={handleSubscribe}>
                <input type="email" placeholder="Email Address" required onChange={(e)=>setEmail(e.target.value)} value={email} className=" inputemail p-[10px] px-[30px] border-2 border-black bg-[#e7e3df] " />
                {
                  loader ?
                  <Button text={<Spiner />}/>
                  :
                <Button text={"Subscribe"}/>
                }
                
            </form>
        </div>
    </div>

    <div className="footer">
        

      <div className="items flex justify-between">
        <div className="logo">
          <img src={whitelogo} alt="logo" width='45px' />
        </div>
        <ul className="flex gap-[40px]">
          
            <li style={{cursor:"pointer"}} onClick={underDev}>Style Guide</li>
          
          
            <li style={{cursor:"pointer"}} onClick={underDev}>Licence</li>
          
          
            <li  style={{cursor:"pointer"}} onClick={underDev}>Changelog</li>
          
        </ul>
      </div>

    <div className="second-line flex justify-between mt-[28px]">
        <p className="text-white text-center">© This project is licensed under the MIT license.</p>
        <div className="socialMedia flex gap-10 ">
          <Link to="https://www.instagram.com/anmol___47?igsh=MW02dWZjZjRxMTFubQ==" target="_blank">
            <Instagram size={28} color="white"/>
          </Link>
          <Link to="https://www.linkedin.com/in/pawan-deep-525133222" target="_blank">
            <Linkedin size={28} color="white" />
          </Link>
          <Link to="https://www.facebook.com/profile.php?id=100025257840732&mibextid=ZbWKwL" target="_blank">
            <Facebook size={28} color="white"/>
          </Link>

        </div>
    </div>

    </div>
    </>

  );
};

export default Footer;
