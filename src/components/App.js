import {useEffect, useState} from 'react';
import {Quote} from "./Quote/Quote";
import {MenuButton} from "./Menu/MenuButton";
import {getCharacter, getQuote} from "../background/api/quote";

const App = () => {
    const [quote, setQuote] = useState()
    const [character, setCharacter] = useState();

    useEffect(() => {

        const setNewQuote = async () => {
            const quote = await getQuote();
            setQuote(quote.dialog);
            const character = await getCharacter(quote);
            setCharacter(character?.name ?? "")
        }

        setNewQuote();
    }, []);

    return (
        <div>
            <Quote
                quote={quote}
                cite={character}
            />
            <MenuButton/>
        </div>

    );
}

export default App;
