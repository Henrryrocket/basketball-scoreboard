const homeScoreValue = document.getElementById("home-score-value");
const guestScoreValue = document.getElementById("guest-score-value");

let homeScore = 0;
let guestScore = 0;

//Set initial values
homeScoreValue.textContent = homeScore;
guestScoreValue.textContent = guestScore;

//Add +1 point to home score
function addPointHome() {
  homeScore += 1;
  homeScoreValue.textContent = homeScore;
}
//Add +1 point to guest score
function addPointGuest() {
  guestScore += 1;
  guestScoreValue.textContent = guestScore;
}
//Add +2 points to home score
function addTwoPointsHome() {
  homeScore += 2;
  homeScoreValue.textContent = homeScore;
}
//Add +2 points to guest score
function addTwoPointsGuest() {
  guestScore += 2;
  guestScoreValue.textContent = guestScore;
}
//Add +3 points to home score
function addThreePointsHome() {
  homeScore += 3;
  homeScoreValue.textContent = homeScore;
}
//Add +3 points to guest score
function addThreePointsGuest() {
  guestScore += 3;
  guestScoreValue.textContent = guestScore;
}

function resetValuesHome() {
  homeScoreValue.textContent = "0";
  homeScore = 0;
}
function resetValuesGuest() {
  guestScoreValue.textContent = "0";
    guestScore = 0;
}
