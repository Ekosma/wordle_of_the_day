import React, {useState} from 'react'
import {list} from './list';

function WordleChoice() {
  
  let word = list[Math.floor(Math.random() * list.length)];
  console.log(list)
  console.log(word)
  return (
    <div>
      Hello
      
    </div>
  )
}

export default WordleChoice;