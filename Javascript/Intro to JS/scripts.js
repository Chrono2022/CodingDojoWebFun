for(i=0; i<10; i++) { // i=0 means i starts at 0, i < 10 means stop when i is no longer 10, 
// i++ means increase the number by 1 each time the loop finishes
    console.log(i) // print to the terminal / console the value of 1 while the loop is running
}
for(i=10; i>0; i--) {
    console.log(i)
}

function firstAlert() {
    alert("Hey what's cookin?")
    console.log("alert function ran")
}
// Change the color of the h1 tag
// 1. Create the function
// 2.What is going to change = element name
// 3. How its going to change = text color
// 4. How wil it be activated
// 5. Tell it to change back = using conditionals if color = white change to red, 
// otherwise change to white

function h1Color(element) {
    if ((element.style.color) == 'white) {
        element.style.color = 'red'
    }
    else {
        element.style.color = 'white'
    }
}