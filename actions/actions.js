import {
  GAME_STARTED,
  ANSWER_GIVEN,
  NEXT_QUESTION
} from '../constants/ActionTypes';

export function startGame() {
  return {
    type: GAME_STARTED
  };
}

export function pickAnswer(id) {
  return { type: ANSWER_GIVEN, id }
}

export function nextQuestion() {
  return { type: NEXT_QUESTION }
}