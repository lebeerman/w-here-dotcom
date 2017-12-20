const situationsURL = "http://localhost:3000/situations";
const songsURL = "http://localhost:3000/songs";
// const situationsURL = "https://https://w-here-dotcom.herokuapp.com/situations";
// const songsURL = "https://w-here-dotcom.herokuapp.com/songs";
const button = document.querySelector("button");
const videoDiv = document.querySelector(".video");
let situationList = document.querySelector("select");

document.onload = fetchSituationInfoFromAPI();
button.addEventListener("click", (event) => {
	let chosenSituation = event.target;
	console.log(chosenSituation);
});
situationList.onchange = fetchSongInfoFromAPI(event);

function fetchSituationInfoFromAPI(){
	fetch(situationsURL)
	.then(response => response.json())
	.then(response => {
		createOptions(response);
	})
	.catch(console.error);
}

function fetchSongInfoFromAPI(){
	fetch(songsURL)
	.then(response => response.json())
	.then(response => {
		console.log(response);
		//displaySongInfo(response);
	})
	.catch(console.error);
}

function displaySongInfo(responseData){

}

function createOptions(situationData){
	for (var i = 0; i < situationData.length; i++) {
		var option = document.createElement("option");
		option.id = situationData[i].id;
		option.setAttribute("value", situationData[i].name);
		option.innerText = situationData[i].name;
		situationList.appendChild(option);
	}
}
