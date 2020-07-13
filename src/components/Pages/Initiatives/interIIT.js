import React, { Component } from 'react';

import PageHeader from '../PageHeader';

export default class About extends Component {
    render() {
        return(
            <div className="bg-light">
                <PageHeader 
                    title="Inter IIT Events" 
                    description="3 representatives (Eshwar, Dibyakanti and Shrey) from IITG.ai society took part in the Bitgrit data science competition and stood 2nd overall! "
                    backgroundImage="initiatives/interIIT2.jpg"
                />

				<br />
				{/*<div className="section">
                    <h2 className="section-title fancy-heading"> This page is under Maintenance </h2>
                </div>*/}
				
				<div className="section">
					<h2 className="section-title fancy-heading"> Inter IIT Tech Meet 8.0 (December 2019) </h2>
						<div className = "container" style={{margin : "auto", fontSize: "250px !important"}}>
							The data science competition was organized by Bitgrit Inc along with IIT Roorkee. Bitgrit is a relatively new up and coming online platform that hosts various data science competitions, like Kaggle.<br/>
The event had three rounds. The first two rounds took place in teams' respective campuses, and for the third and final round, we went to Roorkee. Initially, all of us were reluctant to stay back in campus, as it's been 6 months since we've seen our family and there was a general lack of motivation. But within no time, we started working together and were determined, with our eyes on the prize. Work together with the team was so challenging and fun, that the fact that we were not in our homes with our families did not matter anymore. 
<br /><br />
<h2>Round 1:</h2>The first round of the prestigious Inter IIT competition began. Typically in data science, the more the data, the better. But we didn't expect that we'd be given 10GB of only tabular data. The data was numerical market parameters and news data converted into numerical embeddings, and the target variable was the USD-JPY exchange rate at the end of the month. The data was so much that it took us two days to understand different parts of it. <br/>
Our team started working on the couch of the most luxurious room of the SAC building: Robotics club! <br/>
We used to wake up late, meet around 1 o' clock, and after 4-5 hours of coming up with different solutions and many submissions, we used to chat our way to the Khokha market, have 2-3 back to back cups of tea with samosa or kachori we head back to our rooms. <br/>
Four/five days into round one, desperate to improve our position, we had our 'Eureka' idea,  due to which our rank rocketed from 17 to rank 3! What we did was to drop almost half of the data for training our model after some analysis, and it worked wonders and put an end to our desperation. <br/>                         
 Jumping from our seats, shouting, and high fiving each other, other module teams were left looking at us in bewilderment.  Of course, this called for a celebration, and we headed to Khokha to enjoy the moment. <br/>
On a more technical note, a few critical things that we took away from the first round were : <br/>
more features do not always mean better prediction. If there is less data, then outliers can make a considerable difference. While imputing missing values try more straightforward methods like average as sometimes they work better than knn and other non-trivial methods.
Round one ended with IITG in the third position.<br/><br/>
<h2>ROUND 2:</h2>
      <i><q>The goal is to turn data into information, and information into insight.</q> – Carly Fiorina<br/></i>
Round two was not a conventional data science round, rater it was an EDA(Exploratory Data Analysis) round. We were given data about employee attrition of an Indian sales firm. This round was a relatively slower one, compared to the first one, which included the excitement and rush while submitting the model. As a result, the initial days of the round were not productive due to procrastination. But then, we told ourselves that we would not let our efforts go to waste. On the day of submission, we met at the new sac at noon. We then worked for 12 hours straight, and phew, our case-study was ready. We were just on time, submitting only 5 minutes before the deadline. After that exhaustive work spree, we then had dosa- and boy does it taste better when you're happily tired!<br/><br/>
<h2>ROUND 3:</h2>
 This was during the time of the unfortunate CAA incidents. We were to land in Delhi and take a bus from there to Roorkee. Most of the IITG contingent had already reached Roorkee. Our team traveled separately. At the Delhi airport, misinformation about the situation of the area panicked us. We booked an overnight cab, and after 5 hours of travel and 10 km of thick, blinding fog, finally reached IIT Roorkee in the biting cold of the Uttarakhand winter, which appeared enthralling in the misty fog. Our contingent was accommodated in one of the student hostels. We were so excited about reaching the campus, that we spent around 2 hours touring it at night.
The next morning, the results of the second round were to be announced, and our team was convinced that we wouldn't be anywhere near the top 5. But to our surprise, our team stood second in the round two rankings, and we were thrilled by the unexpected good news! We were lauded in the meeting and were told that they very much liked the rigorous statistical analysis of our solution.
Our overall rank was three after the second round.<br/>
The next evening top 3 teams were invited to dinner with Bitgrit folks at a nearby restaurant. Our team was thrilled(well, who doesn't like special treatment and good food).<br/>
We began round three with jubilant enthusiasm after performing well in the first two rounds. But round three was finally scraped due to some issues with the problem statement.<br/>
Our fantastic and team-spirited seniors went out of their way to help us out with any problem we had and made sure that everything was done right. <br/>
We finished on the third position bagging the silver medal!<br/>
The inter-IIT was a highlight of our rather boring third semester and definitely a highlight on our CV.
At the risk of sounding phooey, we will say that working in a team and the contingent meetings and different module people trying to solve each others' problems reinforced the values of teamwork in us. When you do something productive that too with your friends, it makes one hell of an adventure!<br/><br/>
Whenever you find a learning and at the same time fun opportunity, go aboard!
<br /> <br />
<i><b> - Team Intelliqo</b> ( Shrey, Eshwar and Dibyakanti )</i>
					</div>
				</div>
				
				
				
				
				<br /> 
				
			</div>     
        );
    }
}





