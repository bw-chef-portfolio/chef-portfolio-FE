import React from 'react';

const Chef = (props) => {
    console.log(props)
    return ( 
        <div>
            <p>{props.data.recipe_title}</p>
            {/* <img src={props.data.item_photo} alt="pictures"></img> */}
            <p>{props.data.chef_location}</p>
        </div>
     );
}
 
export default Chef;