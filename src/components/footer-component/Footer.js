import React from 'react';
import facebookIcon from "./facebook-icon-color.png"
import fiverrIcon from "./fiverr-icon.png"
import flickrIcon from "./flickr-icon.png"
import githubIcon from "./github-icon.png"
import goodreadsIcon from "./goodreads-icon.png"
import instagramIcon from "./instagram-icon.png"
import linkedinIcon from "./linkedin-icon.png"
import pinterestIcon from "./pinterest-icon.png"
import skypeIcon from "./skype-icon.png"
import stackoverflowIcon from "./stack-overflow-icon.png"
import twitterIcon from "./twitter-icon.png"
import tumblrIcon from "./tumblr-icon.png"
import youTubeIcon from "./youTube-icon.png"
import ReactTooltip from 'react-tooltip'


export default class Footer extends React.Component {
  render() {
    return (<div>
      <footer className="blog-footer">
        <p>Made by Kevin Leong</p>
        <a target="_blank" href="https://www.facebook.com/kevinpleong">
          <img src={facebookIcon} width="30" height="30" className="img-fluid"/>
        </a>

        <a target="_blank" href="https://twitter.com/kevinpleong">
          <img src={twitterIcon} width="30" height="30" className="img-fluid"/>
        </a>

        <a target="_blank" href="https://instagram.com/kevinpleong">
          <img src={instagramIcon} width="30" height="30" className="img-fluid"/>
        </a>

        <a target="_blank" href="https://www.linkedin.com/in/kevinpleong">
          <img src={linkedinIcon} width="30" height="30" className="img-fluid"/>
        </a>

        <a target="_blank" href="https://pinterest.com/kevinpleong">
        <img src={pinterestIcon} width="30" height="30" className="img-fluid"/>
        </a>

        <a target="_blank" href="https://github.com/kevinpleong">
          <img src={githubIcon} width="30" height="30" className="img-fluid"/>
        </a>

        <a target="_blank" href="https://meta.stackoverflow.com/users/11357673/kevin-leong">
          <img src={stackoverflowIcon} width="30" height="30" className="img-fluid"/>
        </a>

        <a target="_blank" href="https://www.fiverr.com/kevinpleong">
          <img src={fiverrIcon} width="30" height="30" className="img-fluid"/>
        </a>

        <a target="_blank" href="https://www.goodreads.com/kevinpleong">
          <img src={goodreadsIcon} width="30" height="30" className="img-fluid"/>
        </a>
        <a target="_blank" href="https://www.youtube.com/channel/UCgCtAiPn05h2AXCpPmECw4g/">
          <img src={youTubeIcon} width="30" height="30" className="img-fluid"/>
        </a>
      </footer>

    </div>);
  } // END OF RENDER
} // END OF Footer
