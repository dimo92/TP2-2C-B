function saveThePrisioner(cantidadDePrisioneros, cantidadDeGolosinas, numeroDeSilla) {
    let victimChair;
    let isLastCandy = false;
    //console.log("0 ACA - Prisioneros: " + cantidadDePrisioneros + " Golosinas: " + cantidadDeGolosinas +" NroSilla: "+ numeroDeSilla);

    while (!isLastCandy) {
        if (cantidadDePrisioneros == numeroDeSilla && cantidadDeGolosinas > 1) {
            numeroDeSilla = 1;
            //console.log("1 ACA - Prisioneros: " + cantidadDePrisioneros + " Golosinas: " + cantidadDeGolosinas +" NroSilla: "+ numeroDeSilla);
        } else if (cantidadDeGolosinas == 1) {
            victimChair = numeroDeSilla;
            isLastCandy = true;
            //console.log("2 ACA - Prisioneros: " + cantidadDePrisioneros + " Golosinas: " + cantidadDeGolosinas +" NroSilla: "+ numeroDeSilla);
        } else {
            numeroDeSilla++;
            //console.log("3 ACA - Prisioneros: " + cantidadDePrisioneros + " Golosinas: " + cantidadDeGolosinas +" NroSilla: "+ numeroDeSilla);
        }
        cantidadDeGolosinas--;
        //console.log("4 ACA - Prisioneros: " + cantidadDePrisioneros + " Golosinas: " + cantidadDeGolosinas +" NroSilla: "+ numeroDeSilla);
    }
    return victimChair;
}

console.log(saveThePrisioner(5, 2, 1));
console.log(saveThePrisioner(7, 19, 2));
console.log(saveThePrisioner(3, 7, 3));

// tdd
console.log(saveThePrisioner(1, 1, 1) === 1);
console.log(saveThePrisioner(5, 2, 1) === 2);
console.log(saveThePrisioner(5, 2, 2) === 3);
console.log(saveThePrisioner(3, 7, 3) === 3);
console.log(saveThePrisioner(7, 19, 2) === 6);
console.log(saveThePrisioner(352926151, 380324688, 94730870) === 122129406);
console.log(saveThePrisioner(352926151, 380324688, 94730870) === 122129406);
console.log(saveThePrisioner(353972922, 573651462, 244520504) === 110226121);