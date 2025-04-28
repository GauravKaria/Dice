var pl1c = 0;
var pl2c = 0;
function assignValue() {
    var pl1 = Math.floor((Math.random() * 6) + 1);
    var pl2 = Math.floor((Math.random() * 6) + 1);
    var img1 = "./images/dice" + pl1 + ".png";
    var img2 = "./images/dice" + pl2 + ".png";

    document.querySelector(".img1").src = img1;
    document.querySelector(".img2").src = img2;

    if (pl1 === pl2) {
        document.querySelector(".c1").querySelector(".header").innerHTML = "Draw!";
    }

    if (pl1 > pl2) {
        document.querySelector(".c1").querySelector(".header").innerHTML = "Player 1 Wins!";
        pl1c++;
    }

    if (pl1 < pl2) {
        document.querySelector(".c1").querySelector(".header").innerHTML = "Player 2 Wins!";
        pl2c++;
    }

    document.querySelector(".counter1").innerHTML = "<p>Player 1: " + pl1c + "<p>";
    document.querySelector(".counter2").innerHTML = "<p>Player 2: " + pl2c + "<p>";
    if (pl1c + pl2c === 10) {
        if (pl1c > pl2c) {
            document.querySelector(".header").innerHTML = " <h1 class='head'>Congratulations: Player 1 Wins!<br>Refresh to play again</h1>";
            pl1c = 0;
            pl2c = 0;
        }

        else if (pl1c < pl2c) {
            document.querySelector(".header").innerHTML = " <h1 class='head'>Congratulations: Player 2 Wins!<br>Refresh to play again</h1> ";
            pl1c = 0;
            pl2c = 0;
        }

        else{
            document.querySelector(".header").innerHTML = " <h1 class='head'>Conclusion: Draw!<br>Refresh to play again</h1>"
            pl1c = 0;
            pl2c = 0;
        }

    }

}
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        document.querySelector(".button").click();
    }
});


