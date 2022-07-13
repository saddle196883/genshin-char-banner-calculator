import CharacterBanner from "./CharacterBanner.js";
import {calculateChance} from "./Calculator.js"
import {Pull} from "./Pull.js";

const functionality: HTMLFormElement = document.querySelector('#functionality');
functionality.addEventListener('change', () => {
    if ((functionality.value) == "featured-5-stars") {
        (document.getElementById("count") as HTMLInputElement).disabled = false;
        (document.getElementById("pull") as HTMLInputElement).disabled = false;
        (document.getElementById("5-pity") as HTMLInputElement).disabled = false;
        (document.getElementById("5-guarantee") as HTMLInputElement).disabled = false;
        (document.getElementById("4-pity") as HTMLInputElement).disabled = true;
        (document.getElementById("4-guarantee") as HTMLInputElement).disabled = true;
    } else if ((functionality.value == "5-stars")) {
        (document.getElementById("count") as HTMLInputElement).disabled = false;
        (document.getElementById("pull") as HTMLInputElement).disabled = false;
        (document.getElementById("5-pity") as HTMLInputElement).disabled = false;
        (document.getElementById("5-guarantee") as HTMLInputElement).disabled = true;
        (document.getElementById("4-pity") as HTMLInputElement).disabled = true;
        (document.getElementById("4-guarantee") as HTMLInputElement).disabled = true;
    } else if ((functionality.value == "featured-4-stars")) {
        (document.getElementById("count") as HTMLInputElement).disabled = false;
        (document.getElementById("pull") as HTMLInputElement).disabled = false;
        (document.getElementById("5-pity") as HTMLInputElement).disabled = false;
        (document.getElementById("5-guarantee") as HTMLInputElement).disabled = true;
        (document.getElementById("4-pity") as HTMLInputElement).disabled = false;
        (document.getElementById("4-guarantee") as HTMLInputElement).disabled = false;
    } else if ((functionality.value == "specific-4-star")) {
        (document.getElementById("count") as HTMLInputElement).disabled = false;
        (document.getElementById("pull") as HTMLInputElement).disabled = false;
        (document.getElementById("5-pity") as HTMLInputElement).disabled = false;
        (document.getElementById("5-guarantee") as HTMLInputElement).disabled = true;
        (document.getElementById("4-pity") as HTMLInputElement).disabled = false;
        (document.getElementById("4-guarantee") as HTMLInputElement).disabled = false;
    } else if ((functionality.value == "4-stars")) {
        (document.getElementById("count") as HTMLInputElement).disabled = false;
        (document.getElementById("pull") as HTMLInputElement).disabled = false;
        (document.getElementById("5-pity") as HTMLInputElement).disabled = false;
        (document.getElementById("5-guarantee") as HTMLInputElement).disabled = true;
        (document.getElementById("4-pity") as HTMLInputElement).disabled = false;
        (document.getElementById("4-guarantee") as HTMLInputElement).disabled = true;
    } else if ((functionality.value == "default")) {
        console.log("default");
        (document.getElementById("count") as HTMLInputElement).disabled = true;
        (document.getElementById("pull") as HTMLInputElement).disabled = true;
        (document.getElementById("5-pity") as HTMLInputElement).disabled = true;
        (document.getElementById("5-guarantee") as HTMLInputElement).disabled = true;
        (document.getElementById("4-pity") as HTMLInputElement).disabled = true;
        (document.getElementById("4-guarantee") as HTMLInputElement).disabled = true;
    } else {
        //(document.getElementById("5-pity") as HTMLInputElement).disabled = true;
        console.log("Not Implemented!")
    }
});

const form: HTMLFormElement = document.querySelector('form');
form.addEventListener('submit', (e) => {
    (document.getElementById("output") as HTMLTextAreaElement).value = "";

    let count: number = (
        document.getElementById('count') as HTMLInputElement).valueAsNumber;
    let pull: number = (
        document.getElementById('pull') as HTMLInputElement).valueAsNumber;
    let fourPity: number = (
        document.getElementById('4-pity') as HTMLInputElement).valueAsNumber;
    let fourGuarantee: boolean = (
        document.getElementById('4-guarantee') as HTMLInputElement).checked;
    let fivePity: number = (
        document.getElementById('5-pity') as HTMLInputElement).valueAsNumber;
    let fiveGuarantee: boolean = (
        document.getElementById('5-guarantee') as HTMLInputElement).checked;

    if ((document.getElementById("5-pity") as HTMLInputElement).disabled) {
        fivePity = 0;
    }
    if ((document.getElementById("5-guarantee") as HTMLInputElement).disabled) {
        fiveGuarantee = false;
    }
    if ((document.getElementById("4-pity") as HTMLInputElement).disabled) {
        fourPity = 0;
    }
    if ((document.getElementById("4-guarantee") as HTMLInputElement).disabled) {
        fourGuarantee = false;
    }

    calculateChance(count, pull, fourPity, fourGuarantee, fivePity, fiveGuarantee);
    e.preventDefault();
});
