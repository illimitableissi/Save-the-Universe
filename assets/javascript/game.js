var wins = 0;
var losses = 0;
var targetNumbers = [40, 55, 79, 120, 20, 65, 88, 30, 100]
var stoneValues = [1,2,3,4,5,6,7,8,9,10,11,12]
console.log(targetNumbers);
var counter = 0
var guessedNumber = targetNumbers[Math.floor(Math.random() * targetNumbers.length)];
var stoneValue = stoneValues[Math.floor(Math.random() * stoneValues.length)];
console.log(guessedNumber)
console.log(stoneValue)

$(".guessed-number").html(guessedNumber);
$(".total-number").html(counter);
$(".wins").html("Wins: " + " " + wins)
$(".losses").html("Losses: " + " " + losses)

    function startGame(){
    wins = 0;
    losses = 0;  
    counter = 0;

stoneValue = parseInt(stoneValue);

    $("#stone1").on("click", function() {
        stoneValue = stoneValues[Math.floor(Math.random() * stoneValues.length)];
        counter +=stoneValue;
        alert("Total score increased by" + " " + stoneValue)
    });

    $("#stone2").on("click", function() {
        stoneValue = stoneValues[Math.floor(Math.random() * stoneValues.length)];
        counter +=stoneValue;
        alert("Total score increased by" + " " + stoneValue)
    });
    
    $("#stone3").on("click", function() {
        stoneValue = stoneValues[Math.floor(Math.random() * stoneValues.length)];
        counter +=stoneValue;
        alert("Total score increased by" + " " + stoneValue)
    })
    
    $("#stone4").on("click", function() {
        stoneValue = stoneValues[Math.floor(Math.random() * stoneValues.length)];
        counter +=stoneValue;
        alert("Total score increased by" + " " + stoneValue)
    });

if (counter === guessedNumber) {
    alert("You win. The universe is saved!!");
    wins++;
    startGame()
    $(".wins").html("Wins: " + " " + wins)

} else if (counter >= guessedNumber) {
    alert("You lost. Thanos has acquired annother Infinity stone!!!!");
    losses++;
    startGame()
    $(".losses").html("Losses: " + " " + losses)
}

}


startGame()

