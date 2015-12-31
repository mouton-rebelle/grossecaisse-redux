import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Question from '../components/Question';
import Score from '../components/Score';
import { startGame, pickAnswer, nextQuestion } from '../actions/actions';


function renderInfo(started, startGame)
{
  if (!started)
  {
    return (
      <div className='info'>
        <p className="info__text">Parce que des fois la politique ça pue.</p>
        <div onClick={ e => startGame()} className="button button--huge">Je suis prêt. A tout.</div>
      </div>
    );
  }
}


class App extends Component {
  render() {
    const { question, answers, current, picked, score, started, ended, startGame, nextQuestion, pickAnswer } = this.props;
    let status = 'wrong';
    if (picked === null)
    {
      status = 'waiting';
    } else if (picked === question.answer)
    {
      status = 'correct';
    }


    return (
      <div className="container">
        <Header/>
        { renderInfo(started, startGame) }
        { started ?
          <div>
            <Question
              answers={answers}
              pickAnswer={pickAnswer}
              picked={picked}
              question={question.text}/>
            <Score
              correctAnswer={question.answer}
              position={current+1}
              nextQuestion={nextQuestion}
              ended={ended}
              score={score}
              status={status}
            />
          </div>
        : null }
      </div>
    );
  }
}

function mapStateToProps(state) {
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