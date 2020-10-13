//brick calcultro

// 1 feet eight of a floor = 1000 brick
// 1 floor = 15ft height
// floor 1-10 = 15 ft height per floor
// floor 11-20 = 12 ft height per floor
//21 - any floor = 10 ft height per floor

function brickCalculator(floorNum) {
    const perFeetFloorBrick = 1000;
    const height1 = 15; // 1 <= floorNum <= 10
    const height2 = 12; // 11 <= floorNum <= 20
    const height3 = 10; // 21 <= floorNum <= any
    let totalBrick1, totalBrick2, totalBrick3;

    if (floorNum <= 0) {
        return 'Invalid';
    }
    if (floorNum <= 10) {
        totalBrick1 = floorNum * height1 * perFeetFloorBrick;
        return totalBrick1;
    } else if (floorNum >= 11 && floorNum <= 20) {
        totalBrick1 = 10 * height1 * perFeetFloorBrick;

        totalBrick2 = (floorNum - 10) * height2 * perFeetFloorBrick;

        return totalBrick1 + totalBrick2;
    } else {
        if (floorNum >= 21) {
            totalBrick1 = 10 * height1 * perFeetFloorBrick;

            totalBrick2 = 10 * height2 * perFeetFloorBrick;

            totalBrick3 = (floorNum - 20) * height3 * perFeetFloorBrick;

            const total = totalBrick1 + totalBrick2 + totalBrick3;
            return total;
        }
    }

}
let calcBrickNum = brickCalculator(22);
console.log(calcBrickNum)
