import React, { Component } from 'react'

const img_paths = {
    "../assets/img/logo.png": require("../assets/img/logo.png")
}

const title_style = {
    fontWeight: 300
}

const button_style = {
    "fontSize": "11px",
    "width": "40%",
    "padding": "8px 26px 6px",
    "letterSpacing": "1.7px",
    "textTransform": "uppercase",
    "outline": "none",
    "WebkitTransition": "0.15s linear",
    "transition": "0.15s linear",  
    "color": "#fff",
    "backgroundColor": "#50a1ff",
    "borderColor": "#50a1ff",
    "borderRadius": "10rem"
}

const image_style = {
    "width": "90%",
    "heigth": "40%"
}

const left_part = {
    "width": "50%",
    "float": "left",
    "align": "center"
}

const right_part = {
    "width": "50%",
    "float": "right",
    "marginTop": "100px",
    "padding": "10px",
    "align": "center"
}

const block_style = {
    "display": "inline-block",
    "width": "100%",
    "padding": "10px",
    "align": "center"
}
// `'${this.props.project_image}'`
export class ProjectBlock extends Component {
    render() {
        return (
            <div style={block_style}>

                <div style={left_part}>
                    <img style={image_style} src={img_paths[this.props.project_image]}></img>
                </div>

                <div style={right_part}>
                    <h3 style={title_style}>{this.props.project_title}</h3>
                    <p >{this.props.description}</p>
                    <a href={`"${this.props.project_link}"`} style={button_style}> Click Here </a>
                </div>
                <div></div>
            </div>
        )
    }
}

export default ProjectBlock
