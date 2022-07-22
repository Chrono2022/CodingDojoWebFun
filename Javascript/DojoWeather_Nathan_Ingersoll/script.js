function cityAlert(id) {
    var name = document.querySelector(id).innerText;
    alert('Loading weather report for ' + name)
}

function removeCookie() {
    var cookie = document.getElementById('cookie');
    cookie.remove();
}

function convertTemp(element) {
    for(var i = 1; i < 9; i++) {
        var tempnum = parseFloat(document.querySelector("#temp" + i).innerText);
        if(element.value == "°F") {
        document.querySelector("#temp" + i).innerHTML = (Math.round((tempnum*1.8)+32) + '°');
    } else {
        document.querySelector("#temp" + i).innerHTML = (Math.round((tempnum-32)/1.8) + '°');
    }

    }
}