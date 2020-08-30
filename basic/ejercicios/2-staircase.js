var defaultStepChar = "#";
var defaultSpaceChar = " ";

function defaultStairGenerator(stairSize) {
    customStairGenerator(stairSize, defaultStepChar);
}

function customStairGenerator(stairSize, stepChar) {
    generator(stairSize, stepChar);
}

function generator(a, b) {
    for (let i = 0; i < a; i++) {
        let steps = Array(i);
        let spaces = Array(a - i);

        steps.fill(b);
        spaces.fill(defaultSpaceChar);
        console.log(spaces.join("") + steps.join(""));
    }
}

//Generate stair with default steps #
defaultStairGenerator(6);

//Generate stair with custom steps
customStairGenerator(6, "$");
