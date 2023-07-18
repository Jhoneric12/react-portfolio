import React from 'react'
import {FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import { useTypewriter, Cursor} from 'react-simple-typewriter'
import Button from '../components/Button'
import AnchorLink from "react-anchor-link-smooth-scroll"


function Hero() {

  const [text] = useTypewriter({
    words: [' Software Developer', ' Front-End Developer', ' Back-End Developer', ' Full-Stack Developer', ' Software Engineer'],
    loop: 1000
  })

  return (
    <div className='container w-full h-screen flex items-center' id='hero'>
      <div className="hero-content">
        <div className='icons flex justify-between w-24 mb-4 sm:hidden'>
          <a href="https://github.com/Jhoneric12" target='blank'><FaGithub className='text-fonts w-6 h-6 transition duration-150 hover:opacity-80'/></a>
          <a href="https://www.linkedin.com/in/jhon-eric-aton-5535a8245/" target='blank'><FaLinkedin className='text-fonts w-6 h-6 transition duration-150 hover:opacity-80'/></a>
          <a href="https://www.facebook.com/jhoneric.aton" target='blank'><FaFacebook className='text-fonts w-6 h-6 transition duration-150 hover:opacity-80'/></a>
        </div>
        <div className="main-content mb-8">
          <h1 className=' text-5xl text-fonts font-extrabold mb-4'>I'm Jhon Eric Aton</h1>
          <h4 className=' text-based text-fonts font-medium text-lg' >Aspiring <span className='text-secondary font-extrabold text-based
          '>{text}<Cursor cursorColor='#DDE6ED'/></span></h4>
        </div>
        <div className="btn">
          <AnchorLink href='#projects'><Button btnText='Projects'/> </AnchorLink>
        </div>
      </div>
    </div>
  )
}

export default Hero