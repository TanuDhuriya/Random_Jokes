fetch('https://hindi-jokes-api.onrender.com/jokes?api_key=ff31b9d3ca996a23be1de95df41a')
 .then(data=> data.json())
 .then(jokeData => {
    const jokeText = jokeData.jokeContent;
    const joke = document.getElementById('joke');
    joke.innerHTML = jokeText;
 })
