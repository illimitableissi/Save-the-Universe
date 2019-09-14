var targetNumbers = [40, 55, 79, 120, 20, 65, 88, 30, 100]
var stoneValues = [1,2,3,4,5,6,7,8,9,10,11,12]

var guessedNumber = targetNumbers[Math.floor(Math.random() * targetNumbers.length)];
var stoneValue = stoneValues[Math.floor(Math.random() * stoneValues.length)];

$(".guessed-number").text(guessedNumber)
$(".total-number").text(counter)



function startGame(){
    
    var counter = 0;
    $("#stone1").on("click", function() {
        counter +=stoneValue;
    });
    
    $("#stone2").on("click", function() {
        counter +=stoneValue;
    });
    
    $("#stone3").on("click", function() {
        counter +=stoneValue;
    })
    
    $("#stone4").on("click", function() {
        counter +=stoneValue;
    });

if (counter === targetNumber) {
    alert("You win. The universe is saved!!");
    wins++;
    $(".wins").html("Wins: " + " " + wins)
    startGame()

} else if (counter >= targetNumber) {
    alert("You lost. Thanos has acquired annother Infinity stone!!!!");
    losses++;
    $(".losses").html("Losses: " + " " + losses)
    startGame()
}

startGame()







}