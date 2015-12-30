import React, { Component, PropTypes } from 'react';
import Answer from './Answer';

export default class Score extends Component {
  render() {
    return (
      <div className='score'>
        <p className='score__text'>{ this.props.score }</p>
        <button className='score__next' onClick={e => this.props.nextQuestion() }>
          next question
        </button>
      </div>
    );
  }
}

Score.propTypes = {
  score: PropTypes.number.isRequired,
  nextQuestion: PropTypes.func.isRequired
}