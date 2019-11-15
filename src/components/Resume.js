import React from 'react';
import linkedinIcon from "./footer-component/linkedin-icon.png";
import mailIcon from "./mail.svg";

export default class Resume extends React.Component {
render(){
return (
<div className="container">
  <div className="col-md-8">
    <div className="row">
      <h1>Résumé</h1>
    </div>
    <div className="row">
      <h2>Kevin Leong</h2>
    </div>
  </div>
  <div className="col-md-4">
    <div class="row">
      <a href="https://www.linkedin.com/in/kevinpleong" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} width="30" height="30" alt="Linked In Icon" className="img-responsive" /></a>
    </div>
    <div class="row">
      <a href="http://contact.kevinpleong.com" rel="noopener noreferrer" target="_blank"><img src={mailIcon} width="30" height="30" alt="Email" className="img-responsive" /></a>
    </div>
  </div>

  <div className="col-md-12">
    <h3>SUMMARY</h3>
    <p>Passionate front-end web developer with 3 years of experience using JavaScript, HTML5, CSS, Bootstrap and Javascript frameworks to build the users experience and user interface for client-facing webpages. Specializes in React, HTML,
      Bootstrap,
      and CSS.</p>
    <hr />
    <h3>Technical Skills</h3>
    <ul>
      <li>Front-end</li>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Bootstrap 4</li>
        <li>JavaScript</li>
        <li>Jquerry</li>
        <li>Embedded JavaScript</li>
        <li>REACT</li>
      </ul>
      <li>Other</li>
      <ul>
        <li>Git</li>
        <li>GitHub</li>
      </ul>
    </ul>
    <h3>Work Experience</h3>
    <p>Operations Summer Intern, Benetech | Palo Alto, California | 2019 - 2019</p>
    <ul>
      <li>Created more than 20 landing pages in HTML5, CSS3, and Bootstrap 4</li>
      <li>Implemented CSS/Bootstrap to design multiple responsive web pages</li>
      <li>Maintained front-end code and documentation standards</li>
    </ul>
    <hr />
    <h3>Education</h3>
    <div className="row">
      <div className="col-md-2">
        Expected in 06/2020
      </div>
      <div className="col-md-10">
        <p><b>High School Diploma</b>
          <br />
          <b>Fusion Academy</b> - Palo Alto</p>
      </div>
    </div>
  </div>
</div>
);
} // END OF RENDER
} // END OF Resume
