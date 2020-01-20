var url =
	"https://api.openweathermap.org/data/2.5/weather?q=dublin&appid=93fc6b46edd4b57ed1e18af04d5ead0c";
var output = document.querySelector("#output");
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
	if (xhr.readyState === 4 && xhr.status === 200) {
		var str = xhr.responseText;
		var obj = JSON.parse(str);
		output.innerHTML = obj.main;
		console.log(obj);
	}
};
xhr.open("GET", url);
xhr.send();
console.log(xhr);

/*function getinput() {
	const xhr = new XMLHttpRequest();

	xhr.onload = function() {
		if (this.readyState == 4 && this.status == "200") {
			let data = JSON.parse(xhr.responseText).results;
			outputHTML(data);
		}
	};
	xhr.open("GET", tempURL);
	xhr.send();
	console.log(intake.value);
}*/
