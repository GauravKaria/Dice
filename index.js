var pl1c = 0;
var pl2c = 0;
var pl1n = localStorage.getItem("pl1n");
var pl2n = localStorage.getItem("pl2n");

document.addEventListener("DOMContentLoaded",function(){
    document.querySelector(".player1").innerHTML = (pl1n || "Player 1");
    document.querySelector(".player2").innerHTML = (pl2n || "Player 2");
    document.querySelector(".counter1").innerHTML = "<p>"+(pl1n || "Player 1")+ ": " + pl1c + "<p>";
    document.querySelector(".counter2").innerHTML = "<p>"+(pl2n || "Player 2")+ ": "+ pl2c + "<p>";
})



    function assignValue() {

        var pl1 = Math.floor((Math.random() * 6) + 1);
        var pl2 = Math.floor((Math.random() * 6) + 1);
        var img1 = "./Images/images/dice" + pl1 + ".png";
        var img2 = "./Images/images/dice" + pl2 + ".png";
    
        document.querySelector(".img1").src = img1;
        document.querySelector(".img2").src = img2;

        if (pl1 === pl2) {
            document.querySelector(".c1").querySelector(".header").innerHTML = "Draw!";
        }
    
        if (pl1 > pl2) {
            document.querySelector(".c1").querySelector(".header").innerHTML = (pl1n || "Player 1") +" Wins!";
            pl1c++;
        }
    
        if (pl1 < pl2) {
            document.querySelector(".c1").querySelector(".header").innerHTML = (pl2n || "Player 2") +" Wins!";
            pl2c++;
        }
    
        
        if (pl1c === 10) {
                document.querySelector(".header").innerHTML = " <h1 class='head'>Congratulations: "+(pl1n || "Player 1")+" Wins!<br>Reload to play again</h1>";
            }
    
            if (pl2c === 10) {
                document.querySelector(".header").innerHTML = " <h1 class='head'>Congratulations: "+(pl2n || "Player 2") +" Wins!<br>Reload to play again</h1> ";
            }

            document.querySelector(".player1").innerHTML = pl1n || "Player 1";
            document.querySelector(".player2").innerHTML = pl2n || "Player 2";
            document.querySelector(".counter1").innerHTML = "<p>"+(pl1n || "Player 1") + ": " + pl1c + "<p>";
            document.querySelector(".counter2").innerHTML = "<p>"+(pl2n || "Player 2") + ": "+ pl2c + "<p>";
        
    
    }
    
    document.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            document.querySelector(".button").click();
        }
    });