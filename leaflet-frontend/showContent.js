const params = window.location.search
const searchParams = new URLSearchParams(params)
const id = searchParams.get('id')

fetch(`http://localhost:3000/locations/${id}`)
    .then(response => response.json())
    .then(location => displayContent(console.log(location)))


function displayContent(location) {

const content = document.querySelector('leaflet-content-popup')
// .closest?
  const name = document.createElement('p')

  name.innertext = location.name
// console.log(location)
  content.append(name)
}