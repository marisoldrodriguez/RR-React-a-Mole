import React, { useEffect } from 'react'
import MoleImage from '../mole.png'

function Mole(props) {

    useEffect(() => {
        let randomSecs = Math.ceil(Math.random() * 8000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randomSecs)
        return () => clearTimeout(timer)
    })

  return (
    <div>
        <img style={{'width': '30vw'}} src={MoleImage} onClick={props.handleClick} />
    </div>
  )
}

export default Mole