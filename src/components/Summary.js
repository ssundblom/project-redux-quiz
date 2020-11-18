import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { quiz } from 'reducers/quiz'

import './Summary.css'


export const Summary = () => {

  //const results = useSelector(
 //   (state) => state.quiz.
  //)

  return(

    <div className="summary-container">
      <p>Summary text</p>
      <button>Restart</button>
    </div>
  )
}