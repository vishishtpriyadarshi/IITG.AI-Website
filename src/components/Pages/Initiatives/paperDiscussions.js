import React, { Component } from 'react';
import PageHeader from '../PageHeader';
import PortfolioItem from '../PortfolioItem';

export default class About extends Component {
    render() {
        return(
            <div className="bg-light">
                <PageHeader 
                    title="Paper Discussions" 
                    description="IITG.ai conducts weekly discussion sessions on research papers in various areas of ML"
                    backgroundImage="initiatives/paperDiscussion.jpg"
                />
				
                <br />
                <div className="section">
					{/*<h2 className="section-title fancy-heading"> Under Maintenance </h2>*/}
					<div className="portfolio">
						<div className="container">
							<div className="section" style={{textContent: "center"}}>
								<h2 className="section-title fancy-heading"> Papers Discussed by us </h2>
							</div>
							<div className="portfolio_items">
								<div className="row">

									<PortfolioItem 
												header={"Date"}
												title={"Deep contextualized word representations"}
												image={null}
												link={"https://github.com/IITGuwahati-AI/Paper-discussions/blob/master/Summaries/Deep%20contextualized%20word%20representations.md"}
												subtitle={"Matthew E. Peters, Mark Neumann, Mohit Iyyer, Matt Gardner, Christopher Clark, Kenton Lee, Luke Zettlemoyer"}
												description={"ELMo is one of the first few papers that established the power of transfer learning in NLP. It was a huge deal when it was introduced, creating a new state of the art in almost all NLP tasks. As compared to traditional word embeddings such as word2vec and Glove, ELMo embeddings model context pretty well giving different embeddings to a word based on the sense it is used in a sentence."}
												col={"12"}
												key={"1"}
									/>
								</div>
							</div>
						</div>
					</div>
                </div>
				<br />
			</div>
                
        );
    }
}





