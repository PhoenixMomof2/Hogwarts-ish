import React from 'react'
import image from '/Users/kandisarzu-thompson/Development/Code/Portfolio/HogwartsIsh/client/src/images/mcgonagall-duel.jpeg'

const Home = () => {
  return (
    <div>
      <h1>Hogwarts-Ish</h1>
      <hr/>
      <p>The game of spells and charms where Hogwarts students can practice the art of the duel alongside some of their professors against some of the most deplorable, yet skilled nemesis.</p>
      <img className="home" src={image} alt="drawing-of-mcgonagall-dueling"/>
    </div>
  )
}

export default Home;