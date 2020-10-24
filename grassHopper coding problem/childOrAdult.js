// create a function which takes array of students age. 
//print the number of student who are under 12 as child to brought child tickets 
//print the number of student who are above 12 as adult to brought adult tickets

function childOfAdult(studentsArr) {
    let childCount = 0;
    let adultCount = 0;
    for (let i = 0; i < studentsArr.length; i++) {
        let studentAge = studentsArr[i];
        if (studentAge <= 12) {
            childCount++;
        } else if (studentAge > 12) {
            adultCount++;
        }
    }
    return 'childCount ' + childCount + ' adultCount ' +
        adultCount;
}
let stuArr = [8, 2, 6, 12, 23, 12, 14, 15, 28, 11];
let result = childOfAdult(stuArr);
console.log(result)
