import React, { useState, useRef } from 'react'
import TinderCard from 'react-tinder-card'
import './App.css';
import { Link, useNavigate } from 'react-router-dom';

import { db } from './data.js'

function getCards(db) {
    // Find the card with art: undefined
    const startCard = db.find(card => card.art === undefined);
    // Filter out the start card from the rest of the cards
    const otherCards = db.filter(card => card.art !== undefined);

    // Group cards by name
    const groupedCards = otherCards.reduce((acc, card) => {
        const name = card.name.trim();
        if (!acc[name]) {
            acc[name] = [];
        }
        acc[name].push(card);
        return acc;
    }, {});

    // Select one random card from each group
    const selectedCards = Object.values(groupedCards).map(group => group[Math.floor(Math.random() * group.length)]);

    // Return the selected cards in reverse order, followed by the start card
    return [...selectedCards.reverse(), startCard];
}


function Simple() {
    const navigate = useNavigate()
    const [characters, setCharacters] = useState(getCards(db));
    const [lastDirection, setLastDirection] = useState()
    const [score, setScore] = useState(0)
    const [remainingCards, setRemainingCards] = useState(characters.length)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [lastValue, setLastValue] = useState()

    // Create an audio object using the useRef hook
    const audioRef = useRef(new Audio())

    const swiped = (direction, character, index) => {
        console.log('removing: ' + character.name)
        setLastDirection(direction)
        setLastValue(character.art)
    
        let newScore = score;
        if ((direction === 'right' && character.art) || (direction === 'left' && !character.art)) {
            if (character.name !== 'Start') {
                newScore += 1;
                setScore(newScore);
            }
        }
        setRemainingCards(remainingCards - 1)
        setCurrentIndex(index)
    
        // Update the characters state to remove the swiped card
        setCharacters(characters => characters.filter(c => c.name !== character.name));
    
        setTimeout(() => {
            if (index > 0 && characters[index - 1]) {
                // Use the current property of the audioRef to access the audio object and update its src property
                audioRef.current.src = characters[index - 1].audioo;
    
                // Add an event listener for the canplaythrough event and start playback when the event is triggered
                audioRef.current.addEventListener('canplaythrough', () => {
                    audioRef.current.play();
                });
            }
        }, 100);
    
        console.log(remainingCards)
        if (remainingCards === 1) {
            navigate('/final-score', { state: { score: newScore } })
        }
    }
    

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }

    const playAudio = () => {
        if (currentIndex > 0) {
            // Use the current property of the audioRef to access the audio object and play it
            audioRef.current.play();
        }
    }

    return (
        <div>
            <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
            <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
            <div className='cardContainer'>
                {characters.map((character, index) =>
                    <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character, index)}
                        onCardLeftScreen={() => outOfFrame(character.name)} preventSwipe={['up', 'down']}>
    
                        <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
                            <h3 className="NameText">{character.name}</h3>
                            {/* Add a text field that displays the content of the text variable */}
                            <h4 className="ZitatText">{character.text}</h4>
                        </div>
    
                        <div>
                            <audio className='audios'>
                                <source src={character.audioo} type="audio/mpeg" />
                            </audio>
    
                        </div>
                    </TinderCard>
                )}
            </div>
            {remainingCards === 0 ? (
                <h2 className='infoText'>Final Score: {score}</h2>
            ) : lastValue !== undefined ? (
                lastValue === true ? (
                    <h2 className='infoText'>Das letzte, war ein echtes Zitat</h2>
                ) : (
                    <h2 className='infoText'>Das letzte, war ein falsches Zitat</h2>
                )
            ) : (
                <h2 className='infoText'></h2>
            )}
            {/* Wrap the buttons in a div with the class "buttons" */}
            <div className="buttonsnext">
                {currentIndex > 0 && characters[currentIndex - 1].audioo && (
                    <button className="audio-button" onClick={() => playAudio()}>Play Audio</button>
                )}
                <Link to="/">
                    <button className="start-button">Neustart</button>
                </Link>
            </div>
        </div>
    
    )
    }
    
    export default Simple