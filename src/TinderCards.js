import React,{useState,useEffect} from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'
import database from './firebase'

function TinderCards() {
    const [people, setPeople] = useState([])

    // If you are using class based componet, useEffect replaces the all of the lifecycle method in the class component

    useEffect(()=>{
        database.collection('people').onSnapshot(snapshot=>(
           setPeople(snapshot.docs.map(doc => doc.data()))
        ))
    })
    return (
        <div>
                <div className="tinderCards__cardContainer">
                {people.map((person)=>(
                <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={['up','down']}
                >
                    <div style={{backgroundImage: `url(${person.url})`}}
                    className="card">
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
                </div>

        </div>
    )
}

export default TinderCards
