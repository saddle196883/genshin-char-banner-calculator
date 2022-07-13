import { calculateChance } from "./Calculator.js";
const functionality = document.querySelector('#functionality');
functionality.addEventListener('change', () => {
    if ((functionality.value) == "featured-5-stars") {
        document.getElementById("count").disabled = false;
        document.getElementById("pull").disabled = false;
        document.getElementById("5-pity").disabled = false;
        document.getElementById("5-guarantee").disabled = false;
        document.getElementById("4-pity").disabled = true;
        document.getElementById("4-guarantee").disabled = true;
    }
    else if ((functionality.value == "5-stars")) {
        document.getElementById("count").disabled = false;
        document.getElementById("pull").disabled = false;
        document.getElementById("5-pity").disabled = false;
        document.getElementById("5-guarantee").disabled = true;
        document.getElementById("4-pity").disabled = true;
        document.getElementById("4-guarantee").disabled = true;
    }
    else if ((functionality.value == "featured-4-stars")) {
        document.getElementById("count").disabled = false;
        document.getElementById("pull").disabled = false;
        document.getElementById("5-pity").disabled = false;
        document.getElementById("5-guarantee").disabled = true;
        document.getElementById("4-pity").disabled = false;
        document.getElementById("4-guarantee").disabled = false;
    }
    else if ((functionality.value == "specific-4-star")) {
        document.getElementById("count").disabled = false;
        document.getElementById("pull").disabled = false;
        document.getElementById("5-pity").disabled = false;
        document.getElementById("5-guarantee").disabled = true;
        document.getElementById("4-pity").disabled = false;
        document.getElementById("4-guarantee").disabled = false;
    }
    else if ((functionality.value == "4-stars")) {
        document.getElementById("count").disabled = false;
        document.getElementById("pull").disabled = false;
        document.getElementById("5-pity").disabled = false;
        document.getElementById("5-guarantee").disabled = true;
        document.getElementById("4-pity").disabled = false;
        document.getElementById("4-guarantee").disabled = true;
    }
    else if ((functionality.value == "default")) {
        console.log("default");
        document.getElementById("count").disabled = true;
        document.getElementById("pull").disabled = true;
        document.getElementById("5-pity").disabled = true;
        document.getElementById("5-guarantee").disabled = true;
        document.getElementById("4-pity").disabled = true;
        document.getElementById("4-guarantee").disabled = true;
    }
    else {
        console.log("Not Implemented!");
    }
});
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    document.getElementById("output").value = "";
    let count = document.getElementById('count').valueAsNumber;
    let pull = document.getElementById('pull').valueAsNumber;
    let fourPity = document.getElementById('4-pity').valueAsNumber;
    let fourGuarantee = document.getElementById('4-guarantee').checked;
    let fivePity = document.getElementById('5-pity').valueAsNumber;
    let fiveGuarantee = document.getElementById('5-guarantee').checked;
    if (document.getElementById("5-pity").disabled) {
        fivePity = 0;
    }
    if (document.getElementById("5-guarantee").disabled) {
        fiveGuarantee = false;
    }
    if (document.getElementById("4-pity").disabled) {
        fourPity = 0;
    }
    if (document.getElementById("4-guarantee").disabled) {
        fourGuarantee = false;
    }
    calculateChance(count, pull, fourPity, fourGuarantee, fivePity, fiveGuarantee);
    e.preventDefault();
});
