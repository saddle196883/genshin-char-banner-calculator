import CharacterBanner from "./CharacterBanner.js";
import {Pull} from "./Pull.js";

export function calculateChance() {
    let successCount: number = 0;

    let count: number = (
        document.getElementById('count') as HTMLInputElement).valueAsNumber;
    let pull: number = (
        document.getElementById('pull') as HTMLInputElement).valueAsNumber;
    let pity: number = (
        document.getElementById('5-pity') as HTMLInputElement).valueAsNumber;
    console.log((document.getElementById('5-guarantee') as HTMLInputElement).value);
    let guarantee: boolean = (
        document.getElementById('5-guarantee') as HTMLInputElement).checked;

    let limit: number = Math.floor(10000000 / pull);
    for (var i = 0; i < limit; i++) {
        let player = new CharacterBanner(0, false, pity, guarantee);
        
        let amountOfHits: number = 0;
        for (var j = 0; j < pull; j++) {
            let pull: Pull = player.pullOne();
            if (pull === Pull.FiveStarFeatured) {
                amountOfHits++;
                if (amountOfHits >= count) {
                    successCount++;
                    break;
                }
            }
        }
    }
    
    let outputString: string = `The chance of pulling ${count} featured 5-star(s)`
        + ` in ${pull} pull(s), given ${pity} 5-star pity and `
        + `${guarantee ? '': 'no '}guarantee is `
        + `${(successCount / limit * 100).toFixed(2)}%.`;

    (document.getElementById("output") as HTMLTextAreaElement).value = outputString;
}
