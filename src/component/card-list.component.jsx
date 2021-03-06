import React from 'react';
import  {Card} from './Card/card.component.jsx';
import './card-list.styles.css';
export const CardList = (propr) =>{
     return( <div className = 'CardStyle'>
          {console.log(propr)}
          { propr.property.map(monster =>(<Card key={monster.id} card_prp={monster}/>))}
</div>
) 
};