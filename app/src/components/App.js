import {useEffect, useState} from 'react';
import {Quote} from "./Quote/Quote";
import {getCharacter, getQuote} from "../background/api/quote";

const App = () => {
    const [quote, setQuote] = useState()
    const [character, setCharacter] = useState();

    const setNewQuote = async () => {
        console.log("Hello")
        const quote = await getQuote();
        setQuote(quote.dialog);
        const character = await getCharacter(quote);
        setCharacter(character?.name ?? "")
    }

    useEffect(() => {
        setNewQuote();
    }, []);

    return (
        <div>
            <Quote
                quote={quote}
                cite={character}
            />
        </div>

    );
}

export default App;
