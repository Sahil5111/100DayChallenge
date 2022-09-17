const form = document.querySelector("form")
const ul = document.querySelector("ul")


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
        console.log(selectedTagInUl.parentElement.style.display)
        selectedTagInUl.parentElement.style.visibility="hidden";
    }
}
