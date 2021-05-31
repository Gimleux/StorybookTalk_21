import {mockedQuotes} from "./mockData/quotes";
import {mockedCharacters} from "./mockData/characters";

export const getQuoteMocked = async () => {
    const quotes = mockedQuotes;
    return quotes.docs[Math.floor(Math.random() * quotes.docs.length)];
};

export const getCharacterMocked = async (quote) => {
    return mockedCharacters.docs.find((character) =>(quote.character === character._id));
}