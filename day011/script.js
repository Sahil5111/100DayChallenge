console.log('hello world')

const modal = document.querySelector("dialog")
const start= document.querySelector("#btn")
const close =document.querySelector(".close")

start.onclick=()=>{
    modal.show()
}

close.onclick=()=>{
    modal.close()
}