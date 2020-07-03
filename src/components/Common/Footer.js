import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import FooterMenuList from "./FooterNavList";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import StarBorder from "@material-ui/icons/StarBorder";

const NavItems = [
  {
    icon: <StarBorder />,
    name: "Starred"
  },
  {
    icon: <SendIcon />,
    name: "Mail"
  },
  {
    icon: <DraftsIcon />,
    name: "Drafts"
  }
];

const styles = theme => ({
  flex: {
    flexGrow: 1
  },
  footer: {
    padding: 5,
    position: "absolute",
    textAlign: "center",
    left: 0,
    bottom: 0,
    right: 0,
	left:0,
	bottom:0,
	right:0,

    backgroundColor: "#1E88E5"
  }
});

class Footer extends React.Component {
  render() {
    const { classes } = this.props;
	return (
		<div>
			<footer  style={{backgroundColor : "#2c292f"}}>
				<div class="container">
					<div class="row ">
						<div class="col-md-4 text-center text-md-left ">

							<div class="py-0">
								<h3 class="my-4 text-white">About<span class="mx-2 font-italic text-warning ">IITG.ai</span></h3>

								<p class="footer-links font-weight-bold">
									<a class="text-white" href="/">Home</a>
									|
									<a class="text-white" href="/team">Team</a>
									|
									<a class="text-white" href="/about">About Us</a>
									|
									<a class="text-white" href="/contact">Contact</a>
								</p>
								<p class="text-light py-4 mb-4">&copy;2020 IITG.ai</p>
							</div>
						</div>

						<div class="col-md-4 text-white text-center text-md-left ">
							<div class="py-2 my-4">
								<div>
									<p class="text-white"> <i class="fa fa-map-marker mx-2 "></i>
											IIT Guwahati,
										  Guwahati, Assam, India</p>
								</div>

								<div> 
									<p><i class="fa fa-phone  mx-2 "></i> Phone No</p>
								</div>
								<div>
									<p><i class="fa fa-envelope  mx-2"></i><a href="mailto:support@eduonix.com">iitg.ai gmail</a></p>
								</div>  
							</div>  
						</div>

						<div class="col-md-4 text-white my-4 text-center text-md-left ">
							<span class=" font-weight-bold ">About us</span>
							<p class="text-warning my-2" >Study Group at IIT Guwahati focused on learning Machine Learning and Deep Learning</p>
							<div class="py-2">
								<a href="https://www.facebook.com/iitgai/"><i class="fab fa-facebook fa-2x text-info mx-3"></i></a>
								<a href="https://medium.com/iitg-ai"><i class="fab fa-medium fa-2x text-danger mx-3"></i></a>
								<a href="https://linkedin.com/company/iitg-ai"><i class="fab fa-linkedin fa-2x text-info mx-3"></i></a>
								<a href="https://github.com/IITGuwahati-AI"><i class="fab fa-github fa-2x text-danger mx-3"></i></a>
								<a href="https://twitter.com/iitgai"><i class="fab fa-twitter fa-2x text-info mx-3"></i></a>
							</div>
						</div>
					</div>  
				</div>
			 </footer>  
		  
		  
		</div>
	  	
	  
	  );
  }
}
Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);