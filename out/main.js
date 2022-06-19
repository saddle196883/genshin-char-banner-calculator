import { calculateChance } from "./Calculator.js";
export function main() {
    document.getElementById("output").value = "";
    console.log("main called");
    calculateChance();
}
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    main();
});
