main();
function main(){
runningCalculator();
var playAgain = prompt ("\n would you like to play the game again Y/N?");

if(playAgain == "Y")
{
  main();
}
else
{
  console.log ("Thank you for finishing the game.");
}
}
function runningCalculator(){

var totalMiles = prompt ("How many miles did you run today?");
totalMiles= parseFloat (totalMiles);

var timePerMile = prompt("How long did it take to run 1 mile?");
timePerMile=parseFloat (timePerMile)

var totalTime=
totalMiles* timePerMile;
console.log("You spent " + totalTime + " minutes running")

}



