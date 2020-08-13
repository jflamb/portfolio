import React from 'react'
import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'
import { Link } from "gatsby"

const Header = () => (
  <header id="header">
    <div className="inner">
      <Link
        to="/"
        className="image avatar"
      >
        <img src={avatar} alt="Jim Lamb" />
      </Link>
      <h1>
        <strong>I&rsquo;m Jim Lamb</strong>, <br />a full-stack Designer
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
