//A : Cat A Position
//B : Cat B Position
//C : Mouse Position

function getCatchFirst(x, y, z) {
    let A = Math.abs(x - z);
    //console.log(A);

    let B = Math.abs(y - z);
    //console.log(B);

    if (A > B) {
        console.log("Cat B")
    } else if (A < B) {
        console.log("Cat A")
    } else {
        console.log("Mouse C")
    }
}

//Case Cat A
getCatchFirst(1,5,2);

//Case Cat B
getCatchFirst(5,1,2);

//Case Same distance
getCatchFirst(1,1,2);