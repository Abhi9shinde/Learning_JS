console.log("connected");
const player_1 = document.querySelector("#play1_incre");
const player_2 = document.querySelector("#play2_incre");
const score1 = document.querySelector('#play1');
const score2 = document.querySelector('#play2');
const reset = document.querySelector("#reset");
const winningScore = document.querySelector("#play_till");
let sum1 = 0;
let sum2 = 0;
let winning_score = 3;
let isGameOver = false;
winningScore.addEventListener('change', function () {
    winning_score = parseInt(this.value);
    reseting();
});
player_1.addEventListener('click', function () {
    if (!isGameOver) {
        sum1++;
        if (sum1 === winning_score) {
            isGameOver = true;
            score1.classList.add('winner');
            score2.classList.add('loser');
        }
        score1.textContent = sum1;
    }
});
player_2.addEventListener('click', function () {
    if (!isGameOver) {
        sum2++;
        if (sum2 === winning_score) {
            isGameOver = true;
            score1.classList.add('loser');
            score2.classList.add('winner');

        }
        score2.textContent = sum2;
    }
});

reset.addEventListener('click', reseting);
function reseting() {
    isGameOver = false;
    sum1 = 0;
    sum2 = 0;
    score1.textContent = "0";
    score2.textContent = "0";
    score1.classList.remove('winner', 'loser');
    score2.classList.remove('loser', 'winner');
};
