// /// /// Queue DS \\\ \\\ \\

// Node class, has 'value: paramValue', and 'next: null' properties when initalized 
class CardNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // CardQueue class, has peek, enqueue, and dequeue methods
  class CardQueue {
    // Creates queue object, sets properties 'first', 'last' to null, and length to 0
    constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    // Peek method returns the 'first' property
        // First object in queue 
        // Returns null if empty queue
    peek() {
      return this.first;
    }
    // Enqueue method takes value as input, and returns the CardQueue Object 
    enqueue(value){
      // Instantiate CardNode class and provide a value as input, assign to const newNode
      const newNode = new CardNode(value);
      
      // If no objects in queue, assign first and last property to newNode
      if (this.length === 0) {
        this.first = newNode;
        this.last = newNode;
      } else {
        // If an object does exist in queue, assign last object's next property to the newNode, then updated 
        // last object to newNode
        this.last.next = newNode;
        this.last = newNode;
      }
      // Add 1 to length 
      this.length++;
      // Return CardQueue object
      return this;
    }
    dequeue(){
      if (!this.first) {
        return null;
      }
      if (this.first === this.last) {
        this.last = null;
      }
      // const holdingPointer = this.first;
      this.first = this.first.next;
      this.length--;
      return this;
    }
  }

  // Array -> Queue
  export const cardQueueCreator = (cardArray) => {
    const cardQueue = new CardQueue();
    for(let i = 0; i < cardArray.length; i++) {
      cardQueue.enqueue(cardArray[i]);
    }
    return cardQueue;
  }

  // Queue -> Array
  export const cardDequeuer = (cardQueue) => {
    const queue = cardQueue;
    const dequeuedCards = [];
    for(let i = 0; i < 7; i++) {
      let nextCard = cardQueue.first;
      if(nextCard.value) {
        dequeuedCards.push(nextCard.value);
      }
      queue.dequeue();
    }
    return dequeuedCards;
  }

  // 7 card array, cardDeck -> Array
  export const compareCardArrays = (firstCards, deckArray) => {
    let deck = deckArray;
    let startCards = firstCards;
    let iterator = 6;
    while(iterator >= 0) {
      let secondIterator = 0;
      while(secondIterator < 21) {
        if(startCards[iterator] === deck[secondIterator]) {
          // Finds match, removes from deck 
          deckArray.splice(secondIterator, 1);
        }
        secondIterator++;
      }
      deck.unshift(startCards[iterator])
      iterator--;
    }
    return deck;
  }