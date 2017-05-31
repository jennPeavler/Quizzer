import React from 'react'

export const Quiz = (props) => {
  console.log(props)
  return (
    <form>
      <h1>{props.quiz.title}</h1>
      <section className='questions'>
        {props.quiz.questions.map((question, i) => {
          return (
            <section key={i}>
              <h4 key={question.id}>{question.title}</h4>
              <div>
                {question.answers.map((answer, j) => {
                  return (
                    <div className='answers' key={j}>
                      <input type='radio' name={question.id} />  {answer.title}<br />
                    </div>
                  )
                })}
              </div>
            </section>
          )
        })}
      </section>
      <button id='submit-btn'>Submit</button>
    </form>
  )
}
