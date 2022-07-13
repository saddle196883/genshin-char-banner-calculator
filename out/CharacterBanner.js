export default class CharacterBanner {
    constructor(fourStarPity = 0, fourStarGuaranteed = false, fiveStarPity = 0, fiveStarGuaranteed = false) {
        this.fourStarPity = fourStarPity;
        this.fourStarGuaranteed = fourStarGuaranteed;
        this.fiveStarPity = fiveStarPity;
        this.fiveStarGuaranteed = fiveStarGuaranteed;
    }
    pullOne() {
        let fiveStarRate;
        let fourStarRate;
        if (this.fiveStarPity >= 89) {
            fiveStarRate = 30000;
        }
        else if (this.fiveStarPity >= 75) {
            fiveStarRate = 9720;
        }
        else {
            fiveStarRate = 180;
        }
        if (this.fourStarPity >= 9) {
            fourStarRate = 30000 - fiveStarRate;
        }
        else if (this.fourStarPity >= 8) {
            fourStarRate = 15330;
        }
        else {
            fourStarRate = 1530;
        }
        let score = CharacterBanner.getRandomIntUnder(30000);
        let featured = CharacterBanner.getRandomBoolean();
        let fourStarNumber = CharacterBanner.getRandomIntUnder(3);
        if (score < fiveStarRate) {
            this.fourStarPity++;
            this.fiveStarPity = 0;
            if (featured || this.fiveStarGuaranteed) {
                this.fiveStarGuaranteed = false;
                return 5;
            }
            else {
                this.fiveStarGuaranteed = true;
                return 6;
            }
        }
        else if (score < fourStarRate + fiveStarRate) {
            this.fourStarPity = 0;
            this.fiveStarPity++;
            if (featured || this.fourStarGuaranteed) {
                this.fourStarGuaranteed = false;
                if (fourStarNumber === 0) {
                    return 1;
                }
                else if (fourStarNumber === 1) {
                    return 2;
                }
                else {
                    return 3;
                }
            }
            else {
                this.fourStarGuaranteed = true;
                return 4;
            }
        }
        else {
            this.fourStarPity++;
            this.fiveStarPity++;
            return 0;
        }
    }
    static getRandomIntUnder(number) {
        return Math.floor(Math.random() * number);
    }
    static getRandomBoolean() {
        return (Math.random() * 2) < 1;
    }
}
