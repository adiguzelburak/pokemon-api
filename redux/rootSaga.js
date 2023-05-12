import { all, fork } from "redux-saga/effects";

import pokemonSaga from "./pokemon/pokemonSaga";

function* rootSaga() {
  yield all([fork(pokemonSaga)]);
}

export default rootSaga;
