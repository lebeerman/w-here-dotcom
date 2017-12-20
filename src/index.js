const situationsURL = "http://localhost:3000/situations";
const songsURL = "http://localhost:3000/songs";
// const situationsURL = "https://w-here-dotcom-backend.herokuapp.com/situations";
// const songsURL = "https://w-here-dotcom-backend.herokuapp.com/songs";
let situationList = document.querySelector("select");

document.onload = fetchSituationInfoFromAPI();

function fetchSituationInfoFromAPI(){
	fetch(situationsURL)
	.then(response => response.json())
	.then(response => {
		console.log(response);
		sortSituations(response);
		console.log(response);
		createOptions(response);
	})
	.catch(console.error);
}

function fetchSongInfoFromAPI(){
	fetch(songsURL)
	.then(response => response.json())
	.then(response => {
		listRescues(filteredRescueData);
	})
	.catch(console.error);
}

function sortSituations(response){
	return response.sort((a,b) => a.name-b.name);
}

function createOptions(situationData){
	for (var i = 0; i < situationData.length; i++) {
		var option = document.createElement("option");
		option.id = situationData[i].id;
		option.setAttribute("value", situationData[i].Name);
		option.innerText = situationData[i].Name;
		situationList.appendChild(option);
	}
}
