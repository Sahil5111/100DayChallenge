const col = document.querySelectorAll(".col")

fetch("http://localhost:5000/10")
.then(response=> response.json())
.then(response=>{
    let i=0
    response.forEach(ele=>{
        console.log(ele.url);
        col[i].style.backgroundImage='url('+ele.url.toString()+')'
        i++
    })
})

const intersection = new IntersectionObserver(e => {
    e.forEach(f => {
        f.target.classList.toggle("show", f.isIntersecting)
    })
}
)

col.forEach(card => {
    intersection.observe(card)
})
