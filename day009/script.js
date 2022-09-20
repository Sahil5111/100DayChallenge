const template = document.querySelector("template")
const div = document.querySelector(".row")
const button = document.querySelector(".btn")
const input = document.querySelectorAll("input")


button.addEventListener("click", () => {
    temp = document.importNode(template.content, true)
    temp.querySelector(".card-title").textContent = input[0].value
    temp.querySelector("p").textContent = input[1].value
    div.appendChild(temp)
    input[0].value=input[1].value=""
}
)