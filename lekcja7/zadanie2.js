 var x = parseInt(prompt("Podaj wartość x:"));
    var y = parseInt(prompt("Podaj wartość y:"));

    function getRandomInt(x, y) {
        return Math.floor(Math.random() * (y - x + 1)) + x;
    }

    var randomNumbers = [];

    var randomNumbersRow = document.getElementById("randomNumbersRow");
    for (var i = 0; i < 10; i++) {
        var randomNumber = getRandomInt(x, y);
        randomNumbers.push(randomNumber);

        var cell = document.createElement("td");
        cell.textContent = randomNumber;
        randomNumbersRow.appendChild(cell);
    }

    var maxNumber = Math.max(...randomNumbers);
    var minNumber = Math.min(...randomNumbers);

    document.getElementById("rangeX").textContent = x;
    document.getElementById("rangeY").textContent = y;
    document.getElementById("minNumberCell").textContent = "Najmniejsza z tych liczb to: " + minNumber;
    document.getElementById("maxNumberCell").textContent = "Największa z tych liczb to: " + maxNumber;