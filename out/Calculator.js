import CharacterBanner from "./CharacterBanner.js";
export function calculateChance() {
    let successCount = 0;
    let pull = document.getElementById('pull').valueAsNumber;
    let pity = document.getElementById('pity').valueAsNumber;
    console.log(document.getElementById('guarantee').value);
    let guarantee = document.getElementById('guarantee').checked;
    for (var i = 0; i < 1000000; i++) {
        let player = new CharacterBanner(0, false, pity, guarantee);
        for (var j = 0; j < pull; j++) {
            let pull = player.pullOne();
            if (pull === 5) {
                successCount++;
                break;
            }
        }
    }
    let outputString = "The chance of pulling a featured 5-star"
        + " character in " + pull + " pull(s), given " + pity + " 5-star pity and "
        + (guarantee ? "" : "no ") + "guarantee is "
        + (successCount / 10000.0).toFixed(2) + "\%.";
    document.getElementById("output").value = outputString;
}
