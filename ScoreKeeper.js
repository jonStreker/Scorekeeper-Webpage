//pointers for each element id
const currentScoreOne = document.querySelector("#playerOne")
const currentScoreTwo = document.querySelector("#playerTwo")
const maxScore = document.querySelector("#scoreLimit");
const plusPlayerOne = document.querySelector("#plusPlayerOne");
const plusPlayerTwo = document.querySelector("#plusPlayerTwo");
const resetScore = document.querySelector("#resetScore")

//variables to connect/inform the above pointers
let playerOneScore = 0;
let playerTwoScore = 0;
let winningScore = 5;
let isGameOver = false;

//clear the scores and then set the new limit to whatever value is in the select field
maxScore.addEventListener('change', event => {
    reset();
    winningScore = parseInt(maxScore.value);
})

//on each click it checks if the game is over and if NOT, then it adds 1
plusPlayerOne.addEventListener('click', event => {
    //if the game is not over, add 1 to player one's score
    if (!isGameOver) {
        playerOneScore += 1;
        currentScoreOne.innerHTML = playerOneScore;

        //if the game is over change isGameOver to lock the scores, then change winner to green and loser to red
        if (playerOneScore === winningScore) {
            isGameOver = true;
            currentScoreOne.style.color = "green"
            currentScoreTwo.style.color = "red"
        }
    }
});

//same as above but for player two
plusPlayerTwo.addEventListener('click', event => {
    if (!isGameOver) {
        playerTwoScore += 1;
        currentScoreTwo.innerHTML = playerTwoScore;
        if (playerTwoScore === winningScore) {
            isGameOver = true;
            currentScoreOne.style.color = "red"
            currentScoreTwo.style.color = "green"
        }
    }
});

//listen for the click, then execute the reset function
resetScore.addEventListener('click', reset)

//reset everything to its original state on entering the page
function reset() {
    isGameOver = false;
    playerOneScore = 0;
    playerTwoScore = 0;
    currentScoreOne.innerHTML = 0;
    currentScoreTwo.innerHTML = 0;
    currentScoreOne.style.color = "black"
    currentScoreTwo.style.color = "black"
}