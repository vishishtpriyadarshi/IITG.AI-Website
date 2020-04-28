import React, { Component } from 'react';

export default class ExecBox extends Component {
    constructor(props) {
        super(props);
        this.renderDescription = this.renderDescription.bind(this);
        this.state = {
            hovered: true
        }
    }

    renderDescription() {
        return this.state.hovered ? <p> {this.props.description} </p> : ""
    }

    render() {
        return (
            <div
                className="col-lg-4 image_box_col  mb-4">
                <div className="industry-card trans_300">
                    <img className="card-img-top"/>
                    <div className="industry-card-body">
                        <h3 className="team-member-name">{this.props.name}</h3>
                        <h3 className="team-member-title">{this.props.title}</h3>
                        {this.renderDescription()}
                    </div>
                </div>
            </div>
        );
    }
}
