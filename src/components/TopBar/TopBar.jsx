import React from 'react'
import './TopBar.css'
import pokeballBlack from '../../img/logopokeblack.png'
import pokeball from '../../img/logopoke.png'
export const TopBar = () => {
  return (
    <>
    <div className="title">
      <div className="title__left">
        <p>Pokedex</p>
        <div className="caught-seen">
          <div className="caught">
          <img src={pokeball} alt="" width={30} height={30} />
          <p>438</p>
          </div>
          <div className="seen">
            <img src={pokeballBlack} width={30} height={30} alt="" />
            <p>649</p>
          </div>
          </div>
      </div>
    </div>
        
    
    </>

  )
}
