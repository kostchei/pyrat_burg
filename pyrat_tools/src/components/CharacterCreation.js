// CharacterCreation.js
import React, { useState } from 'react';
import { generateCharacter } from '../utils/characterGenerator';

const CharacterCreation = () => {
    const [character, setCharacter] = useState(null);

    const handleCreateCharacter = () => {
        const newCharacter = generateCharacter();
        setCharacter(newCharacter);
    };

    return (
        <div>
            <button onClick={handleCreateCharacter}>Create Character</button>
            {character && (
                <div>
                    <h3>Generated Character</h3>
                    <p>Class: {character.class}</p>
                    <p>Strength: {character.strength}</p>
                    <p>Agility: {character.agility}</p>
                    <p>Presence: {character.presence}</p>
                    <p>Toughness: {character.toughness}</p>
                    <p>Spirit: {character.spirit}</p>
                </div>
            )}
        </div>
    );
};

export default CharacterCreation;
