let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScore = document.querySelector("#userscore");
const compScore = document.querySelector("#compscsore");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndx = Math.floor(Math.random() * 3);
    return options[randomIndx];
};

const drawGame = () => {
    console.log("game was draw");
    msg.innerText= "Game was draw play again";
};

const showWin = (userWin , userChoice, compChoice) => {
    if(userWin) {
        userscore++;
        userScore.innerText = userscore;
        console.log("you win");
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
    }
    else 
    {
        computerscore++;
        compScore.innerText = computerscore;
        console.log("you lose");
        msg.innerText = `you lost. ${compChoice} beats your ${userchoice} `;
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ",userChoice);
    //generate computer choice;
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice) 
    {
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper")
        {
            userWin = compChoice === "scissors" ? false : true;
        } 
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWin(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});