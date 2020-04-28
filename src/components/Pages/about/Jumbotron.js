import React, { Component } from 'react';

export default class Jumbotron extends Component {
    render() {
        const backgroundImage = require(`../../assets/img/${this.props.backgroundImage}`);
        return(
            <div className="home_small">
                <div className="home_background_container">
                    <div className="home_background"></div>
                </div>
                <div className="container">
                    <div className="home_small_content col-lg-6">
                        <h1>{this.props.title}</h1>
                        <hr />
                        <p>{this.props.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}