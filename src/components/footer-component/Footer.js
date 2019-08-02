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

          <img src={facebookIcon} width="30" height="30" href="https://www.facebook.com/kevinpleong" alt="Facebook Icon" class="img-responsive" rel="noopener" target="_blank" />

          <img src={twitterIcon} href="https://twitter.com/kevinpleong" target="_blank" rel="noopener" width="30" height="30" alt="Twitter Icon" className="img-responsive" />

          <img src={instagramIcon} width="30" height="30" alt="Instagram Icon" href="https://instagram.com/kevinpleong" target="_blank" rel="noopener" className="img-responsive" />

          <img src={linkedinIcon} width="30" height="30" alt="Linked In Icon" href="https://www.linkedin.com/in/kevinpleong" target="_blank" rel="noopener" className="img-responsive"/>

          <img src={pinterestIcon} width="30" height="30" alt="Pinterest Icon" href="https://pinterest.com/kevinpleong" target="_blank" rel="noopener" className="img-responsive"/>

          <img src={githubIcon} width="30" height="30" alt="Git Hub" href="https://github.com/kevinpleong" target="_blank" rel="noopener" className="img-responive" />

          <img src={stackoverflowIcon} width="30" height="30" alt="Stack Overflow" href="https://meta.stackoverflow.com/users/11357673/kevin-leong" target="_blank" rel="noopener" className="img-responsive"/>

          <img src={fiverrIcon} width="30" height="30" alt="Fiverr" href="https://www.fiverr.com/kevinpleong" target="_blank" rel="noopener" className="img-responsive"/>

          <img src={goodreadsIcon} width="30" height="30" alt="Goodreads Icon" className="img-responsive" href="https://www.goodreads.com/kevinpleong" target="_blank" rel="noopener" />

          <img src={youTubeIcon} width="30" height="30" href="https://www.youtube.com/channel/UCgCtAiPn05h2AXCpPmECw4g/" rel="noopener" target="_blank" alt="YouTube Icon" className="img-responsive" />
      </footer>
    </div>);
  } // END OF RENDER
} // END OF Footer
