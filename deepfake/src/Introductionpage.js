import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'

const db = [
  {
    name: 'Richard Hendricks',
    url: './img/Bild.png',
    audioo: './audio/my-audio-file.mp3'
  },
  {
    name: 'Jared Dunn',
    url: './img/Bild.png',
    audioo: './audio/Andrew.mp3'
  }
]

function Simple () {
  const characters = db
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, character) => {
    console.log('removing: ' + character.name)
    setLastDirection(direction)
    setTimeout(() => {
      const audio = new Audio(character.audioo);
      audio.play();
    }, 2000);
  }

//   const swiped = (direction, nameToDelete) => {
//     console.log('removing: ' + nameToDelete)
//     setLastDirection(direction)
//   }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  return (
    <div>
      <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
      <h1>Celebrity Talk</h1>
      <div className='cardContainer'>
        {characters.map((character) =>
          <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character)} 
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
      {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
    </div>
  )
}

export default Simple
