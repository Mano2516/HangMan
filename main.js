let letters = 'abcdefghijklmnopqrstuvwxyz';

let lettersArray = Array.from(letters)

let lettersContainer = document.querySelector(".letters");

lettersArray.forEach(letter => {

    let span =document.createElement("span");

    let letterText = document.createTextNode(letter);

    span.appendChild(letterText)

    span.className='letter-box';

    lettersContainer.appendChild(span);

});

let words = {
    programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python" , "HTML" , "React"],
    movies: ["Hacksaw Ridge", "The Beekeeper", "Hunger Games", "Interstellar", "Fast and Furious", "The Meg", "Coco", "Up"],
    people: ["Albert Einstein", "Wessam Abu Ali", "Mohamed Salah", "Cleopatra", "Mahmoud Mohamed"],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
}

let allKeys = Object.keys(words);
// console.log(allKeys)

// console.log(allKeys.length)
let randomPropNum = Math.floor( Math.random() * allKeys.length);

let randomPropName = allKeys[randomPropNum];

let randomPropValue = words[randomPropName];

let randomValueNumber = Math.floor(Math.random()*randomPropValue.length)

let randomValueVlaue = randomPropValue[randomValueNumber];

let without = randomValueVlaue.toLowerCase().replace(/\s/g, "");
let set = new Set(without)
// console.log(set)
let final = Array.from(set);

// console.log(final.length)


document.querySelector(".game-info .category span").innerHTML=randomPropName;

let lettersGuessContainer = document.querySelector(".letters-guess")

let lettersAndSpace = Array.from(randomValueVlaue);

lettersAndSpace.forEach(letter => {

    let span = document.createElement("span");

    if(letter==' '){

        span.className="has-space";

    }

    lettersGuessContainer.appendChild(span)

})

let guessSpan = document.querySelectorAll(".letters-guess span");

let wrong = 0;
let tries = 0 ;

let theDraw =document.querySelector(".hangman-draw")

document.addEventListener("click",(e)=>{

    let theStatus = false;

    if(e.target.className==="letter-box") {

        e.target.classList.add("clicked");

        let theClickedLetter = e.target.innerHTML.toLowerCase();

        let theChosenWord = Array.from(randomValueVlaue.toLowerCase());

        // console.log(theChosenWord)

        // console.log(theClickedLetter);

        // console.log(lettersAndSpace)

        theChosenWord.forEach((wordLetter , wordIndex)=>{

            if(theClickedLetter===wordLetter){

                theStatus=true;

                guessSpan.forEach((span , spanIndex)=>{

                    if(wordIndex===spanIndex){

                        span.innerHTML= theClickedLetter;

                    }

                })

            }

            // e.target.classList.remove("clicked");

        })

        if(theStatus!==true) {

            wrong++;

            theDraw.classList.add(`wrong-${wrong}`);

            document.getElementById('fail').play();

            if(wrong===8){

                endGame();

                lettersContainer.classList.add("finished");

            }

        }else{

            document.getElementById('win').play();

            tries++;

            // console.log(tries)

        }
        


    }

    // console.log(final)
    // console.log(tries)
    if(tries=== final.length){
        // console.log("ss")
        lettersContainer.classList.add("finished");

        let div = document.createElement("div");

        divText = document.createTextNode(`Great Work You Make ${wrong} Wrong Tries`)
    
        div.appendChild(divText);
    
        div.className="pop-win";
    
        document.body.appendChild(div)


    }

})

function endGame(){

    let div = document.createElement("div");

    divText = document.createTextNode(`Game Over The Word Is ${randomValueVlaue}`)

    div.appendChild(divText);

    div.className="pop";

    document.body.appendChild(div)

}


// if(tries === final.lenght) {

//     lettersContainer.classList.add("finished");

//     let div = document.createElement("div");

//     divText = document.createTextNode(`Great Work You do ${wrong} Tries`)

//     div.appendChild(divText);

//     div.className="pop-win";

//     document.body.appendChild(div)

// }