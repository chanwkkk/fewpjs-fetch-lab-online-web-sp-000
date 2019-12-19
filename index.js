function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp=>resp.json())
  .then(json=>renderBooks(json))
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.numberOfPages}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  //  fetchBooks()
  fetchCharacter1031()
})

// function fetchCharacter1031(){
//   return fetch('https://anapioficeandfire.com/api/characters/1031')
//   .then(resp=>resp.json())
//   .then(json=>console.log(json))
// }

function renderCharacters(json){
  debugger
  const h2 = document.createElement('h2')
  h2.innerHTML = `<h2>${json['name']}</h2>`
  main.appendChild(h2)
}
