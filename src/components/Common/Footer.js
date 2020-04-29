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
			 <footer class="footer py-4">
				<div class="container">
					<div class="row align-items-center">
						<div class="col-lg-4 text-lg-left section-heading"><b>Copyright © IITG.ai 2020</b></div>
						<div class="col-lg-4 my-3 my-lg-0">
							<a class="btn btn-dark btn-social mx-2 rounded-circle" href="#!"><i class="fab fa-github"></i></a>
							<a class="btn btn-dark btn-social mx-2 rounded-circle" href="#!"><i class="fab fa-facebook-f"></i></a>
							<a class="btn btn-dark btn-social mx-2 rounded-circle" href="#!"><i class="fab fa-linkedin-in"></i></a>
						</div>
						<div class="col-lg-4 text-lg-right"><a class="mr-3" href="#!">Privacy Policy</a><a href="#!">Terms of Use</a></div>
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