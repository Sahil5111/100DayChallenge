const text = document.querySelector("input")
const button = document.querySelector(".submit")


button.addEventListener("click", () => {
    if (text.value === "") {
        console.log("invalid input")
    } else {
        div = document.createElement("div")
        div.textContent = text.value
        btn = document.createElement("button")
        btn.setAttribute("class", "delete btn btn-danger my-2");
        btn.textContent="delete"
        div.appendChild(btn)
        btn.addEventListener("click",()=>{
            par=btn.parentElement
            console.log(par)
            par.style.display="none"
        })
        document.body.appendChild(div)
        text.value = ""
    }
})