function submitForm() {
    let input = document.querySelector(".input").value.toString()
    const textarea = document.querySelector("textarea")
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+input+"&appid=a031a7adf8458c0a79fa637b954a5f8d").then(Response=>{
        return Response.json()
    }).then(e=>{
        if(e.cod==="404"){
            textarea.value="City not found"
        }
        main=e.weather[0].main.toString()
        feels=e.main.feels_like.toString()
        n=e.name.toString()
        temp=e.main.temp.toString()
        textarea.value="Name: "+n+"\n"+"Description: "+main+"\n"+"Temperature: "+temp+"K"+"\n"+"Feels like: "+feels+"K"
    })
}