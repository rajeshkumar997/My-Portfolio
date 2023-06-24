import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/rajeshkumar997/' target="_blank"><BsLinkedin /></a>
      <a href='https://github.com/rajeshkumar997' target="_blank"><BsGithub /></a>
      <a href='https://www.facebook.com/RajeshVishwa978/' target="_blank"><BsFacebook /></a>
    </div>
  )
}

export default HeaderSocials