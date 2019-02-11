import React from 'react';

import FacilityBlock from './facilityBlock';

const Facilities = props => {
	return(
		<div className="container">
			<div className="row">
		        <div className="col-12 pl-5 pt-5">
		          <FacilityBlock
		            color="dodgerblue"
		            name="BasketBall Court"
		            content="A cemented Half Basketball court."
		            picture="https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg"	
		          />
		          <FacilityBlock
		            color="salmon"
		            name="Foosball"
		            content="2 fully Functional foosball tables available."	
		          	picture="https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg"
		          />

		          <FacilityBlock
		            color="greenyellow"
		            name="Table Tennis"
		            content="2 table-tennis tables available on the second floor."	
		            picture="https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg"
		          />
		          <FacilityBlock
		            color="springGreen"
		            name="Carrom"
		            content="2 carrom tables available."	
		            picture="https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg"
		          />
		          <FacilityBlock
		           	color="SandyBrown"
		            name="Gymnasium"
		            content="Fully functional Gym with over 13 gym equipments"	
		            picture="https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg"
		          />
		          <FacilityBlock
		            color="MediumOrchid"
		            name="Canteen"
		            content="Rajiv Bhawan Canteen located on the 1st floor of Bhawan, opened from 2 pm to 2 am."	
		            picture="https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg"
		          />
		          <FacilityBlock
		            color="greenyellow"
		            name="Night Cafe"
		            content="A newly open night life cafe in th rajiv bhawan entrance, opened from 2 am to 2 pm."
		            picture="https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg"
		          />
		          <FacilityBlock
		            color="dodgerblue"
		            name="Washing Machine"
		            content="Over 8 wahing machines located a the 3rd floor of the bhawan building to wash and rinse clothes of the bhawan inmates from 5:30 pm to 11 pm."	
		            picture="https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg"
		          />
		          <FacilityBlock
		            color="springGreen"
		            name="Conference Room"
		            content="A Conference Room near the Washing machine room for group discussions and board meetings."	
		            picture="https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg"
		          />
		          <FacilityBlock
		            color="salmon"
		            name="TV Room"
		            content="Tv Room is located on the first floor and has seats for 50-60 people to watch movies,sports or news and enjoy."	
		            picture="https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg"
		          />
		        </div>
		    </div>
		</div>
		
	)

}
export default Facilities;