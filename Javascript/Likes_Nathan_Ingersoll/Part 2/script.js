function clickMe1() {
    var element = document.querySelector("#neil-likes");
    var value = element.innerHTML;

    ++value;

    console.log(value)
    document.querySelector("#neil-likes").innerHTML = value;
}

function clickMe2() {
    var element = document.querySelector("#nicole-likes");
    var value = element.innerHTML;

    ++value;

    console.log(value)
    document.querySelector("#nicole-likes").innerHTML = value;
}

function clickMe3() {
    var element = document.querySelector("#jim-likes");
    var value = element.innerHTML;

    ++value;

    console.log(value)
    document.querySelector("#jim-likes").innerHTML = value;
}