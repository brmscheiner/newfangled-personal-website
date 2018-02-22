import _ from 'lodash';
import React, { Component } from 'react';

class Gallery extends Component {
  state = {
    imagesLoaded: 0,
  };

  render() {
    const { sources } = this.props;

    console.log(sources);
    console.log(this.state);

    const nodes = _.map(sources, (source) => (
      sources.indexOf(source) >= this.state.imagesLoaded &&
      <div
        key={source}
        className="Gallery-image-container"
      >
        <img
          src={source}
          onLoad={() => { this.setState({ imagesLoaded: this.state.imagesLoaded + 1 }); } }
          className="Gallery-image"
          alt={source}
        />
      </div>
    ));

    return <div>{ nodes }</div>
  }
}

export default Gallery;
