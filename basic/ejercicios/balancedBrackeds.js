// Complete the isBalanced function below.
var balancedCase = 'YES';
var unbalancedCase = 'NO';
var openChars = ['(', '{', '['];
var closeChars = [')', '}', ']'];

function isBalanced(s) {

    let auxStack = [];
    let i = 0;
    let balanced = balancedCase;

    while (i < s.length && balanced == balancedCase) {
        auxChar = s[i];

        if (isCharType(auxChar, openChars)) {
            auxStack.push(auxChar);

        } else if (isCharType(auxChar, closeChars)) {

            if (!(auxStack.length > 0) || !(closeValidation(auxChar, auxStack.pop()))) {
                balanced = unbalancedCase;
            }
        }
        i++;
    }

    if (!isStackEmpty(auxStack) && balanced == balancedCase) {
        balanced = unbalancedCase;
    }

    return balanced;
}

function isStackEmpty(auxStack) {
    return auxStack.length == 0;
}

function closeValidation(auxChar, previousChar) {
    let validation = false;
    switch (auxChar) {
        case closeChars[0]:
            if (previousChar == openChars[0]) { validation = true }
            break;
        case closeChars[1]:
            if (previousChar == openChars[1]) { validation = true }
            break;
        case closeChars[2]:
            if (previousChar == openChars[2]) { validation = true }
            break;
    }
    return validation;
}

function isCharType(a, b) {
    let match = false;
    let i = 0;

    while (i < b.length && !match) {
        if (b[i] == a) {
            match = true
        }
        i++;
    }
    return match;
}

function log(a) {
    console.log(a);
}

// TESTS
console.log(isBalanced('()') == 'YES');
console.log(isBalanced('((') == 'NO');
console.log(isBalanced('{[()]}') == 'YES');
console.log(isBalanced('{[(])}') == 'NO');
console.log(isBalanced('{{[[(())]]}}') == 'YES');
console.log(isBalanced('{{[[(())]]}}{}()') == 'YES');
console.log(isBalanced('{{[[(())]]}}{}()') == 'NO');
