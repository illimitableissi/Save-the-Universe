var targetNumber = 120
console.log(targetNumber);

var stoneValues = Math.floor(Math.random() * 13)
console.log(stoneValues);

$("guessed-number").text(targetNumber)



function startGame(){
    var counter = 0;
    $("#stone1").on("click", function() {
        counter +=1
    });
    
    $("#stone2").on("click", function() {
        counter +=1
    });
    
    $("#stone3").on("click", function() {
        counter +=1
    });
    
    $("#stone4").on("click", function() {
        counter +=1
    });
if (counter === targetNumber) {
    alert("You win. The universe is saved!!");
} else if (counter >= targetNumber) {
    alert("Thanos has all of the infinity stones!!!");
}









}