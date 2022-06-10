import React, { useEffect } from 'react';
import MoleHill from '../molehill.png'

function EmptySlot(props) {

    // Lesson learned: in setTimeout the props.toggle will render mole because toggle is assigned in MoleContainer Component file to the state variable function setMole which updates the state value.
    useEffect(() => {
        let randomSecs = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randomSecs)
        return () => clearTimeout(timer)
    })    

  return (
    <div>
        <img style={{'width': '30vw'}} src={MoleHill} />
    </div>
  )
}

export default EmptySlot