const form = document.querySelector("form")
const ul = document.querySelector("ul")
const submit = form.querySelector('button')
const textarea = form.querySelector('textarea')
const template = document.querySelector('template')

render()

function render() {
    temp=ul.querySelectorAll("li")
    temp.forEach(element => {
        element.remove()
    });
    todo=[]
    if (localStorage.getItem('todo') !== null) {
        todo=JSON.parse(localStorage.getItem('todo'))
    }
    todo.forEach(element => {
        p=document.importNode(template.content,true)
        p.querySelector('p').textContent=element
        ul.append(p)
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
        selectedTagInUl.parentElement.style.visibility = "hidden";
    }
}

// adding text to local storage
submit.onclick = () => {  
    todo=[]
    if (localStorage.getItem('todo') !== null) {
        todo=JSON.parse(localStorage.getItem('todo'))
    }
    todo.push(textarea.value)
    localStorage.setItem('todo', JSON.stringify(todo))
    textarea.value=''
    render()
}
