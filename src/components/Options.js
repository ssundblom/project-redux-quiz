import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'

export const Options = () => {
  const dispatch = useDispatch()
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  )
  
  if (!question) {
    return <h1>Oh no! I could not find the current answers!</h1>

  }

  return (
    <form>
      <label>{question.options[0]}</label>
      <input type="radio" name="option" onChange={() => dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: 0 }))}/>

      <label>{question.options[1]}</label>
      <input type="radio" name="option" onChange={() => dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: 1 }))}/>

      <label>{question.options[2]}</label>
      <input type="radio" name="option" onChange={() => dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: 2 }))}/>

      <label>{question.options[3]}</label>
      <input type="radio" name="option" onChange={() => dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: 3 }))}/>
    </form>
  )
}