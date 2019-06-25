import React from 'react';
import Chef from './Chef'

const ChefCard = (props) => {
    return ( 
        <div>
             {props.data.map(data => {
                    return (
                        <Chef key={data.id} chefData={data} />
                    )
                })}
        </div>
     );
}
 
export default ChefCard;