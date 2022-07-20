import React from 'react';

function Customer (props){
    return(
        <div className='content'>
            <p>{props.id}</p>
            <p>{props.name}</p>
            <p>{props.birthday}</p>
            <p>{props.gender}</p>
            <p>{props.gob}</p>
            
        </div>


    )
}

export default Customer