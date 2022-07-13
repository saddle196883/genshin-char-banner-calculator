import CharacterBanner from "./CharacterBanner.js";
export function calculateChance(count, pull, fourPity, fourGuarantee, fivePity, fiveGuarantee) {
    let successCount = 0;
    let desiredCharacters = [];
    let functionality = document.querySelector('#functionality');
    if (functionality.value == "default") {
        return;
    }
    else if (functionality.value == "featured-5-stars") {
        desiredCharacters = [5];
    }
    else if (functionality.value == "5-stars") {
        desiredCharacters = [6, 5];
    }
    else if (functionality.value == "featured-4-stars") {
        desiredCharacters = [1, 2,
            3];
    }
    else if (functionality.value == "specific-4-star") {
        desiredCharacters = [1];
    }
    else if (functionality.value == "4-stars") {
        desiredCharacters = [1, 2,
            3, 4];
    }
    let limit = Math.floor(15000000 / count / pull);
    for (let i = 0; i < limit; i++) {
        let player = new CharacterBanner(fourPity, fourGuarantee, fivePity, fiveGuarantee);
        let amountOfHits = 0;
        for (let j = 0; j < pull; j++) {
            let result = player.pullOne();
            if (desiredCharacters.some(x => x == result)) {
                amountOfHits++;
                if (amountOfHits >= count) {
                    successCount++;
                    break;
                }
            }
        }
    }
    document.getElementById("output").value = `${(successCount / limit * 100).toFixed(1)}%`;
    return;
}
