const situationsURL = "https://w-here-dotcom.herokuapp.com/situations";
const songsURL = "https://w-here-dotcom.herokuapp.com/songs";
const button = document.querySelector(".button");
let videoDiv = document.querySelector("iframe");
let songDescription = document.querySelector(".song-info");
let situationList = document.querySelector("select");
let chosenSituation;
let situationID;

document.onload = fetchSituationInfoFromAPI();
situationList.onchange = changeEventHandler;

button.addEventListener("click", (event) => {
	event.preventDefault();
	fetch(songsURL)
	.then(response => response.json())
	.then(response => {
		let selectedSong = response.filter(song => song.id == situationID);
		displaySongInfo(selectedSong[0]);

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

// function fetchSongInfoFromAPI(){
// 	fetch(songsURL)
// 	.then(response => response.json())
// 	.then(response => {
// 		let selectedSong = response.filter(song => song.id == situationID);
// 		displaySongInfo(selectedSong[0]);
// 	})
// 	.catch(console.error);
// }

function displaySongInfo(songData){
	console.log(songData);
	videoDiv.src = songData.avSource;
	songDescription.innerText = "Walkin' in to " + songData.songName + " by " + songData.artistName;

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
