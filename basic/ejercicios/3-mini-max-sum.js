function getMaxAndMin(numbers) {
    let maxSum = numbers.reduce((a, b) => a + b);
    numbers.sort((a, b) => a - b);
    console.log("Minimun Sum: " + (maxSum - numbers[numbers.length - 1]));
    console.log("Maximun Sum: " + (maxSum - numbers[0]));
}

getMaxAndMin([1, 3, 5, 7, 9]);