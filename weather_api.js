const url =
	"http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID93fc6b46edd4b57ed1e18af04d5ead0capi.openweathermap.org/data/2.5/weather?q=London,uk";

function getinput() {
	fetch(url).then(function(responce) {
		console.log(responce);
	});
}
