function submitForm() {
    let input = document.querySelector(".input").value.toString()
    const textarea = document.querySelector("textarea")
    apikey="" //your api key goes here
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+input+"&appid="+apikey).then(Response=>{
        return Response.json()
    }).then(e=>{
        main=e.weather[0].main.toString()
        feels=e.main.feels_like.toString()
        n=e.name.toString()
        temp=e.main.temp.toString()
        textarea.value="Name: "+n+"\n"+"Description: "+main+"\n"+"Temperature: "+temp+"K"+"\n"+"Feels like: "+feels+"K"
    })
}