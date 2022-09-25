colorsel=document.querySelector(".color")

colorsel.addEventListener("input",()=>{
document.body.style.backgroundColor=colorsel.value
})