import React from 'react';
import Chef from './Chef'

const ChefCard = (props) => {
    console.log("first props", props)
    return ( 
        <div>
             {props.data.map(data => {
                    return (
                        <Chef key={data.id} data={data} deleteRecipe={props.deleteRecipe} editRecipe={props.editRecipe}/>
                    )
                })}
        </div>
     );
}
 
export default ChefCard;