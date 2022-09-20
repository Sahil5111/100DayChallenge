setInterval(()=>{
    let date = new Date()
    document.body.textContent=date.getHours()%12+':'+date.getMinutes()+':'+date.getSeconds()
},1000)