import React, {Component} from 'react';
import { Link, NavLink } from "react-router-dom";

const bgstyle = {
	"background": "radial-gradient(ellipse at center, rgba(76,76,76,1) 0%, rgba(89,89,89,1) 12%, rgba(102,102,102,1) 25%, rgba(71,71,71,1) 39%, rgba(44,44,44,1) 43%, rgba(0,0,0,1) 51%, rgba(17,17,17,1) 60%, rgba(43,43,43,1) 76%, rgba(28,28,28,1) 91%, rgba(19,19,19,1) 100%)",
	"filter": "progid:DXImageTransform.Microsoft.gradient( startColorstr='#4c4c4c', endColorstr='#343a40', GradientType=1 )",
	"height": "93.5%",
	"width": "100%",
	"position": "absolute"
}

const bgstyle2 = {
	"background-image": "linear-gradient(to right top, #316c6e, #1f5c67, #114d5e, #0a3d53, #0a2e47, #062b43, #03283f, #00253b, #002c3e, #00323e, #00383d, #083e3b)", "background-size": "cover", "width": '100%',
  "height": '800px',
}

class Header extends Component{
	render(){
		return(
			<div className="masthead" style={bgstyle2} >
				<div className="container">
					<div className="intro-text" style={{alignContent: "center", textAlign:"center" }}>
						<img style={{marginTop: "12%", marginBottom: "2%"}} src={this.props.image}></img>
						<div 
							className="intro-lead-in"
							style={{
								fontFamily: "Muli",
								fontWeight: "400",
								fontSize: "1.8em",
								color: "white"
							}}	
						>
							{this.props.title}
						</div>
						<div className="intro-heading text-uppercase">{this.props.subtitle}</div>
					</div>
				</div>
			</div>
			
		)
	}
}

export default Header