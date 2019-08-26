import React, { Component } from "react";

interface GalleryProps {
    sources: string[];
    title?: string;
}

class Gallery extends Component<GalleryProps> {
    state = {
        imagesLoaded: 0
    };

    render() {
        const { sources, title } = this.props;

        const nodes = sources.map(source => {
            const imageLoading = sources.indexOf(source) === this.state.imagesLoaded;
            const borderClass = imageLoading ? "" : "bordered";
            const imageClasses = `Gallery-image ${borderClass}`;
            return (
                sources.indexOf(source) <= this.state.imagesLoaded && (
                    <div key={source} className="Gallery-image-container">
                        <img
                            src={source}
                            onLoad={() => {
                                this.setState({ imagesLoaded: this.state.imagesLoaded + 1 });
                            }}
                            className={imageClasses}
                            alt={source}
                        />
                    </div>
                )
            );
        });

        return (
            <div className="Gallery">
                <span className="white Gallery-title">{title}</span>
                {nodes}
            </div>
        );
    }
}

export default Gallery;
