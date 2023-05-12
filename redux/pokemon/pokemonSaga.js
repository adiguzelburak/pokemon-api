import {
  all, call, put, takeLatest
} from "redux-saga/effects";
import { pokemonActions } from "./pokemonSlice";
import pokemonService from "./pokemonService";
import { getIdFromUrl } from "../../helpers/func";

function* getPokemonListSaga({ payload: { page } }) {
  try {
    const { status, statusText, data } = yield call(pokemonService.getPokemonList, page)
    if (status !== 200) throw new Error(statusText)

    const pokemonList = {};

    data.results.forEach(pokemon => {
      pokemonList[getIdFromUrl(pokemon.url)] = {
        id: getIdFromUrl(pokemon.url),
        name: pokemon.name,
      }
    });

    yield put(pokemonActions.setPokemonList(pokemonList));

  } catch (e) {
    // e
  }
}

function* getPokemonByIdSaga({ payload: { id } }) {
  try {
    const { status, statusText, data } = yield call(pokemonService.getPokemonDetailById, id)
    if (status !== 200) throw new Error(statusText)

    yield put(pokemonActions.setPokemonDetailList({
      key: data.id,
      value: data
    }));

  } catch (e) {
    // e
  }
}


export default function* rootSaga() {
  yield all([
    takeLatest(pokemonActions.getPokemonListRequest.type, getPokemonListSaga),
    takeLatest(pokemonActions.getPokemonByIdRequest.type, getPokemonByIdSaga),
  ]);
}
