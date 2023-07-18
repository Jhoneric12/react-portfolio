import React from 'react'
import SectionTitle from '../components/SectionTitle'
import LanguagesLogo from '../components/LanguagesLogo'
import {SiJavascript, SiCsharp, SiCss3, SiReact, SiHtml5} from 'react-icons/si'
import Button from '../components/Button'
import Me from '../assets/Me.jpg'
import '../index.css'

function About() {
  return (
    <div className="container h-screen w-full">
        <SectionTitle title = 'About Me'/>
        <div className="div flex justify-around items-center">
            <div className="first w-[40%]">
                <div className="about-me">
                <h1 className='text-fonts text-xl font-bold mb-7'>Personal Information</h1>
                <p className='text-fonts text-based font-regular leading-7 mb-4'>The name is Jhon Eric Dormido Aton. Currently studying at the University of Rizal System taking Bachelor of Science in Information Technology. </p>
                <p className='text-fonts text-based font-regular leading-7 mb-10'>I have been coding since I was in senior high school. I’m currently studying front - end developement and hoping to become a full - stack developer.</p>
                </div>
                <div className="tech-stack mb-10" data-aos="fade-up">
                    <h1 className='text-fonts text-xl font-bold mb-7'>Tech Stack</h1>
                    <div className="lang-logo flex">
                        <LanguagesLogo logo = {<SiReact className='text-fonts w-[2.25rem] h-[2.25rem]'/>}/>
                        <LanguagesLogo logo = {<SiJavascript className='text-fonts w-[2.25rem] h-[2.25rem]'/>}/>
                        <LanguagesLogo logo = {<SiHtml5 className='text-fonts w-[2.25rem] h-[2.25rem]'/>}/>
                        <LanguagesLogo logo = {<SiCss3 className='text-fonts w-[2.25rem] h-[2.25rem]'/>}/>
                        <LanguagesLogo logo = {<SiCsharp className='text-fonts w-[2.25rem] h-[2.25rem]'/>}/>
                    </div>
                </div>
                <div className="btn">
                    <Button btnText = 'Resume'/>
                </div>
            </div>
            <div className="second " data-aos="fade-left">
                <img className='my-img w-[20.875rem] h-[21.875rem] border-4 border-secondary' src={Me} alt="" />
            </div>
        </div>
    </div>
  )
}

export default About