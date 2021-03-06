import React from 'react';
import './card.style.css';
export const Card = (props) =>{
    return (<div className='card-container'>
        <img src={`https://robohash.org/${props.card_prp.id}?size=180x180`} alt="monsters"/>
        <h2>{props.card_prp.name}</h2>
        <h4>{props.card_prp.email}</h4>
        </div>);
}
    
