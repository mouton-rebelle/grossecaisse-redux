import {
  GAME_STARTED,
  ANSWER_GIVEN,
  NEXT_QUESTION
} from '../constants/ActionTypes';
import {shuffle, take} from 'lodash';
import {questions} from './questions';

let gameQuestions = take(shuffle(questions), 10);

const initialState = {
  question : gameQuestions[0],
  answers  : ['boutin', 'chirac', 'wauquiez'],
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
      return bstate;
    default:
      return state;
  }
}

