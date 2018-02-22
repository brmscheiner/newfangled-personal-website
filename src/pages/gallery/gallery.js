import _ from 'lodash';
import React, { Component } from 'react';

class Gallery extends Component {
  state = {
    imagesLoaded: 0,
  };

  render() {
    const { sources } = this.props;

    const nodes = _.map(sources, (source) => {
      const imageLoading = sources.indexOf(source) === this.state.imagesLoaded;
      const borderClass = imageLoading ? '' : 'bordered';
      const imageClasses = `Gallery-image ${borderClass}`;
      return (
        sources.indexOf(source) <= this.state.imagesLoaded &&
        <div
          key={source}
          className="Gallery-image-container"
        >
          <img
            src={source}
            onLoad={() => { this.setState({ imagesLoaded: this.state.imagesLoaded + 1 }); } }
            className={imageClasses}
            alt={source}
          />
        </div>
      )
    });

    return (
      <div className="Gallery">
        <span className="giant white">{ this.props.title }</span>
        { nodes }
      </div>);
  }
}

export default Gallery;
