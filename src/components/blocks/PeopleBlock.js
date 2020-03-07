import React, { Component } from 'react'

const img_format = {
    "borderRadius": "50%",
    "height": "142px",
    "width": "142px"
}

const text_format = {
    "margin": "2px 0px",
    "fontFamily": "'Muli', 'Helvetica', 'Arial', 'sans-serif'",
    "fontWeight": "100",
    "fontSize": "1.1em",
    "textAlign": "center",
    "width": "100%"
}

const div_style = {
    "margin": "auto",
    "textAlign": "center"
}

export class PeopleBlock extends Component {
    render() {
        return (
            <div style={div_style}>
                <div style={div_style}>
                    <img style={img_format} src={this.props.img_src}></img>
                </div>
                <h4 style={text_format}>{this.props.name}</h4>
            </div>
        )
    }
}

export default PeopleBlock
