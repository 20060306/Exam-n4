const form = document.querySelector("#from");
const search_input = document.querySelector("#search-input")

const list =document.querySelector("#list");

form.addEventListener("submit", (e) =>{
e.preventDefault();
 const search_inputValue = search_input.value;

 fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search_inputValue}`)
  .then(response => response.json())
  .then(data => renderData(data))
  .catch(err => console.log(err))

  function renderData(data){
    list.innerHTML = ` <h2 class="list-item">${data[0].word} -- ${data[0].phonetics[0].text}</h2

    <p class="list-text">${data[0].meanings[0].definitions[0].example}</p>

    <p class="list-paragrpht">${data[0].meanings[0].definitions[0].definition}</p>

    <p class="list-definition">${data[0].meanings[0].definitions[0].synonyms}</p>

    <audio controls src="${data[0].phonetics[0].audio}">Play</audio>`
  }

  e.target.reset()
})