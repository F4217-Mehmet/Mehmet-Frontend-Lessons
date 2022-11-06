import React, {useContext} from 'react' 
import {TemaVerisi} from '../App'

export default function Icerik() {
  return (
    <div style={useContext(TemaVerisi)} >
        <h1>React Ogrenecegim Insallah</h1>
        <h2>Bence cok iyi olur</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, libero.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, libero.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, libero.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, libero.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, libero.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, libero.</p>
    </div>
  )
}
