import React, { Component } from 'react'
import { apiCall } from '../../helpers/apiCalls'

export default class ApiAdders extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questionTitle: '',
      answer1Title: '',
      score1: 0
    }
  }

  submitQuestion(postInfo) {
    const bodyContent = JSON.stringify(postInfo)

    fetch('http://localhost:3000/quizzes/1/questions', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: bodyContent
    })
    .then(response => response.json())
    .then(() => {
      const quizPath = 'quizzes'

      apiCall(quizPath)
      .then(data => {
        this.props.fetchQuizzes(data)
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <form>
        <input id='question-title'
          onChange={event => this.setState({questionTitle: event.target.value})}
          value={this.state.questionTitle}
          placeholder='please enter your question' />
        <input id='answer-1'
          onChange={event => this.setState({answer1Title: event.target.value})}
          value={this.state.answer1Title}
          placeholder='please enter your first answer' />
        <input id='score-1'
          onChange={event => this.setState({score1: event.target.value})}
          value={this.state.score1}
          placeholder='please enter the score of the first answer' />
        <button id='question-submit'
                onClick={event => {
                  event.preventDefault()
                  this.submitQuestion({
                    title: this.state.questionTitle,
                    answers: [ {title: this.state.answer1Title, score: this.state.score1} ] })
                }} >
                Submit
        </button>

      </form>

    )
  }
}


// { title: 'Question title',
// answers: [
// { title: 'Answer 1', score: 1 },
// { title: 'Answer 2', score: 3 }
// ]}
