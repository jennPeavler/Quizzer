import React from 'react'
import { Quiz } from '../Quiz/Quiz'

export const QuizDisplay = (props) => {
  if(props.quizzes.quizzes) {
    return (
      <section className='quiz-section'>
        {props.quizzes.quizzes.map((quiz,i) => {
          return (
            <Quiz quiz={quiz} key={i} />
          )
        })}
      </section>
    )
  }
  return <div>loading</div>
}
