// characterGenerator.js
import { rollDice } from './diceRoller';

// Roll for ability scores (3d6)
export function rollAbilityScore() {
    return rollDice(6, 3);
}

// Roll for random class (1d10)
export function getClass() {
    const classes = [
        "Brute", "Rapscallion", "Buccaneer", "Swashbuckler", "Zealot", 
        "Sorcerer", "Haunted", "Tall Tale", "Land Lubber", "Choose your own"
    ];
    const roll = rollDice(10);
    return classes[roll - 1];
}

// Main character generation function
export function generateCharacter() {
    const character = {
        strength: rollAbilityScore(),
        agility: rollAbilityScore(),
        presence: rollAbilityScore(),
        toughness: rollAbilityScore(),
        spirit: rollAbilityScore(),
        class: getClass()
    };

    return character;
}