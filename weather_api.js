var url =
	"https://api.openweathermap.org/data/2.5/weather?id=1085599&units=metric&APPID=93fc6b46edd4b57ed1e18af04d5ead0c";
var output = document.querySelector("#output");
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
	if (xhr.readyState === 4 && xhr.status === 200) {
		var obj = JSON.parse(xhr.responseText);
		output.innerHTML = obj.main;
		console.log(obj);
	}
};
xhr.open("GET", url);
xhr.send();
console.log(xhr);
