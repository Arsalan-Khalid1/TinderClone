import { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './Card.css';

const Card = () => {

    const [persons, setPersons] = useState([
        {
            name: "Kylie Jenner",
            url: "https://api.ellecanada.com/app/uploads/2020/04/Kylie-Jenner-Responds-To-Weight-Comments-912x680.jpg"
        },
        {
            name: "Kendall Jenner",
            url: "https://i.insider.com/602845462edd0f001a8d5b7d?width=700"
        },
        {
            name: "Kim Kardashian",
            url: "https://pagesix.com/wp-content/uploads/sites/3/2021/06/kim-kardashian-met-gala-2018.jpg?quality=80&strip=all"
        },
    ]);


    const swiped = (direction, nameToDelete) => {
        console.log("removing " + nameToDelete);
    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen");
    };

    return (
        <div className="tinderCards">
            <div className="cardsContainer">
                {persons.map((person) => (
                    <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={["up", "down"]}
                onSwipe={(dir) => swiped(dir, person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}
                >
                    <div className="card"
                    style={{backgroundImage: `url(${person.url})`}}>
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
                ))}
            </div>
        </div>
    );
};

export default Card;
