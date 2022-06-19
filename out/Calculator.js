import CharacterBanner from "./CharacterBanner.js";
export function calculateChance() {
    let successCount = 0;
    let count = document.getElementById('count').valueAsNumber;
    let pull = document.getElementById('pull').valueAsNumber;
    let pity = document.getElementById('5-pity').valueAsNumber;
    console.log(document.getElementById('5-guarantee').value);
    let guarantee = document.getElementById('5-guarantee').checked;
    let limit = Math.floor(10000000 / pull);
    for (var i = 0; i < limit; i++) {
        let player = new CharacterBanner(0, false, pity, guarantee);
        let amountOfHits = 0;
        for (var j = 0; j < pull; j++) {
            let pull = player.pullOne();
            if (pull === 5) {
                amountOfHits++;
                if (amountOfHits >= count) {
                    successCount++;
                    break;
                }
            }
        }
    }
    let outputString = `The chance of pulling ${count} featured 5-star(s)`
        + ` in ${pull} pull(s), given ${pity} 5-star pity and `
        + `${guarantee ? '' : 'no '}guarantee is `
        + `${(successCount / limit * 100).toFixed(2)}%.`;
    document.getElementById("output").value = outputString;
}
