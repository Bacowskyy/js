document.addEventListener("DOMContentLoaded", function() {
    refreshMonth();
    displayQuarter();
});

function refreshPage() {
    location.reload();
}

function refreshMonth() {
    var miesiac = Math.floor(Math.random() * 15) + 1;
    document.getElementById("akapit").innerHTML = miesiac;
}

function displayQuarter() {
    var miesiac = parseInt(document.getElementById("akapit").innerHTML);
    var wynikElement = document.getElementById("odp");

    switch (true) {
        case miesiac >= 1 && miesiac <= 3:
            wynikElement.innerHTML = "I kwartał";
            break;
        case miesiac >= 4 && miesiac <= 6:
            wynikElement.innerHTML = "II kwartał";
            break;
        case miesiac >= 7 && miesiac <= 9:
            wynikElement.innerHTML = "III kwartał";
            break;
        case miesiac >= 10 && miesiac <= 12:
            wynikElement.innerHTML = "IV kwartał";
            break;
        default:
            wynikElement.innerHTML = "Błędny numer miesiąca";
            break;
    }
}
