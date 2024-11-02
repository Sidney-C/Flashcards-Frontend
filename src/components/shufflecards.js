function ShuffleCards(deck) {
    for (let i = deck.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i +1));
        let k = deck[i];
        deck[i] = deck[j];
        deck[j] = k;
    }
    return deck;
}

export default ShuffleCards;