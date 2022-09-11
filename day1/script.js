
console.log(sessionStorage)

button= document.querySelector("button")

button.addEventListener("click",()=>{
    a=document.querySelectorAll("input")
    i=0;
    while (i<a.length) {
        sessionStorage.setItem(a[i].name,a[i].value)
        i++
    }
    console.log(sessionStorage)
})

