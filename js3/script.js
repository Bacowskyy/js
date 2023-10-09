function toggleContent(number) {
    var content = document.getElementById('content' + number);
    var arrow = document.querySelector('h1:nth-child(' + (number * 2) + ')');

    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        arrow.innerHTML = '&#8613; Bajka nr ' + number;
    } else {
        content.style.display = 'none';
        arrow.innerHTML = '&#8615; Bajka nr ' + number;
    }
}