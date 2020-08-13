import React from 'react'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a href="https://www.linkedin.com/in/jlamb/" className="icon fa-linkedin">
            <span className="label">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://dribbble.com/jimlamb" className="icon fa-dribbble">
            <span className="label">Dribbble</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/jimlamb" className="icon fa-github">
            <span className="label">Github</span>
          </a>
        </li>
        <li>
          <a href="mailto:jimlamb@hey.com" className="icon fa-envelope-o">
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>Based on <a href="https://www.gatsbyjs.com/starters/codebushi/gatsby-starter-strata">gatsby-starter-strata</a> by <a href="http://html5up.net" title="Licensed under Creative Commons Attribution 3.0">HTML5 UP</a></li>
      </ul>
    </div>
  </div >
)

export default Footer
