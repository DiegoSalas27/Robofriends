import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => { //pure function recieves something and returns something
  return(
    <div>
      {
        robots.map((user, i) =>{ //when making a loop we need to give each object a unique key
          return(
           <Card
            key={robots[i].id}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}/>
          );
        })
      }
    </div>
  );
}

export default CardList;