import React, { Component } from 'react';

export default class PortfolioItem extends Component {
    PortfolioItem() {
        this.cardImage = this.cardImage.bind(this);
        this.subtitle = this.subtitle.bind(this);
    }

    cardImage() {
        if (this.props.image) {
            return (
                <div className="card_image">
                    <img className="card-img-top" src={require(`../assets/img/${this.props.image}`)} alt=""/>
                </div>
            )
        }
    }

    subtitle() {
        if (this.props.subtitle) {
            return (
                <div className="card-subtitle">{this.props.subtitle}</div>
            )
        }
    }

    render() {
        const link = this.props.link; // null if no link, preserves link-less <a> tag
        return (
            <div className={`col-md-${this.props.col} mb-4`}>
                <a href={link} className="card branding">
                    {this.cardImage()}
                    <div className="card-body">
                        <div className="card-header">{this.props.header}</div>
                        <div className="card-title">{this.props.title}</div>
                        {this.subtitle()}
                        <div className="card-text">
                            {this.props.description}
                        </div>
                    </div>
                </a>
            </div>
        );
    }
}