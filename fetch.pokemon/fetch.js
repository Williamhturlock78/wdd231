setTimeout(function(){
    console.log("async");
} , 2000);

console.log("synchronous");

const urlList= "https://pokeapi.co/api/v2/pokemon";

async function getPokemonList(url) {
    const response = await fetch(url);
    if (response.ok) {
        const data =response.json()
    }

}

function doStuffList(data){
    console.log(data.results);
    const pokeListElement= document.querySelector("#outputList");
    const pokeList= data.results;
    pokeList.forEach ((currentItem)=>{
        const html= `<li>${currentItem.name}</li>`;
        pokeListElement.innerHTLM +=html;
    })
}

getPokemonList(urlList);