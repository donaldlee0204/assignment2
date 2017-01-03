// Code for the main app page (Past Runs list).

// The following is sample code to demonstrate navigation.
// You need not use it for final app.
var runLists;
showRunList();
function showRunList(){
	runLists = JSON.parse(localStorage.getItem(APP_PREFIX + "-RunList"));
	for(var i=0; i<runLists.length; i++)
	{
		var main = document.getElementById("runsList");
		var list = document.createElement("li");
		list.className="mdl-list__item mdl-list__item--two-line";
		list.onclick = function(){initView(i-1)};
		console.log(i);
		var span = document.createElement("span");
		var span_m = document.createElement("span");
		var text = document.createTextNode("Run"+ i);
		span_m.appendChild(text);
		span.appendChild(span_m);
		list.appendChild(span);
		main.appendChild(list);
	}
}

function Run(start, arrival, beginTime, endTime){
	this.start = start;
	this.arrival = arrival;
	this.beginTime = beginTime;
	this.endTime = endTime;
	this.getDistance = function (){
		var distance = google.maps.geometry.spherical.computeDistanceBetween(start.getPosition(), arrival.getPosition());
		return distance;
	}
	this.getRunTime = function (){
		var time = endTime.getTime() - beginTime.getTime();
		return time;
	}
} 

function initView(index){
	console.log("save" + index);
	localStorage.setItem("index", index);
	location.href='viewRun.html';
}

