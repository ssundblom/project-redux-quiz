import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'


export const CurrentQuestion = () => {
  const dispatch = useDispatch()
  const question = useSelector(
    (state)=> state.quiz.questions[state.quiz.currentQuestionIndex])

    const questionNumber = useSelector(
      (state) => state.quiz.currentQuestionIndex + 1
    )
    const questionTotal = useSelector((state) => state.quiz.questions.length
    )
  
    const answer = useSelector(
      (state) => state.quiz.answers.find(answer => answer.questionId === question.id)
    )

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>

  }

  return (
    <div>
      <h1>{question.questionText}</h1>
      <button className="next-button" disabled={answer === undefined} onClick={() => dispatch(quiz.actions.goToNextQuestion())}>
        Next Question
      </button>
      <p>Question {questionNumber} of {questionTotal}</p>
    </div>
  )
}
  