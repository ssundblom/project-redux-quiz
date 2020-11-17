import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'

export const Options = () => {
  const [disabled, setDisabled] = useState(false)
  const dispatch = useDispatch()

  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  )
  
  if (!question) {
    return <h1>Oh no! I could not find the current answers!</h1>
  }

  return (
    <form>
      {question.options.map((option, index) => {
        return (
          <div>
            <label>{option}</label>
            <input type="radio" name="option" onChange={( ) => dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index }))}/>
            {/* ? index !== question.correctAnswerIndex : setDisable  */}
          </div>
        )
      })}
    </form>
  )
}