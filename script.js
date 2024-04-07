console.log('W = wins, D = draws, L = losses')

let humanScore, computerScore, drawScore;
humanScore = 0
computerScore = 0
drawScore = 0

while (computerScore < 5 || humanScore < 5) {
     let answer = prompt('Rock, Paper or Scissors')

    //all the possible answers computer can come up with.
     let possibleAnswer = ['Rock', 'Paper', 'Scissors']

     let randomAnswer = possibleAnswer[Math.floor(Math.random() * possibleAnswer.length)]
     const checker = () => {
        if(answer === 'Rock' && randomAnswer === 'Rock') {
            drawScore = drawScore + 1
            console.log(`This was a draw new score is ${humanScore}W:${drawScore}D:${computerScore}L`)
        } else if (answer === 'Paper' && randomAnswer === 'Paper') {
            drawScore = drawScore + 1
            console.log(`This was a draw new score is ${humanScore}W:${drawScore}D:${computerScore}L`)
        } else if (answer === 'Scissors' && randomAnswer === 'Scissors') {
            drawScore = drawScore + 1
            console.log(`This was a draw new score is ${humanScore}W:${drawScore}D:${computerScore}L`)
        } else if (answer === 'Paper' && randomAnswer === 'Rock') {
            humanScore = humanScore + 1
            console.log(`This was a win new score is ${humanScore}W:${drawScore}D:${computerScore}L`) 
        } /*Wins*/else if (answer === 'Scissors' && randomAnswer === 'Paper') {
            humanScore = humanScore + 1
            console.log(`This was a win new score is ${humanScore}W:${drawScore}D:${computerScore}L`)
        } else if (answer === 'Rock' && randomAnswer === 'Scissors') {
            humanScore = humanScore + 1
            console.log(`This was a win new score is ${humanScore}W:${drawScore}D:${computerScore}L`)
        } else if (answer === 'Paper' && randomAnswer === 'Rock') {
            humanScore = humanScore + 1
            console.log(`This was a win new score is ${humanScore}W:${drawScore}D:${computerScore}L`)
        } /* Losses */ else if (answer === 'Scissors' && randomAnswer === 'Rock') {
            computerScore = computerScore + 1
            console.log(`This was a loss new score is ${humanScore}W:${drawScore}D:${computerScore}L`)
        } else if (answer === 'Paper' && randomAnswer === 'Scissors') {
            computerScore = computerScore + 1
            console.log(`This was a loss new score is ${humanScore}W:${drawScore}D:${computerScore}L`)
        } else if (answer === 'Rock' && randomAnswer === 'Paper') {
            computerScore = computerScore + 1
            console.log(`This was a loss new score is ${humanScore}W:${drawScore}D:${computerScore}L`)
        }
    } 
    checker()
}