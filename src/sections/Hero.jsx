import React from 'react'
import {FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import { useTypewriter, Cursor} from 'react-simple-typewriter'
import Button from '../components/Button'
import AnchorLink from "react-anchor-link-smooth-scroll"
import Me from '../assets/Me.jpg'


function Hero() {

  const [text] = useTypewriter({
    words: [' Software Developer', ' Front-End Developer', ' Back-End Developer', ' Full-Stack Developer', ' Software Engineer'],
    loop: 1000
  })

  return (
    <div className='container w-full h-screen flex items-center justify-around md:w-full lg:w-full'  id='hero'>
      <div className="hero-content">
        <div className='icons flex justify-between w-24 mb-4 '>
          <a href="https://github.com/Jhoneric12" target='blank'><FaGithub className='text-fonts w-6 h-6 transition duration-150 hover:opacity-80'/></a>
          <a href="https://www.linkedin.com/in/jhon-eric-aton-5535a8245/" target='blank'><FaLinkedin className='text-fonts w-6 h-6 transition duration-150 hover:opacity-80'/></a>
          <a href="https://www.facebook.com/jhoneric.aton" target='blank'><FaFacebook className='text-fonts w-6 h-6 transition duration-150 hover:opacity-80'/></a>
        </div>
        <div className="main-content mb-8">
          <h1 className=' text-5xl text-fonts font-extrabold mb-4'>Jhon Eric Aton</h1>
          <h4 className=' text-based text-fonts font-medium text-lg' >An aspiring <span className='text-secondary font-extrabold text-based
          '>{text}<Cursor cursorColor='#DDE6ED'/></span></h4>
        </div>
        <div className="btn">
          <AnchorLink href='#projects'><Button btnText='Projects'/> </AnchorLink>
        </div>
      </div>
      <div className="second " data-aos="fade-left">
         <img className='my-img w-[18.875rem] h-[18.875rem] border-4 border-secondary rounded-full' src={Me} alt="" />
       </div>
    </div>
  )
}

export default Hero