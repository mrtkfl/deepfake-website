import React, { useState, useRef } from 'react'
import TinderCard from 'react-tinder-card'
import './App.css';
import { Link } from 'react-router-dom';



const db = [
    {
        name: 'Karl Lauterbach',
        url: './img/Karl.jpeg',
        audioo: './audio/Karl.mp3',
        art: true,
        text: "Ich habe echt keinen Bock mehr."
    },
    {
        name: 'Joe Biden',
        url: './img/Joe.jpeg',
        audioo: './audio/Joe.mp3',
        art: true,
        text: "Ich habe echt keinen Bock mehr."
    },
    {
        name: 'Donald Trump',
        url: './img/Donald.jpeg',
        audioo: './audio/Donald.mp3',
        art: true,
        text: "Ich habe echt keinen Bock mehr."
    },
    {
        name: 'Angela Merkel',
        url: './img/Angela.jpeg',
        audioo: './audio/Angela.mp3',
        art: false,
        text: "Ich habe echt keinen Bock mehr."
    },
    {
        name: 'Bernd das Brot',
        url: './img/Bernd.png',
        audioo: './audio/Bernd.mp3',
        art: true,
        text: "Es gibt ein Brot das ich hasse und das ist Toastbrot."
    },
    {
        name: 'Start',
        url: './img/start.png',
        art: undefined,
        text: "Ich habe echt keinen Bock mehr."
    }
]

function Simple() {
    const characters = db
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
    
        if ((direction === 'right' && character.art) || (direction === 'left' && !character.art)) {
            if (character.name !== 'Start') {
                setScore(score + 1)
            }
        }
        setRemainingCards(remainingCards - 1)
        setCurrentIndex(index)
    
        setTimeout(() => {
            if (index > 0) {
                // Use the current property of the audioRef to access the audio object and update its src property
                audioRef.current.src = characters[index - 1].audioo;
                
                // Add an event listener for the canplaythrough event and start playback when the event is triggered
                audioRef.current.addEventListener('canplaythrough', () => {
                    audioRef.current.play();
                });
            }
        }, 1500);
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
                    <h2 className='infoText'> ◀Fake oder Echt▶</h2>
                )}
            {currentIndex > 0 && characters[currentIndex - 1].audioo && (
                <button className="audio-button" onClick={() => playAudio()}>Play Audio</button>
            )}
            <div>
                <Link to="/">
                    <button className="start-button">Restart</button>
                </Link>
            </div>
        </div>
        
    )
}

export default Simple