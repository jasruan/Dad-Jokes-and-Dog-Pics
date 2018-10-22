let root = document.getElementById("root");
let getJoke = document.getElementById("getJoke");
let clearButton = document.getElementById("clearCurrent");
const API_KEY = "17d94b92-754f-46eb-99a0-65be65b5d18f";
let getDadJokes=async()=>{    
    let callDadApi =  fetch(`https://icanhazdadjoke.com/`,{
        headers:{'Accept': 'application/json'}
    })
    .then(res=> res.json()
    .then(data=>{
    let jokeContainer = document.createElement("div");
    jokeContainer.className = "joke-container";
    let jokeQuote = document.createElement("p");
    let textJoke = document.createTextNode(data.joke);
    jokeQuote.appendChild(textJoke);
    jokeContainer.appendChild(jokeQuote); 
    root.appendChild(jokeContainer);   
})
    .catch(error => console.log(error)));
   
}
let getRandomDoggo=()=>{
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
          let dogImageContainer = document.createElement("div");
          dogImageContainer.className = "dog-container";
          let jokeImage = document.createElement("img");
          jokeImage.setAttribute('src', data.message);
          dogImageContainer.appendChild(jokeImage);
          root.appendChild(dogImageContainer);

        })
      .catch(error => console.log(error))
  }
let jokeDogElement=()=>{
   getRandomDoggo();
   getDadJokes();
}
let clearImages=()=>{
    while(root.firstChild){
        root.removeChild(root.firstChild);
    }
}
  
getJoke.addEventListener('click',jokeDogElement);
clearButton.addEventListener('click', clearImages);
