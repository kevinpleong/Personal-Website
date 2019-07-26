import React from 'react';
import linkedinIcon from "./footer-component/linkedin-icon.png"
export default class Résumé extends React.Component {
  render() {
    return (
      <div class="container">
        <h1>Résumé</h1>
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-6">
              <h2><b>Kevin Leong</b></h2>
            </div>
            <div class="col-md-6">
              <p>Mobile Number: 1(408)410-5559</p>
              <a target="_blank" href="https://www.linkedin.com/in/kevinpleong">Linked In Page           <div style="color: white;">|</div>
                <img src={linkedinIcon} width="30" height="30" className="img-fluid" />
              </a>
            </div>
          </div>
        </div>

        <h3><b>EDUCATION</b></h3>
        <p>I have been attending Fusion Academy a private high school for 3 years on the border of Palo Alto and East Palo Alto. I will graduate high school in the Fall of 2020.</p>

        <h3><b>JOB EXPERIENCE</b></h3>
        <p>I worked as a summer intern at Stanford from June through August of 2017. I worked at Benetech from as an Operations Summer Intern from June 10, 2019 to August 9, 2019. I worked on collection development projects for the Bookshare Library and edited book metadata. I created webpages for Bookshares Website on the transition from high school to college for students with learning dissabilities.</p>

        <h3><b>SKILLS</b></h3>
        <p>I am a front end web developer and have been programming for 3 years. I know HTML, Bootstrap, CSS, JavaScript, Embedded JS, and React. I am currently learning the JavaScript Full Stack Framework the MERN Stack.</p>

        <h3><b>VOLUNTEER EXPERIENCE</b></h3>
        <p>I volunteered at the Menlo Prespeterian Church watching one to two year old kids.</p>

        <h3><b>Interests</b></h3>
        <p>I love math, listening to books, and programming. I enjoy fishing, swimming, programming, listening to books, and travelling. I have participated in the YMCA Youth and Government for the last 2 years.</p>
      </div>
    );
  } // END OF RENDER
} // END OF Résumé