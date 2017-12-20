var postUrl = "https://w-here-dotcom.herokuapp.com/submit";
var button = document.querySelector("#submit");
var submitName = document.querySelector("#new-situation");
var submitSong = document.querySelector("#new-song");
var submitArtist = document.querySelector("#new-artist");
var submitUrl = document.querySelector("#new-url");
var form = document.querySelector("#newsituationform");
var formDiv = document.querySelector(".select");

button.addEventListener("click", function(event) {
  event.preventDefault();
  fetch(postUrl, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    body: JSON.stringify({
      name: submitName.value,
      songName: submitSong.value,
      mood: submitArtist.value,
      avSource: submitUrl.value
    })
  })
    .then(response => {
      console.log(response);
      form.className = "hidden";
      var p = document.createElement("p");
      p.className = "response";
      p.innerHTML = response;
      formDiv.appendChild(p);
    })
    .catch(err => console.log(err));
});
