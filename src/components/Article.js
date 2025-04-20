import React from "react";

function Article({title,date="January 1, 1970",preview,minutes}){
    const calculateReadTime = (minutes) => {
        let emojis = '';
        
        if (minutes < 30) {
          
          const roundedMinutes = Math.ceil(minutes / 5) * 5;
          const cups = Math.floor(roundedMinutes / 5);
          emojis = '☕️'.repeat(cups);
        } else {
        
          const roundedMinutes = Math.ceil(minutes / 10) * 10;
          const boxes = Math.floor(roundedMinutes / 10);
          emojis = '🍱'.repeat(boxes);
        }
        
        return `${emojis} ${minutes} min read`;
      };
    return(
       <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
        <p>{calculateReadTime(minutes)}</p>
       </article> 
    )
}

export default Article;