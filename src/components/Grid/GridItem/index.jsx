import React, { Component } from 'react';

class GridItem extends Component {
    render() {
        return (
            <div className="js-item">
                <div className={'grid-item item-' + (this.props.id + 1)} style={this.props.item.style}>
                    <img src="./assets/img/project_images_abstr/img_250x190_2.jpg" alt=""/>
                </div>
                <div className="overlay" style={this.props.item.style}>&nbsp;</div>
                <div className="item-info">
                    <p className="item-text">{ this.props.item.name }</p>
                    <p className="item-author">{ this.props.item.author }</p>
                </div>
            </div>
        );
    }
}

export default GridItem;
