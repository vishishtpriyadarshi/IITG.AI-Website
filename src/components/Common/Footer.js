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

		// return (
		// <div>
		// 	 <footer class="footer py-4">
		// 		<div class="container">
		// 			<div class="row align-items-center">
		// 				<div class="col-lg-4 text-lg-left section-heading"><b>Copyright © IITG.ai 2020</b></div>
		// 				<div class="col-lg-4 my-3 my-lg-0">
		// 					<a class="btn btn-dark btn-social mx-2 rounded-circle" href="#!"><i class="fab fa-github"></i></a>
		// 					<a class="btn btn-dark btn-social mx-2 rounded-circle" href="#!"><i class="fab fa-facebook-f"></i></a>
		// 					<a class="btn btn-dark btn-social mx-2 rounded-circle" href="#!"><i class="fab fa-linkedin-in"></i></a>
		// 				</div>
		// 				<div class="col-lg-4 text-lg-right"><a class="mr-3" href="#!">Privacy Policy</a><a href="#!">Terms of Use</a></div>
		// 			</div>
		// 		</div>
		// 	</footer>
		// </div>
     
		// );
	  
	  return (
		<div>
			<footer  style={{backgroundColor : "#2c292f"}}>
				<div class="container">
					<div class="row ">
						<div class="col-md-4 text-center text-md-left ">

							<div class="py-0">
								<h3 class="my-4 text-white">About<span class="mx-2 font-italic text-warning ">IITG.ai</span></h3>

								<p class="footer-links font-weight-bold">
									<a class="text-white" href="#">Home</a>
									|
									<a class="text-white" href="#">Blog</a>
									|
									<a class="text-white" href="#">About</a>
									|
									<a class="text-white" href="#">Contact</a>
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
							<p class="text-warning my-2" >Study Group at IIT Guwahati focused on learning Artificial Intelligence</p>
							<div class="py-2">
								<a href="#"><i class="fab fa-facebook fa-2x text-primary mx-3"></i></a>
								<a href="#"><i class="fab fa-google-plus fa-2x text-danger mx-3"></i></a>
								<a href="#"><i class="fab fa-twitter fa-2x text-info mx-3"></i></a>
								<a href="#"><i class="fab fa-youtube fa-2x text-danger mx-3"></i></a>
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