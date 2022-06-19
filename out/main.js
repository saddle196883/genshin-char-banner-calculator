import { calculateChance } from "./Calculator.js";
const functionality = document.querySelector('#functionality');
functionality.addEventListener('change', () => {
    if ((functionality.value) == "featured-5-stars") {
        document.getElementById("5-pity").disabled = false;
        document.getElementById("5-guarantee").disabled = false;
    }
    else {
        console.log("Not Implemented!");
    }
});
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    if (functionality.value == "featured-5-stars") {
        calculateChance();
    }
    else {
        console.log("Not Implemented!");
    }
    e.preventDefault();
});
