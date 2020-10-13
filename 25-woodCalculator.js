//wood calculator
//1 chair = 1 cft wood
//1 table = 3 cft wood
// 1 bed = 5 cft wood
//-------------------
//2 chair = chairNum * 1 cft wood
//2 table = tableNum * 3 cft wood
//2 bed = bedNum * 5 cft wood

function woodCalcultor(chari, table, bed) {
    const totalChair = chari * 1;
    const totalTable = table * 3;
    const totalBed = bed * 5;

    const totalWood = totalChair + totalTable + totalBed;
    return totalWood;
}
const calcWood = woodCalcultor(2, 3, 2);
console.log(calcWood);
