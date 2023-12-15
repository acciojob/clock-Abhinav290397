//your JS code here. If required.
const P = document.querySelector("#timer");
function updateTime(){
	let date = new Date();
	P.innerText = date;
}
setInterval(updateTime,1000);
