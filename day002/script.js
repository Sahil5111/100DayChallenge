colorsel=document.querySelector(".color")

colorsel.addEventListener("change",()=>{
document.body.style.backgroundColor=colorsel.value
})