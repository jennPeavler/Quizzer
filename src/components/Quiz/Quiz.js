import React, { Component } from 'react'

export class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <form>
        <h1>{this.props.quiz.title}</h1>
        <section className='questions'>
          {this.props.quiz.questions.map((question, i) => {
            return (
              <section key={i}>
                <h4 key={question.id}>{question.title}</h4>
                <div>
                  {question.answers.map((answer, j) => {
                    return (
                      <div className='answers' key={j}>
                        <input type='radio'
                               name={question.id}
                        />
                          {answer.title}<br />
                      </div>
                    )
                  })}
                </div>
              </section>
            )
          })}
        </section>
        <button id='submit-btn'>
          Submit
        </button>
      </form>
    )
  }
}
