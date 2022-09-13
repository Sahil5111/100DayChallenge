text = document.querySelector("input")
button = document.querySelector("button")

button.addEventListener("click", () => {
    if (text.value === "") {
        console.log("invalid input")
    } else {
        div = document.createElement("div")
        div.textContent = text.value
        document.body.appendChild(div)
        text.value = ""
    }
})