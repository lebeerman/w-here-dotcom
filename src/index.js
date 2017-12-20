const baseURL = "https://radiant-coast-65532.herokuapp.com/";

fetch(baseURL)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.log(err));

fetch("https://radiant-coast-65532.herokuapp.com/",  {
  method: "post",
  body: JSON.stringify({greeting: "hello"}),
  headers: new Headers({
    "Content-Type": "application/json"
  })
})
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.log(err));
