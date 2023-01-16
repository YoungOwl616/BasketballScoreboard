let homePara = document.getElementById("home-para");
let guestPara = document.getElementById("guest-para");

let homeScore = 0;
let guestScore = 0;
let numClicks = 0;

function addOneHome() {
    homeScore += 1;
    numClicks += 1;
    homePara.textContent = homeScore;

    if (homeScore > guestScore) {
        document.getElementById("home-banner").style.color = '#f6e47e';
        document.getElementById("guest-banner").style.color = '#f17171';
    } else if (homeScore < guestScore) {
        document.getElementById("home-banner").style.color = '#f17171';
        document.getElementById("guest-banner").style.color = '#f6e47e';
    } else {
        document.getElementById("home-banner").style.color = '#E8E7E1';
        document.getElementById("guest-banner").style.color = '#E8E7E1';
    }

    if (numClicks == 30) {
        if (homeScore > guestScore) {
            document.getElementById("winner-statement").textContent = "Home Wins!";
            document.getElementById("timer-statement").textContent = "15 secs until New Game..."
            window.setTimeout(newGame, 15000);
        } else if (homeScore < guestScore) {
            document.getElementById("winner-statement").textContent = "Guest Wins!";
            document.getElementById("timer-statement").textContent = "15 secs until New Game..."
            window.setTimeout(newGame, 15000);
        } else {
            document.getElementById("winner-statement").textContent = "It's A Tie!";
            document.getElementById("timer-statement").textContent = "15 secs until New Game..."
            window.setTimeout(newGame, 15000);
        }
    }
}

function addTwoHome() {
    homeScore += 2;
    numClicks += 1;
    homePara.textContent = homeScore;

    if (homeScore > guestScore) {
        document.getElementById("home-banner").style.color = '#f6e47e';
        document.getElementById("guest-banner").style.color = '#f17171';
    } else if (homeScore < guestScore) {
        document.getElementById("home-banner").style.color = '#f17171';
        document.getElementById("guest-banner").style.color = '#f6e47e';
    } else {
        document.getElementById("home-banner").style.color = '#E8E7E1';
        document.getElementById("guest-banner").style.color = '#E8E7E1';
    }

    if (numClicks == 30) {
        if (homeScore > guestScore) {
            document.getElementById("winner-statement").textContent = "Home Wins!";
            document.getElementById("timer-statement").textContent = "15 secs until New Game..."
            window.setTimeout(newGame, 15000);
        } else if (homeScore < guestScore) {
            document.getElementById("winner-statement").textContent = "Guest Wins!";
            document.getElementById("timer-statement").textContent = "15 secs until New Game..."
            window.setTimeout(newGame, 15000);
        } else {
            document.getElementById("winner-statement").textContent = "It's A Tie!";
            document.getElementById("timer-statement").textContent = "15 secs until New Game..."
            window.setTimeout(newGame, 15000);
        }
    }
}

function addThreeHome() {
    homeScore += 3;
    numClicks += 1;
    homePara.textContent = homeScore;

    if (homeScore > guestScore) {
        document.getElementById("home-banner").style.color = '#f6e47e';
        document.getElementById("guest-banner").style.color = '#f17171';
    } else if (homeScore < guestScore) {
        document.getElementById("home-banner").style.color = '#f17171';
        document.getElementById("guest-banner").style.color = '#f6e47e';
    } else {
        document.getElementById("home-banner").style.color = '#E8E7E1';
        document.getElementById("guest-banner").style.color = '#E8E7E1';
    }

    if (numClicks == 30) {
        if (homeScore > guestScore) {
            document.getElementById("winner-statement").textContent = "Home Wins!";
            document.getElementById("timer-statement").textContent = "15 secs until New Game..."
            window.setTimeout(newGame, 15000);
        } else if (homeScore < guestScore) {
            document.getElementById("winner-statement").textContent = "Guest Wins!";
            document.getElementById("timer-statement").textContent = "15 secs until New Game..."
            window.setTimeout(newGame, 15000);
        } else {
            document.getElementById("winner-statement").textContent = "It's A Tie!";
            document.getElementById("timer-statement").textContent = "15 secs until New Game..."
            window.setTimeout(newGame, 15000);
        }
    }
}

function addOneGuest() {
    guestScore += 1;
    numClicks += 1;
    guestPara.textContent = guestScore;

    if (homeScore > guestScore) {
        document.getElementById("home-banner").style.color = '#f6e47e';
        document.getElementById("guest-banner").style.color = '#f17171';
    } else if (homeScore < guestScore) {
        document.getElementById("home-banner").style.color = '#f17171';
        document.getElementById("guest-banner").style.color = '#f6e47e';
    } else {
        document.getElementById("home-banner").style.color = '#E8E7E1';
        document.getElementById("guest-banner").style.color = '#E8E7E1';
    }

    if (numClicks == 30) {
        if (homeScore > guestScore) {
            document.getElementById("winner-statement").textContent = "Home Wins!";
            document.getElementById("timer-statement").textContent = "15 secs until New Game..."
            window.setTimeout(newGame, 15000);
        } else if (homeScore < guestScore) {
            document.getElementById("winner-statement").textContent = "Guest Wins!";
            document.getElementById("timer-statement").textContent = "15 secs until New Game..."
            window.setTimeout(newGame, 15000);
        } else {
            document.getElementById("winner-statement").textContent = "It's A Tie!";
            document.getElementById("timer-statement").textContent = "15 secs until New Game..."
            window.setTimeout(newGame, 15000);
        }
    }
}

function addTwoGuest() {
    guestScore += 2;
    numClicks += 1;
    guestPara.textContent = guestScore;

    if (homeScore > guestScore) {
        document.getElementById("home-banner").style.color = '#f6e47e';
        document.getElementById("guest-banner").style.color = '#f17171';
    } else if (homeScore < guestScore) {
        document.getElementById("home-banner").style.color = '#f17171';
        document.getElementById("guest-banner").style.color = '#f6e47e';
    } else {
        document.getElementById("home-banner").style.color = '#E8E7E1';
        document.getElementById("guest-banner").style.color = '#E8E7E1';
    }

    if (numClicks == 30) {
        if (homeScore > guestScore) {
            document.getElementById("winner-statement").textContent = "Home Wins!";
            document.getElementById("timer-statement").textContent = "15 secs until New Game..."
            window.setTimeout(newGame, 15000);
        } else if (homeScore < guestScore) {
            document.getElementById("winner-statement").textContent = "Guest Wins!";
            document.getElementById("timer-statement").textContent = "15 secs until New Game..."
            window.setTimeout(newGame, 15000);
        } else {
            document.getElementById("winner-statement").textContent = "It's A Tie!";
            document.getElementById("timer-statement").textContent = "15 secs until New Game..."
            window.setTimeout(newGame, 15000);
        }
    }
}

function addThreeGuest() {
    guestScore += 3;
    numClicks += 1;
    guestPara.textContent = guestScore;

    if (homeScore > guestScore) {
        document.getElementById("home-banner").style.color = '#f6e47e';
        document.getElementById("guest-banner").style.color = '#f17171';
    } else if (homeScore < guestScore) {
        document.getElementById("home-banner").style.color = '#f17171';
        document.getElementById("guest-banner").style.color = '#f6e47e';
    } else {
        document.getElementById("home-banner").style.color = '#E8E7E1';
        document.getElementById("guest-banner").style.color = '#E8E7E1';
    }

    if (numClicks == 30) {
        if (homeScore > guestScore) {
            document.getElementById("winner-statement").textContent = "Home Wins!";
            document.getElementById("timer-statement").textContent = "15 secs until New Game..."
            window.setTimeout(newGame, 15000);
        } else if (homeScore < guestScore) {
            document.getElementById("winner-statement").textContent = "Guest Wins!";
            document.getElementById("timer-statement").textContent = "15 secs until New Game..."
            window.setTimeout(newGame, 15000);
        } else {
            document.getElementById("winner-statement").textContent = "It's A Tie!";
            document.getElementById("timer-statement").textContent = "15 secs until New Game..."
            window.setTimeout(newGame, 15000);
        }
    }
}

function newGame() {
    homeScore = 0;
    guestScore = 0;
    numClicks = 0;

    homePara.textContent = "0";
    guestPara.textContent = "0";

    document.getElementById("home-banner").style.color = '#E8E7E1';
    document.getElementById("guest-banner").style.color = '#E8E7E1';

    document.getElementById("winner-statement").textContent = "You Get 30 Clicks!";
    document.getElementById("timer-statement").textContent = "";
}