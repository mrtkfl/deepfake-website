import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'

const db = [
    {
        name: 'Karl Lauterbach',
        url: './img/Karl.jpeg',
        audioo: './audio/Karl.mp3',
        art: true
    },
    {
        name: 'Joe Biden',
        url: './img/Joe.jpeg',
        audioo: './audio/Joe.mp3',
        art: true
    },
    {
        name: 'Bernd das Brot',
        url: './img/Bernd.avif',
        audioo: './audio/Bernd.mp3',
        art: true
    },
    {
        name: 'Donald Trump',
        url: './img/Donald.jpeg',
        audioo: './audio/Donald.mp3',
        art: true
    },
    {
        name: 'Angela Merkel',
        url: './img/Angela.jpeg',
        audioo: './audio/Angela.mp3',
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
    const [currentIndex, setCurrentIndex] = useState(0)

    const swiped = (direction, character, index) => {
        console.log('removing: ' + character.name)
        setLastDirection(direction)

        if ((direction === 'right' && character.art) || (direction === 'left' && !character.art)) {
            setScore(score + 1)
        }
        setRemainingCards(remainingCards - 1)
        setCurrentIndex(index)

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

    const playAudio = () => {
        if (currentIndex > 0) {
            const audio = new Audio(characters[currentIndex - 1].audioo);
            audio.play();
        }
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
            {currentIndex > 0 && characters[currentIndex - 1].audioo && (
                <button onClick={() => playAudio()}>Play Audio</button>
            )}
        </div>
    )
}

export default Simple
