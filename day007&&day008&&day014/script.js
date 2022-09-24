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
    checked = []
    if (localStorage.getItem('todo') !== null) {
        todo = JSON.parse(localStorage.getItem('todo'))
        checked = JSON.parse(localStorage.getItem('checked'))
    }
    let i = 0
    todo.forEach(element => {
        li = document.importNode(template.content, true)
        li.querySelector('p').textContent = element
        li.querySelector('input').checked = checked[i]
        if (li.querySelector('input').checked) {
            li.querySelector('input').parentElement.style.textDecoration = 'line-through'
        }
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
        id = selectedTagInUl.parentElement.parentElement.getAttribute("id")
        if (localStorage.getItem('checked') !== null) {
            checked = JSON.parse(localStorage.getItem('checked'))
        }
        if (selectedTagInUl.parentElement.style.textDecoration === '') {
            selectedTagInUl.parentElement.style.textDecoration = 'line-through'
            checked[id]=true
            localStorage.setItem('checked', JSON.stringify(checked))
        } else {
            selectedTagInUl.parentElement.style.textDecoration = ''
            checked[id]=false
            localStorage.setItem('checked', JSON.stringify(checked))
        }
    }
    // x button logic
    if (selectedTagInUl.tagName.toLowerCase() === "button") {
        id = selectedTagInUl.parentElement.getAttribute("id")
        if (localStorage.getItem('todo') !== null) {
            todo = JSON.parse(localStorage.getItem('todo'))
            checked=JSON.parse(localStorage.getItem('checked'))
        }
        todo.splice(id, 1)
        checked.splice(id,1)
        localStorage.setItem('todo', JSON.stringify(todo))
        localStorage.setItem('checked', JSON.stringify(checked))
        render()
    }
}

// adding text to local storage
submit.onclick = () => {
    checked = []
    todo = []
    if (localStorage.getItem('todo') !== null) {
        todo = JSON.parse(localStorage.getItem('todo'))
        checked = JSON.parse(localStorage.getItem('checked'))
    }
    if (textarea.value === '') {
        alert("input empty")
    } else {
        todo.push(textarea.value)
        checked.push(false)
        localStorage.setItem('todo', JSON.stringify(todo))
        localStorage.setItem('checked', JSON.stringify(checked))
        textarea.value = ''
        render()
    }
}