// app-shell.js
const container = document.querySelector(".container")
/*const container = document.querySelector(".container");*/
const imagenes = [
    {name: "Python", image: "./images/py.webp"},
    {name: "C++", image: "./images/c.png"},
    {name: "CSS", image: "./images/css.png"},
    {name: "Java", image: "./images/Java2.jpg"},
    {name: "Flutter", image: "./images/Flutter.png"},
    {name: "Go", image: "./images/go.png"}
]

const showLogos = () =>{
    let output = ""

    imagenes.forEach(
    ({name,image}) => 
    (output += `
        <div class="card">
            <img class = "card-avatar" src=${image} />
            <h1 class = "card-title">${name}</h1>
        </div>
    `))
    container.innerHTML = output
}
document.addEventListener("DOMContentLoaded", showLogos)