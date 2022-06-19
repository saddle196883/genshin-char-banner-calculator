import CharacterBanner from "./CharacterBanner.js";
import {Pull} from "./Pull.js";

export function calculateChance() {
    let successCount: number = 0;

    let pull: number = (
        document.getElementById('pull') as HTMLInputElement).valueAsNumber;
    let pity: number = (
        document.getElementById('pity') as HTMLInputElement).valueAsNumber;
    console.log((document.getElementById('guarantee') as HTMLInputElement).value);
    let guarantee: boolean = (
        document.getElementById('guarantee') as HTMLInputElement).checked;

    for (var i = 0; i < 1000000; i++) {
        let player = new CharacterBanner(0, false, pity, guarantee);

        for (var j = 0; j < pull; j++) {
            let pull: Pull = player.pullOne();
            if (pull === Pull.FiveStarFeatured) {
                successCount++;
                break;
            }
        }
    }
    
    let outputString: string = "The chance of pulling a featured 5-star"
        + " character in " + pull + " pull(s), given " + pity + " 5-star pity and "
        + (guarantee ? "": "no ") + "guarantee is "
        + (successCount / 10000.0).toFixed(2) + "\%.";

    (document.getElementById("output") as HTMLTextAreaElement).value = outputString;
}
