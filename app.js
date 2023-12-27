let userScore = 0;
let compScore = 0;

let btn = document.querySelector("button");

const userScorePara = document.querySelector("#user-count");
const compScorePara = document.querySelector("#comp-count");


const choices = document.querySelectorAll(".choices");

const drawGame = () => {
    console.log("game is draw...");
    btn.innerText = "Game draw ! Play Again 🌟";
    btn.style.background = "#070a2e";
}

const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win...");
        btn.innerText = "you win ! 😎";
        btn.style.background = "green";
    }else{
        compScore++;
        compScorePara.innerText = userScore;
        console.log("you lose...");
        btn.innerText = "you lose 🥺";
        btn.style.background = "red";
    }
}

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const playGame = (userChoice) => {
    console.log("user choice is ", userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice is ", compChoice);


    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;

        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id"); // Define userChoice within this scope
        // console.log("user choice is ", userChoice);
        playGame(userChoice); // Pass userChoice to the playGame function
    });
});
