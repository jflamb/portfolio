import React from 'react'
import Helmet from 'react-helmet'
import itly from './src/itly';

import Gallery from '../components/Gallery'
import Layout from '../components/layout'

itly.load({ environment: 'development' });
itly.userSignedIn({ platform: 'browser' });
itly.userSignedOut({ platform: 'browser' });
itly.userSignedUp({ platform: 'browser' });
itly.accountCreated({ platform: 'browser' });
itly.accountDeactivated({ platform: 'browser' });
itly.inviteSent({ platform: 'browser' });

const HomeIndex = () => {
  const siteTitle = 'Jim Lamb'
  const siteDescription = 'Design portfolio for Jim Lamb'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>
              About me
            </h2>
          </header>
          <p>
            I’m a Designer with a passion for clean, approachable, and robust designs. I’ve managed all aspects of design projects through initial product ideation and strategy, sketches and wireframes, pixel-perfect comps, and working closely with engineers to make sure the finished product lives up to the design.
          </p>
          <ul className="actions">
            <li>
              <a href="https://www.linkedin.com/in/jlamb/" className="button">
                LinkedIn Profile
              </a>
            </li>
          </ul>
        </section>

        <section id="two">
          <h2>Recent Work</h2>

          <Gallery />

          <ul className="actions">
            <li>
              <a href="https://dribbble.com/jimlamb" className="button">
                See more
              </a>
            </li>
          </ul>
        </section>

        <section id="three">
          <h2>Get In Touch</h2>
          <p>
            I’m currently open to new opportunities. So if you’d like to talk
            about how I might be able to help you, please contact me using
            whichever method you prefer.
          </p>
          <div className="row">
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="mailto:jimlamb@hey.com">jimlamb@hey.com</a>
                </li>
              </ul>
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-mobile">
                    <span className="label">Phone</span>
                  </h3>
                  +1 (919) 475-7244
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
