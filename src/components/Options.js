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
  console.log(question)

  return (
    <form>
      {question.options.map((option, index) => {
        return (
          <div>
            <label>{option}</label>
            <input type="radio" name="option" onChange={() => dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index }))}/>
          </div>
        )
      })}
    </form>
  )
}