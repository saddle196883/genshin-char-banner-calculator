import CharacterBanner from "./CharacterBanner.js";
import {calculateChance} from "./Calculator.js"
import {Pull} from "./Pull.js";

export function main() {
    (document.getElementById("output") as HTMLTextAreaElement).value = "";
    console.log("main called");
    calculateChance();
}

const form: HTMLFormElement = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    main();
})

