const API = "https://pokeapi.co/api/v2/pokemon/"

//API

let palabraSecreta =""
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        const nombresPokemon = data.results.map((pokemon) => pokemon.name);
        const randomIndex = Math.floor(Math.random() * nombresPokemon.length);
        palabraSecreta = nombresPokemon[randomIndex].toUpperCase();
        console.log(palabraSecreta);
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  

let oportunidades = 6 

let button = document.getElementById("guess-button")
let input = document.getElementById("guess-input")
let grid = document.getElementById("grid")

button.addEventListener("click",enter)

function enter(){
    let intento = input.value.toUpperCase() 
        if(intento.length != palabraSecreta.length){
            alert("la palabra debe contenter" + palabraSecreta.length +"letras");
            enter();
        }
            
    
        }
    console.log(intento)
    if (intento ==palabraSecreta){
        gameOver("Ganaste")
        confetti();
    }
    let row = document.createElement("div")
    row.className = "row"
    for (let i in palabraSecreta){
        let letra = document.createElement("span")
        letra.className = "letter"
        letra.innerHTML = intento[i]
        if (palabraSecreta[i] == intento[i]){
            letra.style.backgroundColor = "#9bfab0"
        }else if ( palabraSecreta.includes(intento[i])){
            letra.style.backgroundColor = '#FFD94D'
        }else{
            letra.style.backgroundColor = '#aaaaaa'
        }
        row.appendChild(letra)
    }
    grid.appendChild(row)
    oportunidades--
    if (oportunidades == 0){
        gameOver("Perdiste")
    }



function gameOver(mensaje){
    button.disabled = true
    input.disabled = true
    let contenedor = document.getElementById("guesses")
    contenedor.innerHTML = "<h1>" + mensaje + "</h1>"
    
}
