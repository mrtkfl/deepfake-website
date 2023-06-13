import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'

const db = [
    {
        name: 'Angela Merkel',
        url: './img/Bild.png',
        audioo: './audio/my-audio-file.mp3',
        art: true
    },
    {
        name: 'Andrew Tate',
        url: './img/Andrew.jpeg',
        audioo: './audio/Andrew.mp3',
        art: true
    },
    {
        name: 'Start',
        url: './img/start.png',
        art: true
    }
]

function Simple() {
    const characters = db
    const [lastDirection, setLastDirection] = useState()
    const [score, setScore] = useState(0)
    const [remainingCards, setRemainingCards] = useState(characters.length)

    const swiped = (direction, character, index) => {
        console.log('removing: ' + character.name)
        setLastDirection(direction)

        if ((direction === 'right' && character.art) || (direction === 'left' && !character.art)) {
            setScore(score + 1)
        }
        setRemainingCards(remainingCards - 1)

        setTimeout(() => {
            if (index > 0) {
                const audio = new Audio(characters[index - 1].audioo);
                audio.play();
            }
        }, 1000);
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }

    return (
        <div>
            <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
            <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
            <h1>Celebrity Talk</h1>
            <div className='cardContainer'>
                {characters.map((character, index) =>
                    <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character, index)}
                        onCardLeftScreen={() => outOfFrame(character.name)} preventSwipe={['up', 'down']}>

                        <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
                            <h3>{character.name}</h3>
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
            ) : lastDirection ? (
                lastDirection === 'right' ? (
                    <h2 className='infoText'>Echtes Zitat</h2>
                ) : (
                    <h2 className='infoText'>Falsches Zitat</h2>
                )
            ) : (
                <h2 className='infoText' />
            )}
        </div>
    )
}

export default Simple
