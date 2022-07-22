function changeName() {
    var element = document.querySelector("#card-title");
    element.innerText = "Any other name";
}

function removeFriend(id) { // function functionName(id to represent the HTML side which has the actual id)
    document.querySelector("#two").innerHTML--; // document.querySelector(id for the HTML code to be decreased in value).innerHTML--;
    document.querySelector("#five").innerHTML++; // same as above but different element and is for increasing a DIFFERENT element
    var element = document.querySelector(id); // creating a variable 
    element.remove();
    
}