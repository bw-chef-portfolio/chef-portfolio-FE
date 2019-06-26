import React from 'react';

const Chef = (props) => {
    // console.log("props",props)
    return ( 
        <div>
            <p>Chef Name: </p>
            <p>{props.data.couple_name}</p>
            <p>Recipe Name: </p>
            <p>{props.data.recipe_title}</p>
            <img src={props.data.item_photo} alt="pictures"></img>
            <p>Chef Location: </p>
            <p>{props.data.chef_location}</p>
            <button onClick={props.deleteRecipe}>Delete</button>
        </div>
     );
}
 
export default Chef;