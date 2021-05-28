async function fetchFact(){
    const response = await fetch('https://api.chucknorris.io/jokes/random');

    if(!response.ok){
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    const text = await response.json();
    console.log(text);
    return text;
}

fetchFact().then(text => {
    let el = document.getElementById('fact');
    el.innerHTML = text.id;
    console.log(text.value);
})

document.getElementById("btn").addEventListener("click", function() {
    fetchFact().then(text => {
        let el = document.getElementById('fact');
        el.innerHTML = text.value;
        console.log(text.value);
    })
    
  }); 
  
