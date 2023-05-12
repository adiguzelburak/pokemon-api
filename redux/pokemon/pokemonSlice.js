import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  pokemonList: {},
  pokemonDetailList: {},
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    getPokemonListRequest() { },
    getPokemonByIdRequest() { },

    setPokemonList(state, action) {
      state.pokemonList = action.payload
    },
    setPokemonDetailList(state, action) {
      state.pokemonDetailList[action.payload.key] = action.payload.value;
    },

  },
});

export const pokemonActions = pokemonSlice.actions;

export default pokemonSlice.reducer;
