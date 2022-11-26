const col= document.querySelectorAll(".col")

const intersection = new IntersectionObserver(e=>{
    e.forEach(f=>{
        f.target.classList.toggle("show",f.isIntersecting)
    })
},{
threshold:0.9
}
)

col.forEach(card=>{
    intersection.observe(card)
})
