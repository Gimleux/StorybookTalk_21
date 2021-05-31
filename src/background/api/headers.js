export const quoteHeaders = (key) => {
    return {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + key
    }
}

export let apiKey = null;