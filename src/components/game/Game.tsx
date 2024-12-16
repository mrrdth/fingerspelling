import { alphabet } from "AlphabetMap";
import { useEffect, useState } from "react";
import { useInterval } from "utils/interval";

import './Game.css';
import { Input } from "components/ui/Input";

export function Word({
    word,
    onEnd,
}: {
    word: string,
    onEnd: () => void,
}) {
    const [index, setIndex] = useState(0);
    const letters = Array.from(word);
    const letterNodes = letters.map(function (letter) {
        return (<img alt={letter} src={alphabet[letter]}></img>);
    });

    useEffect(() => {
        if (index >= letters.length) {
            onEnd();
        }
    }, [index, letters.length, onEnd]);
    useInterval(() => {
        setIndex((prev) => prev + 1);
    }, 500, true)
    
    return (
        <>
            <button onClick={onEnd}>kill</button>
            <p>{letters[index]}</p>
            <Letter letter={letterNodes[index]}></Letter>
        </>
    );
}

function Letter({ letter, }: { letter: JSX.Element}) {
    return <div className='letter-container'>{letter}</div>
}

export function Guess({
    word,
    onGuess,
} : {
    word: string,
    onGuess: (guess: string) => void,
}) {
    return (
        <div className='guess-form'>
            <Input label="guess" onSubmit={onGuess}/>
        </div>
        
    )
}