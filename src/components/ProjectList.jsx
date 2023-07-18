import React from 'react'
import URSBLibrary from '../assets/URSB Library.png'
import Mellontikos from '../assets/Mellontikos Website.png'
import Button from './Button'
import Languages from './Languages'
import '../index.css'
function ProjectList() {

    const btnText = "Source"

  return (
    <div className="container">
        <div className="project flex justify-between mb-40">
            <div className="first flex flex-col w-[40%] ">
                <h1 className='text-xl text-fonts font-bold mb-4'>University of Rizal System Library Management</h1>
                <div className="languages flex mb-10">
                    <Languages lang = 'CSharp'/>
                    <Languages lang = 'MySql'/>
                </div>
                <div className="description mb-6 w">
                    <p className='text-fonts text-based font-regular leading-7'>This system was created during our finals in computer programming II. It allows a user to manage book transations.</p>
                </div>
                <div className="btn mb-4">
                <a href="https://github.com/Jhoneric12/Library_Management_System" target='blank'><Button btnText = {btnText}/></a>
                </div>
            </div>
            <div className="second flex items-center justify-center w-[30%]">
                <img className=' proj-img rounded w-[20rem] h-[12rem]'src={URSBLibrary} alt="" />
            </div>
        </div>
        <div className="project flex justify-between mb-40">
            <div className="first flex flex-col w-[40%] ">
                <h1 className='text-xl text-fonts font-bold mb-4'>Melontikos Website</h1>
                <div className="languages flex justify-between w-[28%] mb-10">
                    <Languages lang  = 'HTML'/>
                    <Languages lang  = 'CSS'/>
                    <Languages lang  = 'JavascripL'/>
                </div>
                <div className="description mb-6 ">
                    <p className='text-fonts text-based font-regular leading-7'>This website is the Mellontikos official website. The mellontikos is a capstone team consists of five students at the University of Rizal System Binangonan..</p>
                </div>
                <div className="btn mb-4">
                    <a href="https://github.com/Jhoneric12/Mellontikos-Website" target='blank'><Button btnText = {btnText}/></a>
                </div>
            </div>
            <div className="second   flex items-center justify-center w-[30%]">
                <img className=' proj-img rounded w-[20rem] h-[12rem]'src={Mellontikos} alt="" />
            </div>
        </div>
    </div>
  )
}

export default ProjectList