import React from 'react';
import facebookIcon from "./facebook-icon-color.png"
import fiverrIcon from "./fiverr-icon.png"
import githubIcon from "./github-icon.png"
import goodreadsIcon from "./goodreads-icon.png"
import instagramIcon from "./instagram-icon.png"
import linkedinIcon from "./linkedin-icon.png"
import pinterestIcon from "./pinterest-icon.png"
import stackoverflowIcon from "./stack-overflow-icon.png"
import twitterIcon from "./twitter-icon.png"
import youTubeIcon from "./youTube-icon.png"

export default class Footer extends React.Component {
  render() {
    return (<div>
      <footer className="blog-footer">
        <p>Made by Kevin Leong</p>

          <a href="https://www.facebook.com/kevinpleong" rel="noopener" target="_blank"><img src={facebookIcon} width="30" height="30" alt="Facebook Icon" class="img-responsive" /></a>

          <a href="https://twitter.com/kevinpleong" target="_blank" rel="noopener"><img src={twitterIcon} width="30" height="30" alt="Twitter Icon" className="img-responsive" /></a>

          <a href="https://instagram.com/kevinpleong" target="_blank" rel="noopener"><img src={instagramIcon} width="30" height="30" alt="Instagram Icon" className="img-responsive" /></a>

          <a href="https://www.linkedin.com/in/kevinpleong" target="_blank" rel="noopener"><img src={linkedinIcon} width="30" height="30" alt="Linked In Icon" className="img-responsive"/></a>

          <a  href="https://pinterest.com/kevinpleong" target="_blank" rel="noopener"><img src={pinterestIcon} width="30" height="30" alt="Pinterest Icon" className="img-responsive"/></a>

          <a href="https://github.com/kevinpleong" target="_blank" rel="noopener"><img src={githubIcon} width="30" height="30" alt="Git Hub" className="img-responive" /></a>

          <a href="https://meta.stackoverflow.com/users/11357673/kevin-leong" target="_blank" rel="noopener"><img src={stackoverflowIcon} width="30" height="30" alt="Stack Overflow" className="img-responsive"/></a>

          <a href="https://www.fiverr.com/kevinpleong" target="_blank" alt="Fiverr" rel="noopener"><img src={fiverrIcon} width="30" height="30" className="img-responsive"/></a>

          <a href="https://www.goodreads.com/kevinpleong" target="_blank" rel="noopener"><img src={goodreadsIcon} width="30" height="30" className="img-responsive" alt="Goodreads Icon" /></a>

          <a href="https://www.youtube.com/channel/UCgCtAiPn05h2AXCpPmECw4g/" rel="noopener" target="_blank"><img src={youTubeIcon} width="30" height="30" className="img-responsive" alt="YouTube Icon"/></a>
      </footer>
    </div>);
  } // END OF RENDER
} // END OF Footer
