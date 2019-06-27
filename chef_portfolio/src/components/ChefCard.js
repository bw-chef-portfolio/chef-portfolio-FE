import React from 'react';
import Chef from './Chef'

const ChefCard = (props) => {
    console.log("chef data props", props.data)
    
    if (!props.data) {
        return <h1>Loading</h1>
    } else {
    return ( 
        <div className="chef-page">
             {props.data.map(data => {
                    return (
                        <Chef key={data.id} data={data} />
                    )
                })}
        </div>
     );
}
}
 
export default ChefCard;