// Write your code here!
document.querySelector('#main').remove();
const newHeader = document.createElement('h1');
newHeader.textContent = "Kyle is the champion";
newHeader.id = "victory";
document.body.appendChild(newHeader);