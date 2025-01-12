let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'This is Test website, ' + myName;
    }
}

// if (!localStorage.getItem('name')) {
//     setUserName();
// } else {
//     let storedName = localStorage.getItem('name');
//     myHeading.textContent = 'This is Test website, ' + storedName;
// }

if (localStorage.getItem('name')) {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Test website, ' + storedName;
} else {
    setUserName();
}

myButton.onclick = function() {
    setUserName();
}