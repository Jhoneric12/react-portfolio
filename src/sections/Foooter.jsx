import React from 'react'
import {FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Foooter() {
  return (
    <div className="container w-[full] border-t-2 border-secondary py-4 flex justify-between">
        <div className="logo flex">
            <AnchorLink href='#hero'><h1 className='text-secondary text-lg font-bold hover:text-fonts transition duration-150 cursor-pointer'>JEA.</h1></AnchorLink>
        </div>
        <div className='icons flex justify-between w-24 mb-4'>
          <a href="https://github.com/Jhoneric12" target='blank'><FaGithub className='text-secondary w-6 h-6 transition duration-150 hover:text-fonts'/></a>
          <a href="https://www.linkedin.com/in/jhon-eric-aton-5535a8245/" target='blank'><FaLinkedin className='text-secondary w-6 h-6 transition duration-150 hover:text-fonts'/></a>
          <a href="https://www.facebook.com/jhoneric.aton" target='blank'><FaFacebook className='text-secondary w-6 h-6 transition duration-150 hover:text-fonts'/></a>
        </div>
    </div>
  )
}

export default Foooter