var wins = 0;
var losses = 0;
var stoneValues = [1,2,3,4,5,6,7,8,9,10,11,12]
var counter = 0

$(".total-number").html(counter);
$(".wins").html("Wins: " + " " + wins)
$(".losses").html("Losses: " + " " + losses)

function startGame(){
    var guessedNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    console.log(guessedNumber)

    $(".guessed-number").html(guessedNumber);
    wins = 0;
    losses = 0;  
    counter = 0;
    var stoneValueOne = Math.floor(Math.random() * 12) + 1;
    var stoneValueTwo = Math.floor(Math.random() * 12) + 1;
    var stoneValueThree = Math.floor(Math.random() * 12) + 1;
    var stoneValueFour = Math.floor(Math.random() * 12) + 1;


    $("#stone1").on("click", function() {
        counter += stoneValueOne;
        alert("Total score increased to" + " " + counter);
        $(".total-number").html(counter);
        console.log(stoneValueOne)

    });
    
    $("#stone2").on("click", function() {
        counter +=stoneValueTwo;
        alert("Total score increased to" + " " + counter);
        $(".total-number").html(counter);
        console.log(stoneValueTwo)
    });
    
    $("#stone3").on("click", function() {
        counter +=stoneValueThree;
        alert("Total score increased to" + " " + counter);
        $(".total-number").html(counter);
        console.log(stoneValueThree)
    });
    
    $("#stone4").on("click", function() { 
        counter +=stoneValueFour;
        alert("Total score increased to" + " " + counter);
        $(".total-number").html(counter);
        console.log(stoneValueFour)
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

