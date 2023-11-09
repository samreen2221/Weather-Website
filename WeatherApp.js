let key='953dc7d5827bbdda462572b8089b4a3d';
let city=document.getElementById('city');
let desc=document.getElementById('windspeed');
let hum=document.getElementById('hum');
let temp=document.getElementById('temp');

function fetchData(){
	let cityname=document.getElementById('cityname').value;
	let api=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${key}`

	fetch(api)
	.then(response=>response.json())
	.then(data=>{
		city.innerHTML=data.name;
		desc.innerHTML=data.weather[0].description;
		windspeed.innerHTML=data.main.speed;
		hum.innerHTML=data.main.humidity;
		temp.innerHTML=data.main.temp-273;
	})
}