export function getIdFromUrl(url) {
    const urlArray = url.split("/");
    const pokemonId = urlArray[urlArray.length - 2];
    return pokemonId
}