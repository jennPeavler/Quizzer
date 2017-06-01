import React, { Component } from 'react';
import './App.css';

import QuizDisplayContainer from '../QuizDisplay/QuizDisplayContainer'
import ApiAddersContainer from '../ApiAdders/ApiAddersContainer'
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
        <ApiAddersContainer />
        <QuizDisplayContainer />
      </div>
    );
  }
}

export default App;
