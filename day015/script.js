const search = document.querySelector("input")
const container = document.querySelector('.container')

fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(data => {
    data.forEach(element => {
        let div = document.createElement("div")
        div.className = 'col-3'
        div.textContent = element.username
        container.appendChild(div)
    });
})


search.oninput = (e) => {
    const list = document.querySelectorAll('.col-3')
    list.forEach(element => {
        let a = !element.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        element.classList.toggle("hide", a)
    });
}