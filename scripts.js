let rockImg = "/imagens/rock-hand.png"
let paperImg = "/imagens/paper-hand.png"
let scissorsImg = "/imagens/scissors-hand.png"
let draw = "/imagens/draw.png"
let loser = "/imagens/loser.png"
let winner = "/imagens/youWin.png"

let machineChoices = ["rock", "paper", "scissor"]

let teste

function sortear(){
    let randomNumber = () => Math.floor(Math.random() * (3))
    let machineChoice = machineChoices[randomNumber(0, machineChoices.length - 1)]

    switch (machineChoice) {
        case "rock":
            machineChoice = rockImg
            teste = 0
            break
        case "paper":
            machineChoice = paperImg
            teste = 1
            break
        case "scissor":
            machineChoice = scissorsImg
            teste = 2
            break
        default:
            alert("Tem alguma coisa errada ai mestre")
            break
    }
    return machineChoice
}
function verificaResult(machineResult, playerResult){
    if (machineResult == playerResult){
        document.getElementById("x1Img").src = draw
    }else if(machineResult == 0 && playerResult == 2){
        document.getElementById("x1Img").src = loser
        scoreMachine()
    }else if(machineResult == 2 && playerResult == 1){
        document.getElementById("x1Img").src = loser
        scoreMachine()
    }else if(machineResult == 1 && playerResult == 0){
        document.getElementById("x1Img").src = loser
        scoreMachine()
    }else if(machineResult == 2 && playerResult == 0){
        document.getElementById("x1Img").src = winner
        scorePlayer()
    }else if(machineResult == 1 && playerResult == 2){
        document.getElementById("x1Img").src = winner
        scorePlayer()
    }else if(machineResult == 0 && playerResult== 1){
        document.getElementById("x1Img").src = winner
        scorePlayer()
    }
}
function rockChoice(){
    let teste2 = 0

    let machineChoice = sortear()
    
    let imgAtual = document.getElementById("Rock-hand").src
    
    let playerChoice = imgAtual
    document.getElementById("player").src = playerChoice

    document.getElementById("machine").src = machineChoice

    verificaResult(teste, teste2)
}
function paperChoice(){
    let teste2 = 1

    let machineChoice = sortear()

    let imgAtual = document.getElementById("Paper-hand").src
    let playerChoice = imgAtual
    document.getElementById("player").src = playerChoice

    document.getElementById("machine").src = machineChoice

    verificaResult(teste, teste2)
}
function scissorChoice(){
    let teste2 = 2
    
    let machineChoice = sortear()

    let imgAtual = document.getElementById("Scissor-hand").src
    let playerChoice = imgAtual
    document.getElementById("player").src = playerChoice

    document.getElementById("machine").src = machineChoice

    verificaResult(teste, teste2)
}
let pScore = 1
function scorePlayer(){
    document.getElementById("playerScore").innerHTML = pScore++
}
let mScore = 1
function scoreMachine(){
    document.getElementById("computerScore").innerHTML = mScore++
}






