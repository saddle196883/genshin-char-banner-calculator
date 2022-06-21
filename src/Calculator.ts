import CharacterBanner from "./CharacterBanner.js";
import {Pull} from "./Pull.js";

export function calculateChance(
    count: number,
    pull: number,
    fourPity: number,
    fourGuarantee: boolean, 
    fivePity: number,
    fiveGuarantee: boolean) {
    let successCount: number = 0;

    let desiredCharacters: Pull[] = [];

    let functionality: HTMLFormElement = document.querySelector('#functionality');
    if (functionality.value == "default") {
        return;
    } else if (functionality.value == "featured-5-stars") {
        desiredCharacters = [Pull.FiveStarFeatured];
    } else if (functionality.value == "5-stars") {
        desiredCharacters = [Pull.FiveStarOther, Pull.FiveStarFeatured];
    } else if (functionality.value == "featured-4-stars") {
        desiredCharacters = [Pull.FourStarFeatured1, Pull.FourStarFeatured2,
                             Pull.FourStarFeatured3];
    } else if (functionality.value == "specific-4-star") {
        desiredCharacters = [Pull.FourStarFeatured1];
    } else if (functionality.value == "4-stars") {
        desiredCharacters = [Pull.FourStarFeatured1, Pull.FourStarFeatured2,
                             Pull.FourStarFeatured3, Pull.FourStarOther];
    }

    let limit: number = Math.floor(15000000 / count / pull); // arbitrary umber for speed

    for (var i = 0; i < limit; i++) {
        let player = new CharacterBanner(
            fourPity, fourGuarantee, fivePity, fiveGuarantee);
        
        let amountOfHits: number = 0;
        for (var j = 0; j < pull; j++) {
            let result: Pull = player.pullOne();
            if (desiredCharacters.some(x => x == result)) {
                amountOfHits++;
                if (amountOfHits >= count) {
                    successCount++;
                    break;
                }
            }
        }
    }
    
    let outputString: string = `${(successCount / limit * 100).toFixed(1)}%`;

    (document.getElementById("output") as HTMLTextAreaElement).value = outputString;

    return;
}
