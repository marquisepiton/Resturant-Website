import React from 'react';

function Item(props) {
    return(
        <div>
        <h3>{props.item.name}</h3>
        <p>{props.item.description}</p>
        </div>
    );
}
export default Item; 