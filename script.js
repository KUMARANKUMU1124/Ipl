let allPlayers = [];
let remainingPlayers = [];

function startAuction() {
    const input = document.getElementById("playerInput").value.trim();
    
    if (input === "") {
        alert("Please enter player names!");
        return;
    }

    allPlayers = input.split(",").map(player => player.trim());
    remainingPlayers = [...allPlayers];

    document.getElementById("auctionArea").classList.remove("auction-hidden");
    document.getElementById("selectedPlayer").innerText = "Click 'Next' to pick a player";
    document.getElementById("playerImage").src = "images/default.jpg"; // Default image
}

function pickRandomPlayer() {
    if (remainingPlayers.length === 0) {
        alert("All players have been picked! Resetting...");
        resetAuction();
        return;
    }

    const randomIndex = Math.floor(Math.random() * remainingPlayers.length);
    const selectedPlayer = remainingPlayers.splice(randomIndex, 1)[0];

    document.getElementById("selectedPlayer").innerText = `🎤 Sold to: ${selectedPlayer}`;
    
    let imagePath = `images/${selectedPlayer.replace(/ /g, "_")}.jpg`;
    document.getElementById("playerImage").src = imagePath;

    let auctionSound = document.getElementById("auctionSound");
    auctionSound.play();
}

function resetAuction() {
    remainingPlayers = [...allPlayers];
    document.getElementById("selectedPlayer").innerText = "Click 'Next' to pick a player";
    document.getElementById("playerImage").src = "images/default.jpg";
      }
