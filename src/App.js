import React, { Component } from 'react';
import pageMap from './pages/pageMap';
import './App.css';

class App extends Component {
  state = {
    page: 'SPLASH'
  };

  changePage = (page) => { this.setState({ page }); };

  render() {
    const pageObject = pageMap[this.state.page];

    return (
      <pageObject.component
        onChangePage={this.changePage}
        {...pageObject.props}
      />
    );
  }
}

export default App;
