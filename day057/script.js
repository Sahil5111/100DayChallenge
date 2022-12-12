var col = document.querySelectorAll(".col")
const container =document.querySelector(".container")

fetch("http://localhost:5000/10")
.then(response=> response.json())
.then(response=>{
    let i=0
    response.forEach(ele=>{
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

const last= new IntersectionObserver(e=>{
    let lastcard=e[0]
    if(!lastcard.isIntersecting) return
    let div=document.createElement('div')
    div.className='col border'
    fetch("http://localhost:5000")
        .then(response => response.json())
        .then(response => div.style.backgroundImage='url('+response.url.toString()+')')
    container.appendChild(div)
    console.log(div)
    last.unobserve(lastcard.target)
    intersection.observe(div)
    col = document.querySelectorAll(".col")
    last.observe(col[col.length-2])
})

last.observe(col[col.length-2])