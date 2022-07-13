import {Pull} from "./Pull.js";

// The rates of character drops are as such:
// 5-star: 0.6% default, 32.4% from pull 76 (soft pity), 
//         100% on pull 90 (hard pity).
// 4-star: 5.1% default, 51.1% from pull 9 (soft pity),
//         (100 - 5-star rate)% on pull 10 (hard pity)
// 3-star: (100 - 5-star rate - 4-star rate)%

export default class CharacterBanner {
    fourStarPity: number;
    fourStarGuaranteed: boolean;
    fiveStarPity: number;
    fiveStarGuaranteed: boolean;

    constructor(
        fourStarPity = 0,
        fourStarGuaranteed = false,
        fiveStarPity = 0,
        fiveStarGuaranteed = false,
    ) {
        this.fourStarPity = fourStarPity;
        this.fourStarGuaranteed = fourStarGuaranteed;
        this.fiveStarPity = fiveStarPity;
        this.fiveStarGuaranteed = fiveStarGuaranteed;
    }

    pullOne(): Pull {
        // Our rates are in parts per 30000.
        // This is because it is the smallest number that keeps our rates
        // whole. Beside these numbers I annotate the rates in % as well.
        let fiveStarRate: number;
        let fourStarRate: number;

        if (this.fiveStarPity >= 89) {
            fiveStarRate = 30000; // 30000/30000 = 100%
        } else if (this.fiveStarPity >= 75) {
            fiveStarRate = 9720; // 9720/30000 = 32.4%
        } else {
            fiveStarRate = 180; // 180/30000 = 0.6%
        }

        if (this.fourStarPity >= 9) {
            fourStarRate = 30000 - fiveStarRate;
        } else if (this.fourStarPity >= 8) {
            fourStarRate = 15330; // 15330/30000 = 51.1%
        } else {
            fourStarRate = 1530; // 1530/30000 = 5.1%
        }

        let score: number = CharacterBanner.getRandomIntUnder(30000);
        let featured: boolean = CharacterBanner.getRandomBoolean();
        let fourStarNumber: number = CharacterBanner.getRandomIntUnder(3);

        if (score < fiveStarRate) {
            this.fourStarPity++;
            this.fiveStarPity = 0;

            if (featured || this.fiveStarGuaranteed) {
                this.fiveStarGuaranteed = false;
                return Pull.FiveStarFeatured;
            } else {
                this.fiveStarGuaranteed = true;
                return Pull.FiveStarOther;
            }
        } else if (score < fourStarRate + fiveStarRate) {
            this.fourStarPity = 0;
            this.fiveStarPity++;

            if (featured || this.fourStarGuaranteed) {
                this.fourStarGuaranteed = false;

                if (fourStarNumber === 0) {
                    return Pull.FourStarFeatured1;
                } else if (fourStarNumber === 1) {
                    return Pull.FourStarFeatured2;
                } else {
                    return Pull.FourStarFeatured3;
                }

            } else {
                this.fourStarGuaranteed = true;
                return Pull.FourStarOther;
            }
        } else {
            this.fourStarPity++;
            this.fiveStarPity++;
            return Pull.ThreeStar;
        }
    }

    static getRandomIntUnder(number: number) {
        return Math.floor(Math.random() * number);
    }

    static getRandomBoolean(): boolean {
        return (Math.random() * 2) < 1;
    }
}

