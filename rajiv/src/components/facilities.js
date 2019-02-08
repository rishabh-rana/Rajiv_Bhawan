import React from 'react';

import FacilityBlock from './facilityBlock';

const Facilities = props => {
	return(
		<div className="container">
			<div className="row">
		        <div className="col-12 pl-5 pt-5">
		          <FacilityBlock
		            color="dodgerblue"
		            name="Foosball"
		            content="2 fully Functional foosball table available."
		            picture="https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg"	
		          />
		          <FacilityBlock
		            color="salmon"
		            name="Foosball"
		            content="2 fully Functional foosball table available."	
		          	picture="https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg"
		          />

		          <FacilityBlock
		            color="greenyellow"
		            name="Foosball"
		            content="2 fully Functional foosball table available."	
		            picture="https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg"
		          />
		          <FacilityBlock
		            color="springGreen"
		            name="Foosball"
		            content="2 fully Functional foosball table available."	
		            picture="https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg"
		          />
		          <FacilityBlock
		           	color="SandyBrown"
		            name="Foosball"
		            content="2 fully Functional foosball table available."	
		            picture="https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg"
		          />
		          <FacilityBlock
		            color="MediumOrchid"
		            name="Foosball"
		            content="2 fully Functional foosball table available."	
		            picture="https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg"
		          />
		          <FacilityBlock
		            color="greenyellow"
		            name="Foosball"
		            content="2 fully Functional foosball table available."	
		            picture="https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg"
		          />
		        </div>
		    </div>
		</div>
	)

}
export default Facilities;