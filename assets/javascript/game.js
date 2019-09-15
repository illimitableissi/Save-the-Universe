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

    guessedNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    console.log(guessedNumber)

    $(".guessed-number").html(guessedNumber);
    wins = 0;
    losses = 0;  
    counter = 0;
    stoneValueOne = Math.floor(Math.random() * 12) + 1;
    stoneValueTwo = Math.floor(Math.random() * 12) + 1;
    stoneValueThree = Math.floor(Math.random() * 12) + 1;
    stoneValueFour = Math.floor(Math.random() * 12) + 1;


    $("#stone1").on("click", function() {
        counter += stoneValueOne;
        alert("Total score increased to" + " " + counter);
        $(".total-number").html(counter);
        console.log(stoneValueOne);
        if (counter === guessedNumber) {
            alert("You win. Keep it up!");
            wins++;
            reset();
            $(".wins").html("Wins: " + " " + wins);
            
        } else if (counter >= guessedNumber) {
            alert("You lost. Thanos has acquired another Infinity stone!!!!");
            losses++;
            reset();
            $(".losses").html("Losses: " + " " + losses)
            
        }

        if(wins === 4){
            alert("You win. The universe is saved!!");
            $("#stones").html("<img src = '/assets/images/Thanos.gif'>")

        }
        if(losses === 1){
            $("#stone1").animate({ opacity: "0.30" });
        }

        if(losses === 2){
            $("#stone2").animate({ opacity: "0.30" });
        }

        if(losses === 3){
            $("#stone3").animate({ opacity: "0.30" });
        }

        if(losses === 4){
            alert(".....Doom");
            $("#stones").html("<img src = '/assets/images/Snap.gif'>")
        }
        

    });
    
    $("#stone2").on("click", function() {
        counter +=stoneValueTwo;
        alert("Total score increased to" + " " + counter);
        $(".total-number").html(counter);
        console.log(stoneValueTwo);
        if (counter === guessedNumber) {
            alert("You win. Keep it up!");
            wins++;
            reset();
            $(".wins").html("Wins: " + " " + wins)
        } else if (counter >= guessedNumber) {
            alert("You lost. Thanos has acquired another Infinity stone!!!!");
            losses++;
            reset();
            $(".losses").html("Losses: " + " " + losses)
            
        }

        if(wins === 4){
            alert("You win. The universe is saved!!");
            $("#stones").html("<img src = '/assets/images/Thanos.gif'>")

        }
        if(losses === 1){
            $("#stone1").animate({ opacity: "0.30" });
        }

        if(losses === 2){
            $("#stone2").animate({ opacity: "0.30" });
        }

        if(losses === 3){
            $("#stone3").animate({ opacity: "0.30" });
        }

        if(losses === 4){
            alert(".....Doom");
            $("#stones").html("<img src = '/assets/images/Snap.gif'>")
        }
        
    });
    
    $("#stone3").on("click", function() {
        counter +=stoneValueThree;
        alert("Total score increased to" + " " + counter);
        $(".total-number").html(counter);
        console.log(stoneValueThree);
        if (counter === guessedNumber) {
            alert("You win. Keep it up!");
            wins++;
            reset();
            $(".wins").html("Wins: " + " " + wins);
            
        } else if (counter >= guessedNumber) {
            alert("You lost. Thanos has acquired another Infinity stone!!!!");
            losses++;
            reset();
            $(".losses").html("Losses: " + " " + losses);
        }
        if(wins === 4){
            alert("You win. The universe is saved!!");
            $("#stones").html("<img src = '/assets/images/Thanos.gif'>")

        }
        if(losses === 1){
            $("#stone1").animate({ opacity: "0.30" });
        }

        if(losses === 2){
            $("#stone2").animate({ opacity: "0.30" });
        }

        if(losses === 3){
            $("#stone3").animate({ opacity: "0.30" });
        }

        if(losses === 4){
            alert(".....Doom");
            $("#stones").html("<img src = '/assets/images/Snap.gif'>")
        }
        
    });
    
    $("#stone4").on("click", function() { 
        counter +=stoneValueFour;
        alert("Total score increased to" + " " + counter);
        $(".total-number").html(counter);
        console.log(stoneValueFour);
        if (counter === guessedNumber) {
            alert("You win. Keep it up!");
            wins++;
            reset();
            $(".wins").html("Wins: " + " " + wins)
            
        } else if (counter >= guessedNumber) {
            alert("You lost. Thanos has acquired another Infinity stone!!!!");
            losses++;
            $(".losses").html("Losses: " + " " + losses);
            reset();
            
        }

        if(wins === 4){
            alert("You win. The universe is saved!!");
            $("#stones").html("<img src = '/assets/images/Thanos.gif'>")

        }
        if(losses === 1){
            $("#stone1").animate({ opacity: "0.30" });
        }

        if(losses === 2){
            $("#stone2").animate({ opacity: "0.30" });
        }

        if(losses === 3){
            $("#stone3").animate({ opacity: "0.30" });
        }

        if(losses === 4){
            alert(".....Doom");
            $("#stones").html("<img src = '/assets/images/Snap.gif'>")
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
