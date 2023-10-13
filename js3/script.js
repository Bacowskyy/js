function toggleContent(number) {
    var content = document.getElementById('content' + number);
    var arrow = document.getElementById('arrow(' + (number) + ')');

    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        arrow.innerHTML = '&#8613';
    } else {
        content.style.display = 'none' ;
        arrow.innerHTML = '&#8615';
    }
}