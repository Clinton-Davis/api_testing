const url = "https://api.openweathermap.org/data/2.5/weather?id=1085599";

const my_id = "&APPID=93fc6b46edd4b57ed1e18af04d5ead0c";
var unit = "&units=metric";
var unit = "&units=metric";
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
	if (this.readyState === 4 && this.status === 200) {
		var obj = JSON.parse(this.responseText);

		var city = obj.name;
		var temps = "H " + obj.main.temp_max + " / " + obj.main.temp_min + " L";
		console.log(city);
		console.log(temps);
		writeToDoc();
	}
	function writeToDoc() {
		document.getElementById("#weather").innerHTML = obj + "<br>" + temps;
	}
};
xhr.open("GET", url + my_id + unit);
xhr.send();
