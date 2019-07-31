import React from 'react';
import linkedinIcon from "./footer-component/linkedin-icon.png";

export default class Resume extends React.Component {
  render() {
    return (
          <div className="container">
            <div className="col-md-12">
              <div className="row">
              <div className="col-md-8">
                <h1>Résumé</h1>
              </div>
              <div className="col-md-4" style={{textAlign:"right"}}> <a href="www.contact.kevinpleong.com">Email Me</a></div>
            </div>
              <div className="row">
                <div className="col-md-6">
                  <h2><b>Kevin Leong</b></h2>
                </div>
                <div className="col-md-6" style={{textAlign:"right"}}>
                  <a href="https://www.linkedin.com/in/kevinpleong">Linked In Page
                    <img src={linkedinIcon} width="30" height="30" className="img-fluid" alt="Linked in Icon" />
                  </a>
              </div>
            </div>

            <h3><b>EDUCATION</b></h3>
            <ul>
              <li>Senior in High School</li>
              <li>Graduate High School in 2020</li>
            </ul>
            <h3><b>JOB EXPERIENCE</b></h3>
            <h4></h4>
            <div style={{textAlign:"right"}}>
              June 2019-August 2019
            </div>
              <ul>
                <li>Stanford</li>
              </ul>

              <div style={{textAlign:"right"}}>
                June 2019-August 2019
              </div>
            I worked as a summer intern at Stanford from June through August of 2017. I worked at Benetech as an Operations Summer Intern from June 10, 2019 to August 9, 2019. I worked on collection development projects for the Bookshare Library and edited book metadata. I created webpages for Bookshares Website on the transition from high school to college for students with learning dissabilities.</p>

            <h3><b>SKILLS</b></h3>
            <p>I am a front end web developer and have been programming for 3 years. I know HTML, Bootstrap, CSS, JavaScript, Embedded JS, and React. I am currently learning the JavaScript Full Stack Framework the MERN Stack.</p>

            <h3><b>VOLUNTEER EXPERIENCE</b></h3>
            <p>In 2016 I created a </p>
            <p>I volunteered at the Menlo Prespeterian Church watching one to two year old kids.</p>

            <h3><b>Interests</b></h3>
            <p>I love math, listening to books, and programming. I enjoy fishing, swimming, programming, listening to books, and travelling. I have participated in the YMCA Youth and Government for the last 2 years.</p>
          </div>
        </div>
        );
  } // END OF RENDER
} // END OF App
