const contentArea = document.getElementById("mainContent");

function showMeme(){
    const memes = ["meme1.jpg", "meme2.jpg", "meme3.jpg"];
    const selectedMeme = Math.floor(Math.random() * memes.length);
    contentArea.innerHTML = `<img src="/memes/${memes[selectedMeme]}">`;
}
function tellJoke(){
    const jokes = ["What do you call a pony with a cough?__A little horse.", "What did one hat say to the other?___You wait here. I’ll go on a head.", "What do you call a magic dog?___A labracadabrador"];
    const selectedJokes = Math.floor(Math.random() * jokes.length);
    const joke = jokes[selectedJokes];
    contentArea.textContent = joke;
    
}
function randomQuote(){
    const quotes = ["The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela", "The way to get started is to quit talking and begin doing. -Walt Disney", "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs", "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt", "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey ", "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron", "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one. -John Lennon"];
    const selectedQuotes = Math.floor(Math.random() * quotes.length);
    const quote = quotes[selectedQuotes];
    contentArea.textContent = quote;
}

const riddlesQ = ["What has to be broken before you can use it?", "I’m tall when I’m young, and I’m short when I’m old. What am I?", "What month of the year has 28 days?", "What is full of holes but still holds water?", "What question can you never answer yes to?", "What is always in front of you but can’t be seen?", "There’s a one-story house in which everything is yellow. Yellow walls, yellow doors, yellow furniture. What color are the stairs?", "What can you break, even if you never pick it up or touch it?", "What goes up but never comes down?", "A man who was outside in the rain without an umbrella or hat didn’t get a single hair on his head wet. Why?"];
const riddleA = ["An egg", "A candle", "All of them", "A sponge", "Are you asleep yet?", "The future", "There aren’t any—it’s a one-story house.", " A promise", "Your age", "He was bald."];
let selectedRiddle = null;

function riddle(){

    selectedRiddle = Math.floor(Math.random() * riddlesQ.length);
    contentArea.textContent = riddlesQ[selectedRiddle];
}
function revealAnswer(){
    if(selectedRiddle === null) {
        return -1;
    }
    contentArea.textContent = (`_______Answer is: ${riddleA[selectedRiddle]}`);
}
