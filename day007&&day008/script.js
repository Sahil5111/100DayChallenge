const form = document.querySelector("form")
const ul = document.querySelector("ul")
const submit = form.querySelector('button')
const textarea = form.querySelector('textarea')
const template = document.querySelector('template')

render()

//display all todo from localstorage
function render() {
    temp = ul.querySelectorAll("li")
    temp.forEach(element => {
        element.remove()
    });
    todo = []
    if (localStorage.getItem('todo') !== null) {
        todo = JSON.parse(localStorage.getItem('todo'))
    }
    let i = 0
    todo.forEach(element => {
        li = document.importNode(template.content, true)
        li.querySelector('p').textContent = element
        li.querySelector("li").setAttribute('id', JSON.stringify(i))
        ul.append(li)
        i++
    });
}

form.onsubmit = e => {
    e.preventDefault()
}

ul.onclick = e => {
    selectedTagInUl = e.target
    // checkbox logic
    if (selectedTagInUl.tagName.toLowerCase() === "input") {
        if (selectedTagInUl.checked) {
            selectedTagInUl.parentElement.style.textDecoration = 'line-through'
        } else {
            selectedTagInUl.parentElement.style.textDecoration = ''
        }
    }
    // x button logic
    if (selectedTagInUl.tagName.toLowerCase() === "button") {
        id = selectedTagInUl.parentElement.getAttribute("id")
        todo = []
        if (localStorage.getItem('todo') !== null) {
            todo = JSON.parse(localStorage.getItem('todo'))
        }
        todo.splice(id, 1)
        localStorage.setItem('todo', JSON.stringify(todo))
        render()
    }
}

// adding text to local storage
submit.onclick = () => {
    todo = []
    if (localStorage.getItem('todo') !== null) {
        todo = JSON.parse(localStorage.getItem('todo'))
    }
    if (textarea.value === '') {
        alert("input empty")
    } else {
        todo.push(textarea.value)
        localStorage.setItem('todo', JSON.stringify(todo))
        textarea.value = ''
        render()
    }
}