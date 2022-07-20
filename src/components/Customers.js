import React from 'react';


const customers=[{

}]
function Customer (props){
    return(
<div>
    <p>{props.id}</p>
    <h2>{props.name}</h2>
    <p>{props.birthday}</p>
    <p>{props.gender}</p>
    <p>{props.gob}</p>
</div>
    )
}

export default Customer