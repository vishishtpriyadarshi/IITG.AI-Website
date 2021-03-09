import React, { Component } from 'react';

import PageHeader from './PageHeader';
import PortfolioItem from './PortfolioItem';

class Blogs extends Component{
	render() {
        return(
            <div className="bg-light">
                <PageHeader 
                    title="Blogs" 
                    description="All the blogs below are published on medium and can be found on the iitg.ai publication."
                    backgroundImage="blogs/blog2.png"
                />
				
				<div className="portfolio">
                    <div className="container">
						<div className="section" style={{textContent: "center"}}>
							<h2 className="section-title fancy-heading"> Articles written by us </h2>
						</div>
						<div className="portfolio_items">
							<div className="row">
								
								<PortfolioItem 
											header={"June 2019 - Stats Series"}
											title={"Stats Series #1 — Elastic Net"}
											image={"blogs/mcmc.png"}
											link={"https://medium.com/@konark145/stats-series-1-elastic-net-655786810be7"}
											subtitle={"- Konark Jain"}
											description={"Elastic Net — Zou et al. is a widely revered paper in the field of Machine Learning and has been cited over 9000 times. The title of the paper, Regularization and variable selection via the elastic net, is self-explanatory and I will elaborate about what’s elastic in this regularization technique."}
											col={"12"}
											key={"1"}
								/>
								<PortfolioItem 
											header={"Sept 2019 - Optimisation"}
											title={"Into the Depths of Gradient Descent"}
											image={"blogs/gradient_descent.png"}
											link={"https://medium.com/iitg-ai/into-the-depths-of-gradient-descent-52cf9ee92d36"}
											subtitle={"- Vishisht Priyadarshi & Animesh Tiwari"}
											description={"Gradient descent is one of the most popular algorithms to perform optimisation and by far the most common way to optimize neural networks. It is often used as ‘Black-Box Optimisers’ but a good insight of various variations and mathematics behind them often comes handy. Gradient Descent can very well help in optimising non-convex functions."}
											col={"12"}
											key={"1"}
								/>
								<PortfolioItem 
											header={"Oct 2019 - Generative Models"}
											title={"Variational Autoencoders"}
											image={"blogs/autoencoder.png"}
											link={"https://medium.com/iitg-ai/variational-autoencoders-c780c4acaf4f"}
											subtitle={"- Aditya Mehndiratta"}
											description={"This is the first article in the series of ‘Generative Models’ that try to decode the technology that makes machines do the things that were considered exclusive human endeavours like drawing, painting, writing, music etc. Can we teach machines these abilities? So lets begin…Perhaps the most basic and fundamental of of all generative networks is the variational autoencoder. But before we begin we must first understand what an autoencoder really is?"}
											col={"12"}
											key={"1"}
								/>
								<PortfolioItem 
											header={"Nov 2019 - Keras"}
											title={"How to use Callbacks in Keras to Visualize, Monitor and Improve your Deep Learning Model"}
											image={"blogs/tensorboard.png"}
											link={"https://medium.com/iitg-ai/how-to-use-callbacks-in-keras-to-visualize-monitor-and-improve-your-deep-learning-model-c9ca37901b28"}
											subtitle={"- Yashwanth M"}
											description={"Often, when training a very deep neural network, we want to stop training once the training accuracy reaches a certain desired threshold. Thus, we can achieve what we want (optimal model weights) and avoid wastage of resources (time and computation power). In this brief tutorial, let’s learn how to achieve this in Tensorflow and Keras."}
											col={"12"}
											key={"1"}
								/>
								
								<PortfolioItem 
											header={"Nov 2019 - Stats Series"}
											title={"Stats Series #2 — MCMC"}
											image={"blogs/mcmc.png"}
											link={"https://medium.com/iitg-ai/stats-series-2-mcmc-50913f8bf6b3"}
											subtitle={"- Konark Jain"}
											description={"What is sampling? Sampling is the act of “picking out the n number of balls from an urn”. More mathematically, it’s the process of taking an observation out of a general population with a well-defined probability distribution over the observations."}
											col={"12"}
											key={"1"}
								/>
							
							<PortfolioItem 
											header={"Dec 2020 - AI Roadmap"}
											title={"AI Roadmap for my 1-year Younger Self"}
											image={"blogs/ai_roadmap.jpeg"}
											link={"https://medium.com/iitg-ai/ai-roadmap-for-my-1-year-younger-self-c3d7a8eed6de"}
											subtitle={"- Aayush Sharma"}
											description={"In this article, I will design a roadmap for the 1 year younger myself who knew nothing about ML or Data Science. He was looking for a thing which he would be interested in. If this roadmap was available to me at that time, I hope it would have made my past 1-year learning journey somewhat smooth and efficient."}
											col={"12"}
											key={"1"}
								/>
							</div>
						</div>
								
					</div>
				</div>
			</div>
                
        );
    }
}


export default Blogs;