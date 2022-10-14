import { SwipeableDrawer } from '@material-ui/core';
import React, { Component } from 'react';
import { useState } from 'react';
import TinderCard from 'react-tinder-card'
import './TinderCard.css'

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name : "Elon mask",
            url : "https://upload.wikimedia.org/wikipedia/commons/e/ec/Elon_Musk_%283017880307%29.jpg"
        },
        {
            name : "Mak Jukerberg",
            url : "https://upload.wikimedia.org/wikipedia/commons/e/ef/MarkZuckerberg.jpg"
        }
    ]
    );

    const swiped = (directtion, nameToDeleted) => {
        console.log("Removing :" + nameToDeleted)
    };

    const outOfFrame = (name) => {
        console.log(name, + "Left the sceen")
    }


    return (
        <div className='TinderCards'>
        <div className='TinderCard_Container'>
            {people.map((person) => (
            <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe ={["up", "down"]}
            onSwipe = {(dir) => swiped(dir, person.name)}
            onCardLeftScreen = {() => outOfFrame(person.name)}
            >
                <div style={{backgroundImage : "url(" + person
                .url + ")"}} className="card">
                
                <h3>{person.name}</h3>
                </div>
            </TinderCard>
        ))} 
        </div>
     </div>
    );
}

export default TinderCards;