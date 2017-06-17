//data
var numberOfSquares = 6;
var colors = [];
var pickedColor;

//views
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setupModeButtons();

    setupSquares();

    reset();

    resetButton.addEventListener("click", function () {
        reset();
    });
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        var currentSquare = squares[i];

        currentSquare.style.backgroundColor = colors[i];
        currentSquare.addEventListener("click", function () {
            var selectedColor = this.style.backgroundColor;

            if (selectedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                changeColors(selectedColor);
                h1.style.backgroundColor = pickedColor;
                resetButton.textContent = "Play Again?"
            } else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function setupModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if (this.textContent === "Easy") {
                numberOfSquares = 3;
            } else {
                numberOfSquares = 6;
            }
            reset();
        });
    }
}



function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        var currentSquare = squares[i];

        currentSquare.style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length + 1);

    return colors[random];
}

function generateRandomColors(amount) {
    var randomColors = [];

    for(var i = 0; i < amount; i++) {
        randomColors.push(randomColor());
    }

    return randomColors;
}

function randomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    var color = "rgb(" + red + ", " + green + ", " + blue + ")";

    return color;
}

function reset() {
    //generate all new colors
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    //pick new random color from array
    //change colors of squares on page
    for (var i = 0; i < squares.length; i++) {
        var currentSquare = squares[i];

        if(colors[i]) {
            currentSquare.style.backgroundColor = colors[i];
            currentSquare.style.display = "block";
        } else {
            currentSquare.style.display = "none";
        }

    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    this.textContent = "New Colors"
}
