var value = 3

function likeMe() {
    var element = document.querySelector('#like');

    ++value;

    document.querySelector('#like').innerHTML = value;
}