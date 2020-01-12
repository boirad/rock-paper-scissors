let userScore = 0;
let cpuScore = 0;
const user_div = document.getElementById("user");
const cpu_div = document.getElementById("cpu");
const userScore_div = document.getElementById("user-score");
const cpuScore_div = document.getElementById("cpu-score");
const result_p = document.querySelector("#result-area > .result");
const winner_p = document.querySelector("#result-area > .winner");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCpuChoice() {
    const choices = ["r", "p", "s"];
    let randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter == "r") return "Rock";
    if (letter == "p") return "Paper";
    return "Scissors";
}

function win(userChoice, cpuChoice) {
    const userChoice_div = document.getElementById(userChoice);
    const smallUserIcon = "<i class='fas fa-user'></i>".fontsize("6").sub();
    const smallCpuIcon = "<i class='fas fa-robot'></i>".fontsize("6").sub();
    userScore++;
    userScore_div.innerHTML = userScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserIcon} beats ${convertToWord(cpuChoice)}${smallCpuIcon}`;
    winner_p.innerHTML = "YOU WIN!";
    userChoice_div.classList.add("green-glow");
    setTimeout(() => userChoice_div.classList.remove("green-glow"), 300);
    user_div.classList.add("winner-badge");
    setTimeout(() => user_div.classList.remove("winner-badge"), 300);
};

function lose(userChoice, cpuChoice) {
    const userChoice_div = document.getElementById(userChoice);
    const smallUserIcon = "<i class='fas fa-user'></i>".fontsize("6").sub();
    const smallCpuIcon = "<i class='fas fa-robot'></i>".fontsize("6").sub();
    cpuScore++;
    cpuScore_div.innerHTML = cpuScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserIcon} lose against ${convertToWord(cpuChoice)}${smallCpuIcon}`;
    winner_p.innerHTML = "YOU LOST!";
    userChoice_div.classList.add("red-glow");
    setTimeout(() => userChoice_div.classList.remove("red-glow"), 300);
    cpu_div.classList.add("winner-badge");
    setTimeout(() => cpu_div.classList.remove("winner-badge"), 300);
};

function draw(userChoice, cpuChoice) {
    const userChoice_div = document.getElementById(userChoice);
    const smallUserIcon = "<i class='fas fa-user'></i>".fontsize("6").sub();
    const smallCpuIcon = "<i class='fas fa-robot'></i>".fontsize("6").sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserIcon} equals ${convertToWord(cpuChoice)}${smallCpuIcon}`;
    winner_p.innerHTML = "IT'S A DRAW!";
    userChoice_div.classList.add("gray-glow");
    setTimeout(() => userChoice_div.classList.remove("gray-glow"), 300);
}

function game(userChoice) {
    const cpuChoice = getCpuChoice();
    switch(userChoice + cpuChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, cpuChoice)
            break
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, cpuChoice);
            break
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, cpuChoice);
            break
    }

    if(userScore == 5){
        alert("User win! Let's play again!")
        userScore_div.innerHTML = "0";
        cpuScore_div.innerHTML = "0";
        userScore = 0;
        cpuScore = 0;
        result_p.innerHTML = "";
        winner_p.innerHTML = "";
    } else if (cpuScore == 5){
        alert("Cpu win! Let's play again")
        userScore_div.innerHTML = "0";
        cpuScore_div.innerHTML = "0";
        userScore = 0;
        cpuScore = 0;
        result_p.innerHTML = "";
        winner_p.innerHTML = "";
    }
}



function main() {
    rock_div.addEventListener("click", () => game("r"));
    paper_div.addEventListener("click", () => game("p"));
    scissors_div.addEventListener("click", () => game("s"));
}

main();
