//YOUR_TOKEN
const API_TOKEN = "VOTRE TOKEN"

export function getFilmsFromApiWithSearchedText(Text) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + Text
    return fetch(url)
    .then ((response) => response.json() )
    .catch((error) => console.log(error))
}

