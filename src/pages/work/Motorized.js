import React from 'react';
import BreadCrumbs from '../../components/BreadCrumbs';
import NeonSign from '../../components/NeonSign';
import KiraProfile from '../../public/images/mp/kira-left-banner.jpg';
import RehearseScreen from '../../public/images/mp/mpstudio-rehearse.png';
import PerformScreen from '../../public/images/mp/mpstudio-perform.png';
import resume from '../../public/files/ben_scheiner_resume.pdf';

function Motorized() {
  return (
    <>
      <div className="MPVitae-container">
        <div className="MPVitae-sidebar">
          <img src={KiraProfile} className="MPVitae-sidebar-image" />
        </div>
        <div className="MPVitae-mainbar">
          <h2 className="white">Lead Software Engineer</h2>
          <a href="http://motorizedprecision.com/" className="no-underline">
            <h3 className="red">MOTORIZED PRECISION</h3>
          </a>
          <p className="flex-spaced">
            <NeonSign>Robotics</NeonSign>
            <NeonSign
              color="deepskyblue"
              onClick={() => {
                window.location = 'https://reactjs.org/';
              }}
              title="https://reactjs.org/"
            >React</NeonSign>
            <NeonSign
              color="deeppink"
              onClick={() => {
                window.location = 'https://redux.js.org/';
              }}
              title="https://redux.js.org/"
            >Redux</NeonSign>
            <NeonSign
              onClick={() => {
                window.location = 'https://electronjs.org/';
              }}
              color="lawngreen"
              title="https://electronjs.org/"
            >Electron</NeonSign>
            <NeonSign
              onClick={() => {
                window.location = 'https://threejs.org/';
              }}
              color="deepskyblue"
              title="https://threejs.org/"
            >three.js</NeonSign>
            <NeonSign
              onClick={() => {
                window.location = 'https://d3js.org/';
              }}
              title="https://d3js.org/"
            >d3.js</NeonSign>
          </p>
          <p style={{ color: '#ffffff' }}>
            At MP I led a small team in developing MP Studio, a desktop
            application for motion control cinematography. MP Studio brings
            6-axis robots to life in synchronization with lights, cameras, and more.
          </p>
          <p className="white centered">The MP Studio Rehearsal Screen</p>
          <a href={RehearseScreen}>
            <img
              src={RehearseScreen}
              className="bordered inline-img space-below"
            />
          </a>
          <p className="white centered">The MP Studio Perform Screen</p>
          <a href={PerformScreen}>
            <img
              src={PerformScreen}
              className="bordered inline-img space-below"
            />
          </a>
          <p className="white centered">A Review of Motorized Precision</p>
          <div className="bordered inline-img">
            <iframe
              height="315"
              width="100%"
              src="https://www.youtube.com/embed/UIwdCN4dV6w?rel=0"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>

          <p className="white">
            Here is my{' '}
            <a className="white" href={resume}>
              resume
            </a>{' '}
            with contact information. If you want to work together, don't
            hesitate to reach out!
          </p>

          <BreadCrumbs
            containerClasses="flex-center space-above"
          />
        </div>
      </div>
    </>
  );
}

export default Motorized;
