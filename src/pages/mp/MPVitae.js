import React from 'react';
import PropTypes from 'prop-types';
import KiraProfile from '../../images/mp/kira-left-banner.jpg';

function MPVitae(props) {
  return (
    <div className="MPVitae-container">
      <div className="MPVitae-sidebar">
        <img src={KiraProfile} className="MPVitae-sidebar-image"/>
      </div>
      <div className="MPVitae-mainbar">
        <h2 className="white">
          Lead Software Engineer
        </h2>
        <h3 className="red">
          MOTORIZED PRECISION
        </h3>
        <p style={{color: '#ffffff'}}>
          Lead a small team of developers working on MP Studio, a desktop application for motion control cinematography.
          Clients use MP Studio to bring our company's 6-axis robots to life. On most shoots, our robots move in
          synchronization with other devices we have integrated, including cameras, lights, focus motors, grippers, and
          turntables.
        </p>
        <p style={{color: '#ffffff'}}>
          Provide high-quality support and feature development for top of the line clients, including Apple, Microsoft,
          and the NFL.
        </p>
        <p className="white">
          Subdivide big features into tasks and delegate among the team. Manage JIRA.
        </p>
        <p className="white">
          Ensure that our team delivers quality features on time. Assist other developers as needed.
        </p>
        <p className="white">
          Prioritize usability and simplicity above all else.
        </p>
        <p className="white">
          Key skills: React, Redux, Electron, THREE.js, D3.js
        </p>  
      </div>
    </div>
  );
}

MPVitae.propTypes = {
  onChangePage: PropTypes.func.isRequired,
};

export default MPVitae;
