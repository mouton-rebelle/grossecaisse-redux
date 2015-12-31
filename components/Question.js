import React, { Component, PropTypes } from 'react';
import Answer from './Answer';
export default class Question extends Component {
  render() {
    return (
      <div className='question'>
        <p className='question__text'>{ this.props.question }</p>
        <div className='question__answers'>
          {this.props.answers.map(answer =>
          <Answer
            key={answer}
            text={answer}
            pickAnswer={this.props.pickAnswer}
            picked={this.props.picked === answer}
          />
        )}
        </div>
      </div>
    );
  }
}

Question.propTypes = {
  question: PropTypes.string.isRequired,
  answers: PropTypes.array.isRequired,
  pickAnswer: PropTypes.func.isRequired
}