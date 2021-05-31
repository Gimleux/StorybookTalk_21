import {quoteHeaders, apiKey} from "./headers";
import {getCharacterMocked, getQuoteMocked} from "./quoteMock";

export const getQuote = async () => {
    if (!apiKey) return getQuoteMocked();

    const rawQuotes = await fetch('https://the-one-api.dev/v2/quote', {
        headers: quoteHeaders(apiKey)
    })
    const quotes = await rawQuotes.json();
    console.log(quotes)
    return quotes.docs[Math.floor(Math.random() * quotes.docs.length)];
};

export const getCharacter = async (quote) => {
    if (!apiKey) return getCharacterMocked(quote);

    const rawCharacters = await fetch('https://the-one-api.dev/v2/character?_id=' + quote.character, {headers: quoteHeaders(apiKey)})
    const characters = await rawCharacters.json();
    return characters.docs[0];
}

