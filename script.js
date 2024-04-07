console.log('W = wins, D = draws, L = losses')
function game () {
    let humanScore, computerScore, drawScore;
    humanScore = 0
    computerScore = 0
    drawScore = 0

    for (let i = 0; i=5; i++) {
         let answer = prompt('Rock, Paper or Scissors')

        //all the possible answers computer can come up with.
         let possibleAnswer = ['Rock', 'Paper', 'Scissors']

         let randomAnswer = possibleAnswer[Math.floor(Math.random() * possibleAnswer.length)]
         const checker = () => {
            if(randomAnswer === answer) {
                drawScore = drawScore+1
                console.log(`This was a win new score is ${humanScore}W:${drawScore}D:${computerScore}L`) 
            } else if (answer === 'Paper' && randomAnswer === 'Rock') {
                humanScore = humanScore + 1
                console.log(`This was a win new score is ${humanScore}W:${drawScore}D:${computerScore}L`) 
            } else if (answer === 'Scissors' && randomAnswer === 'Paper') {
                humanScore = humanScore + 1
                console.log(`This was a win new score is ${humanScore}W:${drawScore}D:${computerScore}L`)
            } else if (answer === 'Rock' && randomAnswer === 'Scissors') {
                humanScore = humanScore + 1
                console.log(`This was a win new score is ${humanScore}W:${drawScore}D:${computerScore}L`)
            } else if (answer === 'Paper' && randomAnswer === 'Rock') {
                humanScore = humanScore + 1
                console.log(`This was a win new score is ${humanScore}W:${drawScore}D:${computerScore}L`)
            } else {
                computerScore = computerScore + 1
                console.log(`This was a loss new score is ${humanScore}W:${drawScore}D:${computerScore}L`)
            } 
        checker()
        }
    }
}
setTimeout(game, 1500)