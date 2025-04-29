function Value() {
    var pl1n = document.getElementById("Text1").value;
    var pl2n = document.getElementById("Text2").value;
    

    localStorage.setItem("pl1n", pl1n);
    localStorage.setItem("pl2n", pl2n);
    console.log(pl1n + "\n" + pl2n);
    window.location.href = "./game.html";
    
}
 
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        document.querySelector(".buton").click();
    }
})

