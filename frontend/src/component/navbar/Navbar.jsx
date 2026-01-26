import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";



const Navbar = () => {
  return (
    <>
        <div className='flex justify-between p-4 pl-10 bg-black  h-10 items-center'>
            <div>
                <ul className='flex gap-3 cursor-pointer text-white'>
                    <li><FaPhoneAlt /></li>
                    <li><FaInstagram /></li>
                    <li><FaGoogle /></li>
                    <li><FaTwitter /></li>
                    <li><FaYoutube /></li>
                </ul>
            </div>
            <div className='flex gap-10 pr-10  '>
                <a href="#" className='h-6 bg-red-400 text-white '>Student Register</a>
                <a href="#" className='h-6 bg-red-400 text-white'> Student Login</a>
            </div>
        </div>
        <div className='flex justify-between   w-full items-center h-25 p-10  bg-nav rounded-2xl ' >
            <div > 
                <img src="https://schoolmanage.techsima.in/images/logo-Recovered.png" alt="" className=' pl-10 h-20 cursor-pointer'/>
            </div>
            <div className='pr-10'>
                <ul className='flex gap-10 cursor-pointer'>
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>LOGIN</li>
                    <li>CONTACT</li>
                    <li>GALLERY</li>
                    <li>OTHER</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar