import React, { Component } from 'react';
import './App.css';
import Users from '../../containers/Users'
import QuizDisplayContainer from '../QuizDisplay/QuizDisplayContainer'
import { apiCall } from '../../helpers/apiCalls'

class App extends Component {

  componentWillMount() {
    this.fetchQuizzes()
  }

  fetchQuizzes() {
    const quizPath = 'quizzes'

    apiCall(quizPath)
    .then(data => {
      this.props.handleFetch(data)
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome To Quizzer</h1>
        <Users />
        <QuizDisplayContainer />
      </div>
    );
  }
}

export default App;
