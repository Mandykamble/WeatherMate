

let weather ={
    apikey: "30a9631a7550ab9a230fccce27f4a9a8",
    fetchWeather :function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q= "
            + city
            + "&units=metric&appid="
            + this.apikey,
        )
        .then((Response)=>Response.json())
        .then((data)=>this.displayWeather(data));
    },
    displayWeather:function (data) {
      const {name}=data;
      const {icon,description }= data.weather[0];
      const {temp,humidity}= data.main; 
      console.log(name,icon,description,temp,humidity);

      document.querySelector(".city").innerHTML="  Weather in "+name;
      document.querySelector(".icon").src="https://openweathermap.org/img/wn/" + icon + ".png "
      document.querySelector(".description").innerHTML=description;
      document.querySelector(".temp").innerHTML=temp+"°C";
      document.querySelector(".humidity").innerHTML="Humidity:"+humidity+"%";
    },
    
     search: function () {
       this.fetchWeather(document.querySelector(".search-bar").value);
    }
    
};

document.querySelector(".buttonsearch").addEventListener("click",function () {
    weather.search();

});

document.querySelector(".search-bar").addEventListener("keyup",function (event) {
    if(event.key=="Enter"){
        weather.search();
    }
});

weather.fetchWeather("mumbai");

