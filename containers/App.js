import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Question from '../components/Question';
import Score from '../components/Score';
import { startGame, pickAnswer, nextQuestion } from '../actions/actions';

class App extends Component {
  render() {
    const { question, answers, picked, score, startGame, nextQuestion, pickAnswer } = this.props;
    return (
      <div className="container">
        <Header/>
        <Question
          answers={answers}
          pickAnswer={pickAnswer}
          picked={picked}
          question={question.text}/>
        <Score
          score={score}
          nextQuestion={nextQuestion}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return state.game
}
function mapDispatchToProps(dispatch) {
  return {
    startGame: () => dispatch(startGame()),
    pickAnswer: (id) => dispatch(pickAnswer(id)),
    nextQuestion: () => dispatch(nextQuestion()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);