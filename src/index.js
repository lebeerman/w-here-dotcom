const situationsURL = "https://w-here-dotcom.herokuapp.com/situations";
const songsURL = "https://w-here-dotcom.herokuapp.com/songs";
const button = document.querySelector(".button");
const videoDiv = document.querySelector("iframe");
let situationList = document.querySelector("select");
let chosenSituation;
let situationID;

document.onload = fetchSituationInfoFromAPI();
situationList.onchange = changeEventHandler;

button.addEventListener("click", () => {
	console.log(chosenSituation);
	console.log(situationID);
	fetch(songsURL)
	.then(response => response.json())
	.then(response => {
		console.log(response);
	});
});

function changeEventHandler(event){
	chosenSituation = event.target.value;
	situationID = situationList[situationList.selectedIndex].id;
}

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
		// let selectedSong = response.filter(song => song.id == situationID);
		// console.log(selectedSong);
		// console.log(chosenSituation);
		// console.log(situationID);
		//displaySongInfo(response);
	})
	.catch(console.error);
}

function displaySongInfo(responseData){
	console.log(responseData);
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
