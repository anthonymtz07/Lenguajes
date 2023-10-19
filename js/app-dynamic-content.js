// app-dynamic-content.js
const images = [
    {name: "Python", image: "./images/py.webp"},
    {name: "C++", image: "./images/c.png"},
    {name: "CSS", image: "./images/css.png"},
    {name: "Java", image: "./images/Java2.jpg"},
    {name: "Flutter", image: "./images/Flutter.png"},
    {name: "Go", image: "./images/go.png"}
];

const loadDynamicContent = () => {
    const container = document.querySelector(".container");
    showImages(images);


document.addEventListener("DOMContentLoaded", loadDynamicContent);

if ("serviceWorker" in navigator) {
    console.log("El navegador soporta Service Workers");
    window.addEventListener("   load", function() {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("Service Worker registrado exitosamente"))
            .catch(err => console.log("No se pudo registrar el Service Worker"));
    });
 }
}