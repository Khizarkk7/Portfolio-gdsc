/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img src="person.png" alt="" />
          </div>
          <div className="banner-content">
            <h6>Hello, I'm Khizar Saqib</h6>
            <h3>Web Developer</h3>
            <p>
            Programming is more fun and  astonishingly useful as it build your creativity and creates new career doors for those passionate about it. 
            Most people today don’t really know how a computer works even thou they can simply turn on a computer or a mobile phone by just clicking on some buttons or swiping a finger or two and the computer does what they want. 
            Learning how to write computer programs will require one to understand how a computer works.
            </p>
            <a className="btn" href="#projects">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
