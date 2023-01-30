import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {BsGithub} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Rajesh Kumar</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        {/* <li><a href='#services'>Services</a></li> */}
        <li><a href='#portfolio'>Portfolio</a></li>
        {/* <li><a href='#testimonials'>Testimonials</a></li> */}
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.facebook.com/RajeshVishwa978/'><FaFacebookF /></a>
        <a href='https://www.instagram.com/_rajesh_vishwa/'><FiInstagram /></a>
        <a href='https://twitter.com/rajeshk22143332'><IoLogoTwitter /></a>
        <a href='https://github.com/rajeshkumar997'><BsGithub /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Rajesh Kumar. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer