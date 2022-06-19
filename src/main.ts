import CharacterBanner from "./CharacterBanner.js";
import {calculateChance} from "./Calculator.js"
import {Pull} from "./Pull.js";

const functionality: HTMLFormElement = document.querySelector('#functionality');
functionality.addEventListener('change', () => {
    if ((functionality.value) == "featured-5-stars") {
        (document.getElementById("5-pity") as HTMLInputElement).disabled = false;
        (document.getElementById("5-guarantee") as HTMLInputElement).disabled = false;
    } else {
        //(document.getElementById("5-pity") as HTMLInputElement).disabled = true;
        console.log("Not Implemented!")
    }
});

const form: HTMLFormElement = document.querySelector('form');
form.addEventListener('submit', (e) => {
    if (functionality.value == "featured-5-stars") {
        calculateChance();
    } else {
        console.log("Not Implemented!");
    }

    e.preventDefault();
});
