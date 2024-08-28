// diceRoller.js
export function rollDice(sides, times = 1) {
    let result = 0;
    for (let i = 0; i < times; i++) {
        result += Math.floor(Math.random() * sides) + 1;
    }
    return result;
}