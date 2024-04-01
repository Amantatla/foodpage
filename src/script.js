const circle = document.querySelector('.circle');
const items = +getComputedStyle(circle).getPropertyValue('--items');
let index = 0;

function buttonClick() {
    const step = 360 / items;
    circle.style.setProperty('--rotation', `${(step * index) * -1}deg`)
    index = index + 1;
};