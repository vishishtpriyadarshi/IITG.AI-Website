import React, { Component } from 'react'
import Typical from 'react-typical'
import Typing from 'react-typing-animation';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import ReactPlaceholder from 'react-placeholder';
import Box from '@material-ui/core/Box';

const useStyles = theme => ({
  	root: {
		display: 'flex',
		flexWrap: 'wrap',
		'& > *': {
		  margin: theme.spacing(1),
		  width: theme.spacing(16),
		  height: theme.spacing(16),
    	},
	shadow:{
    	boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.3)',
		}
  	},
});

class Example extends React.Component {
  render () {
	const { classes } = this.props;
    return (
		<div /*className={classes.root}*/>
		 <section class="page-section" id="services">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">ABOUT US</h2>
                    <h3 class="section-subheading text-muted">These are some of the excerpts shared by the members of the club when asked about their motivation to work in AI and their experience over the past year.</h3>
                </div>
				
                <div class="row text-center">
                    <div class="col-md-4">
    					<Box width={'100%'} borderRadius={12} height={200} style={{boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.3)'}} >
							<p class="section-heading">
								 <Typing>
									<div>
										<p class="text-muted">
											 <ul>
												<li>
													I joined the club to get mentorship and work with similar-minded people
												</li>
												<li>
													<Typing.Delay ms={5000} />
													I want to work in AI to build something that can bring a meaningful change in the world.	
												</li>
											</ul>
										</p>
									</div>
								</Typing>	
							</p>
						</Box>
                    </div>
					
                    <div class="col-md-4">
						<Box width={'100%'} borderRadius={12} height={200} style={{boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.3)'}} >
							<p class="section-heading">
								 <Typing>
									<div>
										<p class="text-muted">
											<ul>
												<li>
													We really enjoy discussing new ideas and papers together.
												</li>
												<li>
													<Typing.Delay ms={5000} />
													I like that we are respecting the research process and taking our time to deeply understand how things actually work
												</li>
											</ul>
										</p>
									 </div>
								</Typing>
							</p>
						</Box>
                    </div>
                    <div class="col-md-4">
						<Box width={'100%'} borderRadius={12} height={200} style={{boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.3)'}} >
							<p>
								<Typing>
									<div>
										<p class="text-muted">
											<ul>
												<li >
												I want to solve intelligence by understanding how the brain works and drawing inspiration from other related fields like neuroscience.
												</li>
												<li>
													<Typing.Delay ms={5000} />
													I believe that a combination of AI and human knowledge is better than both of them individually.	
												</li>
											</ul>
										</p>
									</div>
								  </Typing>	
							</p>
						</Box>
                    </div>
                </div>
            </div>
        </section>
		<section style={{width: "100%",height: "400px",backgroundImage: "url(" +"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFENMnTsq_giaGKGvnWxs5-vlJtc1j0mY_34inqZr-E-gsw0r2&usqp=CAU"  + ")", backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>
			
			
			hdgcgagyffffffffffffffffff
			
      	</section>
    </div>	
    )
  }
}

export default withStyles(useStyles)(Example);