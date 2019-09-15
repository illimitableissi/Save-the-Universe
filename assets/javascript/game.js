var wins = 0;
var losses = 0;
var counter = 0;
var stoneValueOne = Math.floor(Math.random() * 12) + 1;
var stoneValueTwo = Math.floor(Math.random() * 12) + 1;
var stoneValueThree = Math.floor(Math.random() * 12) + 1;
var stoneValueFour = Math.floor(Math.random() * 12) + 1;
var guessedNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);


$(".total-number").html(counter);
$(".wins").html("Wins: " + " " + wins)
$(".losses").html("Losses: " + " " + losses)

$(document).ready(function() {

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
        console.log(stoneValueOne);
        if (counter === guessedNumber) {
            alert("You win. The universe is saved!!");
            wins++;
            reset();
            $(".wins").html("Wins: " + " " + wins);
            
        } else if (counter >= guessedNumber) {
            alert("You lost. Thanos has acquired annother Infinity stone!!!!");
            losses++;
            reset();
            $(".losses").html("Losses: " + " " + losses)
            
        }
        

    });
    
    $("#stone2").on("click", function() {
        counter +=stoneValueTwo;
        alert("Total score increased to" + " " + counter);
        $(".total-number").html(counter);
        console.log(stoneValueTwo);
        if (counter === guessedNumber) {
            alert("You win. The universe is saved!!");
            wins++;
            reset();
            $(".wins").html("Wins: " + " " + wins)
        } else if (counter >= guessedNumber) {
            alert("You lost. Thanos has acquired another Infinity stone!!!!");
            losses++;
            reset();
            $(".losses").html("Losses: " + " " + losses)
            
        }
        
    });
    
    $("#stone3").on("click", function() {
        counter +=stoneValueThree;
        alert("Total score increased to" + " " + counter);
        $(".total-number").html(counter);
        console.log(stoneValueThree);
        if (counter === guessedNumber) {
            alert("You win. The universe is saved!!");
            wins++;
            reset();
            $(".wins").html("Wins: " + " " + wins);
            
        } else if (counter >= guessedNumber) {
            alert("You lost. Thanos has acquired another Infinity stone!!!!");
            losses++;
            reset();
            $(".losses").html("Losses: " + " " + losses);
            
        }
        
    });
    
    $("#stone4").on("click", function() { 
        counter +=stoneValueFour;
        alert("Total score increased to" + " " + counter);
        $(".total-number").html(counter);
        console.log(stoneValueFour);
        if (counter === guessedNumber) {
            alert("You win. The universe is saved!!");
            wins++;
            reset();
            $(".wins").html("Wins: " + " " + wins)
            
        } else if (counter >= guessedNumber) {
            alert("You lost. Thanos has acquired another Infinity stone!!!!");
            losses++;
            $(".losses").html("Losses: " + " " + losses);
            reset();
            
        }
        
    });


function reset() {

guessedNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
console.log(guessedNumber)
$(".guessed-number").html(guessedNumber);
counter = 0;
stoneValueOne = Math.floor(Math.random() * 12) + 1;
stoneValueTwo = Math.floor(Math.random() * 12) + 1;
stoneValueThree = Math.floor(Math.random() * 12) + 1;
stoneValueFour = Math.floor(Math.random() * 12) + 1;

}


});
