import React, { Component, PropTypes } from 'react';
import Answer from './Answer';
let audio;

function renderMessage(status, correct)
{
  switch (status) {
    case 'waiting':
      return (
        <p className="waiting">Alors ? C'est qui ?</p>
      );
    case 'correct':
      return (
        <p className="success">Bravo !</p>
      );
    case 'wrong':
      return (
        <p className="error">Bah non. C'était <strong>{correct}</strong> !</p>
      );
  }
}


export default class Score extends Component {
  componentDidMount(){
    audio = new Audio('/fart.mp3');
    audio.play();
  }
  nextQuestion()
  {
    audio.currentTime = 0;
    audio.play();
    this.props.nextQuestion();
  }
  render() {
    return (
      <div className='score'>
        { renderMessage(this.props.status, this.props.correctAnswer) }
        { this.props.status !== 'waiting' && !this.props.ended ?
          <div className='button button--huge' onClick={e => this.nextQuestion() }>
            suivante !
          </div>
          :
          null
        }
        { this.props.ended ?
          <div>
            <div className="score__final">{ this.props.score * 10 }%</div>
            <div onClick={ e => window.location.reload()} className="button button--huge">Encore une fois</div>
          </div>
          :
          <div className='score__footer'>
            <p className='score__footer__text'>{ this.props.score } points. </p>
            <p className='score__footer__position'>question { this.props.position }/10</p>
          </div>
        }
      </div>
    );
  }
}

Score.propTypes = {
  score: PropTypes.number.isRequired,
  nextQuestion: PropTypes.func.isRequired,
  ended: PropTypes.bool.isRequired,
  correctAnswer: PropTypes.string.isRequired,
  position: PropTypes.number.isRequired,
  status: PropTypes.oneOf(['waiting','correct','wrong'])

}