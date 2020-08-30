
function saveThePrisioner(n, m, s) {
    let victimChair;
    let isLastCandy = false;

    while (!isLastCandy) {
        if (n == m && s > 1) {
            s = 1;
        } else if (m == 1) {
            victimChair = s;
            isLastCandy = true;
        } else {
            s++;
        }
        m--;
    }
    return victimChair;
}

console.log(saveThePrisioner(5, 2, 1));
console.log(saveThePrisioner(7, 19, 2));
console.log(saveThePrisioner(3, 7, 3));

//tdd
console.log(saveThePrisioner(1, 1, 1) === 1);
console.log(saveThePrisioner(5, 2, 1) === 2);
console.log(saveThePrisioner(5, 2, 2) === 3);
console.log(saveThePrisioner(3, 7, 3) === 3);
console.log(saveThePrisioner(7, 19, 2) === 6);
console.log(saveThePrisioner(352926151, 380324688, 94730870) === 122129406);
console.log(saveThePrisioner(352926151, 380324688, 94730870) === 122129406);
console.log(saveThePrisioner(353972922, 573651462, 244520504) === 110226121);