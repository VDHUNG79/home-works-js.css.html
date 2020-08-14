// alert('Hi');
// console.log('Hello');

// Challenge 1: Your age in Days

function ageInDays() {
    var birthYear = prompt('What year were you born ... Goood friend?');
    var ageInDayss = (2020 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}