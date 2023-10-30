 const userInput = prompt("Podaj liczbe rzeczywista:");
    const number = parseFloat(userInput);

    if (!isNaN(number)) {

        document.querySelector("h1").textContent += ` ${number}`;

        document.getElementById("abs").textContent = `abs(${number}) = ${Math.abs(number)}`;
        document.getElementById("ceil").textContent = `ceil(${number}) = ${Math.ceil(number)}`;
        document.getElementById("floor").textContent = `floor(${number}) = ${Math.floor(number)}`;
        document.getElementById("max").textContent = `max(${number}) = ${Math.max(number)}`;
        document.getElementById("min").textContent = `min(${number}) = ${Math.min(number)}`;
        document.getElementById("pow").textContent = `pow(${number}) = ${Math.pow(number, 2)}`;
        document.getElementById("round").textContent = `round(${number}) = ${Math.round(number)}`;
        document.getElementById("sqrt").textContent = `sqrt(${number}) = ${Math.sqrt(number)}`;
    } else {
        alert("Podana wartosc nie jest liczbą rzeczywistą. Prosze odswiezyc strone i sprobowac ponownie.");
    }