import React from 'react';
import Breadcrumbs from '../common/breadcrumbs';
import NeonSign from '../common/neonSign';
import KiraProfile from '../../images/mp/kira-left-banner.jpg';
import RehearseScreen from '../../images/mp/mpstudio-rehearse.png'
import PerformScreen from '../../images/mp/mpstudio-perform.png'
import resume from '../../files/ben_scheiner_resume.pdf';

function MpVitae() {
  const crumbs = [
    {
      label: 'HOME',
      href: '/',
    },
    {
      label: 'WORK',
      href: '#',
    }
  ];

  return (
    <React.Fragment>
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
          <p className="flex-spaced">
            <NeonSign text="ROBOTICS" />
            <NeonSign
              color="deepskyblue"
              onClick={() => { window.location = 'https://reactjs.org/'}}
              text="REACT"
              title="https://reactjs.org/"
            />
            <NeonSign
              color="deeppink"
              onClick={() => { window.location = 'https://redux.js.org/'}}
              text="REDUX"
              title="https://redux.js.org/"
            />
            <NeonSign
              onClick={() => { window.location = 'https://electronjs.org/'}}
              text="ELECTRON"
              title="https://electronjs.org/"
            />
            <NeonSign
              color="lawngreen"
              onClick={() => { window.location = 'https://threejs.org/'}}
              text="THREE.JS"
              title="https://threejs.org/"
            />
            <NeonSign
              color="deepskyblue"
              onClick={() => { window.location = 'https://d3js.org/'}}
              text="D3"
              title="https://d3js.org/"
            />
          </p>
          <p style={{color: '#ffffff'}}>
            I lead a small team of developers working on MP Studio, a desktop application for motion control cinematography.
            MP Studio brings Motorized Precision's 6-axis robots to life.
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

          <Breadcrumbs crumbs={crumbs}  containerClasses="flex-center space-above" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default MpVitae;
