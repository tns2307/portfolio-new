import React from 'react';
import config from '../../config';
import scrollTo from 'gatsby-plugin-smoothscroll';

export default function Footer() {
  return (
    <div id="footer">
      <div className="container medium">
        <header className="major last">
          <h2>Let's Get In Touch!</h2>
        </header>

        {/* <p>Just Contact me Below</p> */}

        {/* <ContactForm /> */}

        <ul className="icons" id="connect">
          {config.socialLinks.map(social => {
            const { icon, name, url } = social;
            return (
              <li key={url}>
                <a href={url} className={`icon ${icon}`}>
                  <span className="label">{name}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="copyright">
          <li>&copy; 2020 All rights reserved.</li>
          <li>
            Made With: <a href="https://www.gatsbyjs.org/">Gatsby.Js</a>
          </li>
          <li>
            Design From: <a href="http://html5up.net">HTML5 UP</a>
          </li>
          <li>
            Filled By: <a href="#header" onClick={() => scrollTo('#header')}>Me</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
