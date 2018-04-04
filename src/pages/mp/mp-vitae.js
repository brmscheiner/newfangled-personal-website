import React from 'react';
import KiraProfile from '../../images/mp/kira-left-banner.jpg';
import RehearseScreen from '../../images/mp/mpstudio-rehearse.png'
import PerformScreen from '../../images/mp/mpstudio-perform.png'
import resume from '../../files/ben_scheiner_resume.pdf';

function MpVitae() {
  return (
    <div className="MPVitae-container">
      <div className="MPVitae-sidebar">
        <img src={KiraProfile} className="MPVitae-sidebar-image"/>
      </div>
      <div className="MPVitae-mainbar">
        <h2 className="white">
          Lead Software Engineer
        </h2>
        <a href='http://motorizedprecision.com/' className="no-underline"><h3 className="red">
          MOTORIZED PRECISION
        </h3></a>
        <p className="white">
          Robotics, React, Redux, Electron, THREE.js, D3.js
        </p>
        <p style={{color: '#ffffff'}}>
          Lead a small team of developers working on MP Studio, a desktop application for motion control cinematography.
          MP Studio brings our company's 6-axis robots to life.
        </p>
        <p className="white centered">
          The MP Studio Rehearsal Screen
        </p>
        <a href={RehearseScreen}><img src={RehearseScreen} className="bordered inline-img space-below"/></a>
        <p className="white centered">
          The MP Studio Perform Screen
        </p>
        <a href={PerformScreen}><img src={PerformScreen} className="bordered inline-img space-below"/></a>
        <p className="white centered">
          A Review of Motorized Precision
        </p>
        <div className="bordered inline-img">
          <iframe height="315" width="100%" src="https://www.youtube.com/embed/UIwdCN4dV6w?rel=0" frameBorder="0"
                  allow="autoplay; encrypted-media" allowFullScreen>
          </iframe>
        </div>

        <p className="white">
          Here is my <a className="white" href={resume}>resume</a> with contact information.
          If you want to work together, don't hesitate to reach out!
        </p>
      </div>
    </div>
  );
}

export default MpVitae;
