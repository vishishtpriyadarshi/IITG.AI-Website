import React, { Component } from 'react';

import PageHeader from './PageHeader';
import PortfolioItem from './PortfolioItem';

class Blogs extends Component{
	render() {
        return(
            <div className="bg-light">
                <PageHeader 
                    title="Machine Learning Research Weekend" 
                    description="IITG.ai presents the very first edition of Machine Learning Research Weekend or MLRW! We organised webinars from industry experts and leading professors starting from the 4th of March 2021. "
                    backgroundImage="blogs/blog2.png"
                />
				
				<div className="portfolio">
                    <div className="container">
						<div className="section" style={{textContent: "center"}}>
							<h2 className="section-title fancy-heading"> Day - 0 </h2>
						</div>
						<div className="portfolio_items">
							<div className="row">
								
								<PortfolioItem 
											header={"13th Feb - 21st Feb 2021"}
											title={"AI Hackathon"}
											link={"https://drive.google.com/file/d/1UZiRLhotwy86sHYmqv9TbqQ5_-f2eqNU/view?fbclid=IwAR2r8G2z1DSve1J_-I3qHaHmmThnfBcWM9lrZFS3qlQgvM_Q61Ms51SYI6M"}
											image={"mlrw/mlrw_hackathon.png"}
											subtitle={null}
											description={"IITG.ai is organizing an AI Hackathon that shall commence on 13th February 2021. The following timeline shall be followed:\n\nProblem statement release: 13th February, 2021 (10:00 AM)\nSubmission Deadline: 21st February, 2021 (11:59 PM)\n\nYou can participate in a team of maximum two members. Cash Prizes shall be given to the top 3 winning submissions!\n(1st-Rs. 2000, 2nd-Rs.1500, 3rd-Rs.1000)\n\nUpdate: The AI Hackathon has been successfully completed. The winners will be shortly announced!"}
											col={"12"}
											key={"1"}
								/>
							</div>
						</div>
						
						<br /> <br />
						<div className="section" style={{textContent: "center"}}>
							<h2 className="section-title fancy-heading"> Day - 1 </h2>
						</div>
						<div className="portfolio_items">
							<div className="row">
								
								<PortfolioItem 
											header={"4th March 2021"}
											title={"Foundations of Machine Learning and recent trends"}
											link={"https://www.youtube.com/watch?v=34MdnDsgQM0&list=PL8s7C11IUdQqL9gXVs3q8i-B6ujxqYQB6"}
											image={"mlrw/Day1_event1.jpg"}
											subtitle={"- Dr. Ashish Tendulkar, Machine Learning architect, Google"}
											description={"Dr. Ashish Tendulkar is an experienced AI/ML professional with specialization in deep learning and natural language processing. He is presently a Machine Learning Architect at Google. Previously, he was the Vice President, Data Science at Reliance Industries Ltd. and also, and Assistant Professor at IIT Madras. He carries 18 years of experience of working in the domain on AI and machine learning.  This includes 11 years of post-PhD experience in multiple domains, including fintech, fashion, online media and advertising, oil and gas, manufacturing, IT systems, healthcare and messaging.  He has acted as trusted machine learning advisor for start ups in diverse areas including fashion, fintech, agritech, healthcare, smart messaging, autonomous IT systems, HR and retail."}
											col={"12"}
											key={"1"}
								/>
							</div>
						</div>
						
						<br /> <br />
						<div className="section" style={{textContent: "center"}}>
							<h2 className="section-title fancy-heading"> Day - 2 </h2>
						</div>
						<div className="portfolio_items">
							<div className="row">
								
								<PortfolioItem 
											header={"5th March 2021"}
											title={"Resource efficient Machine Learning"}
											image={"mlrw/Day2_event1.jpg"}
											link={"https://www.youtube.com/watch?v=kUzan39GWsM&list=PL8s7C11IUdQqL9gXVs3q8i-B6ujxqYQB6&index=3"}
											subtitle={"- Dr. Prateek Jain, Sr. Staff Research Scientist, Google AI"}
											description={"Dr. Prateek Jain leads the Machine Learning Foundations and Optimization team at Google AI, Bangalore, India. His research interests are in machine learning, non-convex optimization, high-dimensional statistics, and optimization algorithms in general. He is also interested in applications of machine learning to privacy, computer vision, text mining and natural language processing."}
											col={"12"}
											key={"1"}
								/>
								<PortfolioItem 
											header={"5th March 2021"}
											title={"Introduction to Graph Neural Networks"}
											link={"https://www.youtube.com/watch?v=bRIk4rhqg-Y&list=PL8s7C11IUdQqL9gXVs3q8i-B6ujxqYQB6&index=4"}
											image={"mlrw/Day2_event2.jpg"}
											subtitle={"- Ameya Daigavane, Pre-doctoral researcher, Google Research"}
											description={"Majoring in Computer Science and Engineering (with a minor in Mathematics) at IIT Guwahati, Ameya Daigavane's research interests include combinatorics, probability theory, statistics, and the theory of machine learning. He was one of 3 undergraduates from all over the world to win the ACM SIGBED Scholars' Award in 2020. As of now, he is a pre-doctorate researcher at google research working on graph mining and representation learning at scale."}
											col={"12"}
											key={"1"}
								/>
							</div>
						</div>
						
						<br /> <br /> 
						<div className="section" style={{textContent: "center"}}>
							<h2 className="section-title fancy-heading"> Day - 3 </h2>
						</div>
						<div className="portfolio_items">
							<div className="row">
								
								<PortfolioItem 
											header={"6th March 2021"}
											title={"Deep Learning in Cancer Treatment"}
											image={"mlrw/Day3_event1.jpg"}
											link={"https://www.youtube.com/watch?v=3CvVJ2fyLS8&list=PL8s7C11IUdQqL9gXVs3q8i-B6ujxqYQB6&index=7"}
											subtitle={"- Dr. Amit Sethi, Faculty, IIT Bombay"}
											description={"Dr. Amit Sethi is an Associate Professor of Electrical Engineering at IIT Bombay, and a Visiting Instructor of Pathology at UIC. His research group works on computer vision, deep learning, and medical image analysis. His current research is focused on extracting valuable information, such as for treatment planning, using deep learning on inexpensive medical modalities, such as whole slide pathology images of cancer tissues stained using hematoxylin and eosin. Technical challenges to solve these real-world problems include working with images that are very large in size but few in number, variable image quality and characteristics between hospitals, and the lack of reliable annotations. Before joining IIT Bombay, he worked as a faculty member of Electronics and Electrical Engineering at IIT Guwahati, and as a management consultant at ZS Associates' Chicago where he worked producing business insights using data analysis. He obtained his PhD in Electrical and Computer Engineering from University of Illinois at Urbana-Champaign with a focus on computer vision and machine learning, and a bachelors in Electrical Engineering from IIT Delhi."}
											col={"12"}
											key={"1"}
								/>
								<PortfolioItem 
											header={"6th March 2021"}
											title={"Memory Capacity of Matrix Representations in Neural Networks"}
											link={"https://www.youtube.com/watch?v=SWyfOqr5mBQ&list=PL8s7C11IUdQqL9gXVs3q8i-B6ujxqYQB6&index=5"}
											image={"mlrw/Day3_event2.jpeg"}
											subtitle={"- Animesh Renanse, IITG.ai, Undergraduate at IIT Guwahati"}
											description={"Animesh Renanse is a pre-final year student in the department of EEE with a minor in mathematics at IIT Guwahati. He is an active member of IITG.ai interested in probability theory. In his second year, he did his internship under Dr. Rohitash Chandra at UNSW where he worked on representation learning. In his work, they introduce matrix neural networks where matrices or higher order tensors are used as representations to process directly within the layers. They then use a probabilistic notion of memory capacity on both vector conventional and matrix recurrent networks for comparison."}
											col={"12"}
											key={"1"}
								/>
							</div>
						</div>
						
						<br /> <br />
						<div className="section" style={{textContent: "center"}}>
							<h2 className="section-title fancy-heading"> Day - 4 </h2>
						</div>
						<div className="portfolio_items">
							<div className="row">
								
								<PortfolioItem 
											header={"7th March 2021"}
											title={"Why Language Understanding is the Hardest Piece of AI Puzzle"}
											image={"mlrw/Day4_event1.jpg"}
											link={"https://www.youtube.com/watch?v=vK00zX5T8GI&list=PL8s7C11IUdQqL9gXVs3q8i-B6ujxqYQB6&index=5"}
											subtitle={"- Dr. Monojit Choudhury, Principal Researcher, Microsoft Research Lab India"}
											description={"Dr. Monojit Choudhury is a Researcher in Microsoft Research Lab India since 2007. His research interests cut across the areas of Linguistics, Cognition and Computation. Currently, he is working on script and code-mixing, especially in social media and web search. Code-mixing or use of more than one languages in a single conversation or utterance is a phenomenon that is observed in all multilingual societies. Due to social media and online forums, code-mixing is now rampant on the Internet. He is interested in developing core NLP techniques for identifying and processing code-mixed text. He also works on various NLP and Information Retrieval techniques for Indian languages. In the past I have worked on computational musicology, language evolution, evolution of the structure of Web search queries and complex networks."}
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