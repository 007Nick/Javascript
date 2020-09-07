var quidditchWinner = "Harry potter";
function changeWinner(winner){
    console.log("the original winner" + winner);
    winner ="Draco Malfoy"
    console.log("the changed winner" + winner);
}
console.log("the winner was " + quidditchWinner);
changeWinner(quidditchWinner);
console.log("Now the winner is" + quidditchWinner);


var quidditchWinners = ["Harry ","ron","harmoine"];
function changeWinners(winners){
    winners[0] = "draco";
    winners[1] = "crabbe";
    winners[2] = "pansy"
}
console.log("the winners were " + quidditchWinners);
changeWinners(quidditchWinners);
console.log("Now the winners were " + quidditchWinners);