// let userScore = 0;
// let computerScore =0;


// const choices = document.querySelectorAll(".choice");
// const msg = document.querySelector("#msg");


// const userScorePara = document.querySelector("#user-score");
// const computerScorePara = document.querySelector("#computer-score");


// const genComputerChoice = () => {
//     //// rock,paper, scissors
// const options = ["rock","paper","scissors"];
// const randIdx = Math.floor(Math.random() * 3);
// return options[randIdx];

// };

// const showWinner =(userWin) => {
//     if(userWin){
//         userScore++;
//         userScorePara.innerText = userScore;

//         // console.log("you win!");
//         msg.innerText = "you Win!"
//         msg.style.backgroundColor = "green";
//     }else {
//         computerScore++;
//         computerScorePara.innerText = computerScore;

//         // console.log("you lose");
//         msg.innerText = "you lose!"
//         msg.style.backgroundColor = "red";
//     }
// }

// const drawGame = () => {
//     // console.log("game was draw.");
//     msg.innerText = "game was draw! play again"
//     msg.style.backgroundColor = "purple";
// }


// const playgame = (userChoice) => {
// console.log("user Choice = ", userChoice);

// const computerChoice = genComputerChoice();
// console.log("computerChoice = " , computerChoice);


// if(userChoice === computerChoice) {
//     drawGame();
// } else {
//     let userWin = true;
//     if(userChoice === "rock"){
//         // scissors, paper
//         userWin = computerChoice === "paper" ? false : true;

//     }else if(userChoice === "paper"){
//        userWin = computerChoice === "scissors" ? false : true;
//     } else{
//         computerChoice === "rock" ? false : true;
//     }

//     showWinner(userWin);
// }

// };



// choices.forEach((choice) => {
//     choice.addEventListener("click",() => {
//         const userChoice = choice.getAttribute("id")
//         // console.log("choice was clicked",userChoice);
//         playgame(userChoice);
//     });
// });










// const student = {
//     fullname : "Rachit",
//     marks: 89.8,
//     printMarks: function () {
//         console.log("marks = ", marks);
//     },
// };