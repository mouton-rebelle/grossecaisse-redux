import {
  GAME_STARTED,
  ANSWER_GIVEN,
  NEXT_QUESTION
} from '../constants/ActionTypes';
import {shuffle, take, uniq} from 'lodash';
import {questions} from './questions';

let gameQuestions = take(shuffle(questions), 10);

function listAnswers(correct)
{
  let responses = [correct];
  let others = take(shuffle(uniq(questions.map(q => q.answer).filter(a => a !== correct))),2);
  return shuffle(responses.concat(others));
}

const initialState = {
  question : gameQuestions[0],
  answers  : listAnswers(gameQuestions[0].answer),
  picked   : null,
  started  : false,
  ended    : false,
  current  : 0,
  score   : 0
};



export default function game(state = initialState, action) {
  switch (action.type) {
    case GAME_STARTED:
      return {...state, started:true};
    case ANSWER_GIVEN:
      if (state.picked)
      {
        return state;
      }
      let newstate = {...state};
      newstate.picked = action.id;
      if (newstate.picked === newstate.question.answer)
      {
        newstate.score++;
      }
      if (newstate.current === 9)
      {
        newstate.ended = true;
      }
      return newstate;

    case NEXT_QUESTION:
      let bstate = {...state};
      bstate.current ++;
      bstate.picked = null;
      bstate.question = gameQuestions[bstate.current];
      bstate.answers = listAnswers(bstate.question.answer);
      return bstate;
    default:
      return state;
  }
}

