import axios from "axios";

const URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const PAGE_LIMIT = process.env.NEXT_PUBLIC_LIST_LIMIT;

const pokemonService = {
    getPokemonList: (page) => {
        return axios.get(URL, {
            params: {
                offset: page,
                limit: PAGE_LIMIT
            }

        })
    },
    getPokemonDetailById: (id) => {
        return axios.get(`${URL}/${id}/`)
    }
};

export default pokemonService;
