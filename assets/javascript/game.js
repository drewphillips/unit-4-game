var wins = 0;
var losses = 0;
var runningTotal = 0;
var newNumber = 0;

function newGame() {

    //New number
    newNumber = (Math.floor(20 + (Math.random() * 101)))
    console.log("New Game number " + newNumber)

    runningTotal = 0;
    for (i = 0; i < 4; i++) {
        var crystalValue = Math.floor(Math.random() * 13)
        $("#crystal" + i).data("crystal-number", crystalValue);
        console.log("Number " + i + " is " + crystalValue)
        $("#crystal" + i).on("click", function () {

            console.log("YOU CLICKED " + $(this).data("crystal-number"));
            runningTotal = runningTotal + $(this).data("crystal-number");

            console.log(runningTotal)
            if (runningTotal === newNumber) {
                wins++
                newGame()
            }
            else if (runningTotal > newNumber) {
                losses++
                newGame()
            }

        })
    }

}

newGame()