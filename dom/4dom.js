const main_heading = document.querySelector('#head');


main_heading.style.backgroundColor = 'red';


const link = document.querySelector('a');

console.log(link.getAttribute('href'));


const input = document.querySelector('input');


console.log(input.getAttribute('type'));


link.setAttribute('href', 'https://www.google.com');
