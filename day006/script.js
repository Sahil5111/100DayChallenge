form =document.querySelector('form')
show=document.querySelector("button")
clear = document.querySelectorAll('button')[1]
key=document.querySelector('#key')



form.addEventListener("submit",e =>{
    e.preventDefault()
    input=form.querySelector("input")
    localStorage.setItem(key.value,input.value)
    key.value=''
    input.value=''
})

show.addEventListener('click',e=>{
    node=document.createElement("p")
    node.textContent=JSON.stringify(localStorage)
    document.body.appendChild(node)
})

clear.addEventListener("click",e=>{
    localStorage.clear()
})