import React from 'react'
import { FaArrowRight } from "react-icons/fa";


const Wellcome = () => {
  return (
    <>
        
        <div className='w-[90%] mx-auto pt-10'>
            <div className='pl-20  pb-10'>
                <span className='text-xl text-red-500  font-serif'>Hi.. Clients</span>
                <h1 className='text-6xl font-serif'>WELCOME TO HYPERINFO NET IT SOLUTIONS</h1>
            </div>
            <div className='flex gap-10 p-10 justify-between'>
                <div >
                    <img src="https://schoolmanage.techsima.in/images/main.webp" alt="" />
                </div>
                <div >
                    <p className=''>Now a days whole world moving towards development, in this way computer play is most important role. In recent future computer will become more useful. We can feel the necessity of computer in all fields. In this developing era, mental development of kids is too good. So HNIS has prepared a syllabus of computer education for class 5th to 10th and higher computer education.</p>
                    <br />
                    <p className=''>This syllabus is prepared under technical view to manage a quality computer education all over India. Duration of each syllabus is One month to two years , and a grading certificate & Mark sheet will be issued through the company. Establishment of this council has been done to achieve the motto of “SARVA SIKSHA AVHIYAAN” (in the field of computer) ,</p>
                    <a href="#" className='flex text-red-500 font-bold text-xl p-3 items-center gap-3' >Read more <FaArrowRight /> </a>
                </div>
            </div>
            <div>
                <p>
                    After 10th class higher education of computer has provided on Coaching centers. Council has oathed /constrained for making bright future of all students Wisdom of computer is necessary. through which computer education can provided with favorably syllabus.
                    After 10th class higher education of computer has provided on Coaching centers. Council has oathed /constrained for making bright future of all students Wisdom of computer is necessary.
                </p>
                 <a href="#" className='flex text-red-500 font-bold text-xl p-3 items-center gap-3' >Read more <FaArrowRight /> </a>
            </div>
        </div>
    </>
  )
}

export default Wellcome