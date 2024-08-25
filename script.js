let userChoice = document.querySelector(".user-choice");
let compChoice = document.querySelector(".comp-choice");
let stone = document.querySelector(".stone");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");
let userChoiceMade = document.querySelectorAll(".option");
let displayResult = document.querySelector(".game-result");

let userScore = Number(document.querySelector(".user-score").innerText);
let compScore = Number(document.querySelector(".comp-score").innerText);

// console.log(userChoice.children[3]);

let generateNum;

stone.addEventListener("click", () => {
    userChoice.children[0].classList.remove("hide");
    userChoice.children[1].classList.add("hide");
    userChoice.children[2].classList.add("hide");
    userChoice.children[3].classList.add("hide");
    compChoiceMade();
    // checkWinner();
    // console.log(generateNum);
    
    if(generateNum == 0){
        draw();
    }
    if(generateNum == 1){
        lost();
    }
    if(generateNum == 2){
        won();
    }
    
})
paper.addEventListener("click", () => {
    userChoice.children[0].classList.add("hide");
    userChoice.children[1].classList.remove("hide");
    userChoice.children[2].classList.add("hide");
    userChoice.children[3].classList.add("hide");
    compChoiceMade();
    
    if(generateNum == 0){
        won();
    }
    if(generateNum == 1){
        draw();
    }
    if(generateNum == 2){
        lost();
    }
    
})
scissor.addEventListener("click", () => {
    userChoice.children[0].classList.add("hide");
    userChoice.children[1].classList.add("hide");
    userChoice.children[2].classList.remove("hide");
    userChoice.children[3].classList.add("hide");
    
    compChoiceMade();

    switch(generateNum) {
        case 0: 
            lost();
            break;
        case 1:
            won();
            break;
        case 2:
            draw();
            break;
    }
})

const compChoiceMade = () => {
    generateNum = Math.floor(Math.random() * 3);

    switch(generateNum) {
        case 0:
            compChoice.children[0].classList.remove("hide");
            compChoice.children[1].classList.add("hide");
            compChoice.children[2].classList.add("hide");
            compChoice.children[3].classList.add("hide");
            break;
            case 1:
                compChoice.children[0].classList.add("hide");
                compChoice.children[1].classList.remove("hide");
                compChoice.children[2].classList.add("hide");
                compChoice.children[3].classList.add("hide");
                break;
                case 2:
                    compChoice.children[0].classList.add("hide");
                    compChoice.children[1].classList.add("hide");
                    compChoice.children[2].classList.remove("hide");
                    compChoice.children[3].classList.add("hide");
                    break;
    }
}


const draw = () => {
    displayResult.innerText = "It's a Draw";
    displayResult.style.backgroundColor = "#c5c5c5";
    displayResult.style.color = "black";
}
const lost = () => {
    displayResult.innerText = "Oh ohh!! You Lost";
    displayResult.style.backgroundColor = "#ffa2a2";
    displayResult.style.color = "black";
    compScore++;
    document.querySelector(".comp-score").innerText = compScore;
}
const won = () => {
    displayResult.innerText = "Wohoo!! You Won";
    displayResult.style.backgroundColor = "#c6ffa0";
    displayResult.style.color = "black";
    userScore++;
    document.querySelector(".user-score").innerText = userScore;
}



