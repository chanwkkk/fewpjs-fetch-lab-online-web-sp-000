function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp=>resp.json())
  .then(json=>renderBooks(json))
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})

function fetchCharacter1031(){
  return fetch('https://anapioficeandfire.com/api/characters/1031')
  .then(resp=>resp.json())
  .then(json=>renderCharacters(json))
}

function renderCharacters(json){
  const h2 = document.createElement('h2')
  h2.innerHTML = `<h2>${json[name]}</h2>`
  main.appendChild(h2)
}
