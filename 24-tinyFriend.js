// get the smallest letters friend name from  a friendsName array

function tinyFriend(friendsName) {
    let tinyFrnd = friendsName[0];

    for (let i = 0; i < friendsName.length; i++) {
        let element = friendsName[i];

        if (element.length < tinyFrnd.length) {
            tinyFrnd = element
        }
    }
    return tinyFrnd;
}
const frinedsArr = ['Jisan', 'Shawon', 'Mursalin', 'Porag', 'Asad'];
console.log(tinyFriend(frinedsArr));
