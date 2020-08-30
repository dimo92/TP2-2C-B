function processPairs(numbers) {
    console.log("Number of Pairs: " + getNumberOfPairs(numbers));
}

function getNumberOfPairs(numbers) {
    let pairsCounter = 0;
    //I clone the array so as not to modify the order of the original
    let sortNumbers = [...numbers].sort((a, b) => a - b);

    for (let i = 0; i < numbers.length; i++) {
        if (sortNumbers[i] === sortNumbers[i + 1]) {
            pairsCounter++;
            i++
        }
    }
    return pairsCounter;
}

processPairs([10, 20, 20, 20, 20, 30, 50, 10, 20]);