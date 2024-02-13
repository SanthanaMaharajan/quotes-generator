let quotes=[
    {
        "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall." ,
        "author": "-Nelson Mandela"
    },
    {
        "quote": "The way to get started is to quit talking and begin doing." ,
        "author": "-Walt Disney"
    },
    {
        "quote": "The future belongs to those who believe in the beauty of their dreams." ,
        "author": "Eleanor Roosevelt"
    },
    {
        "quote": "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma which is living with the results of other people's thinking." ,
        "author": "-Steve Jobs"
    },
    {
        "quote": "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success." ,
        "author":"-James Cameron" 
    },
    {
        "quote": "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.",
        "author": "-John Lennon"
    },
    {
        "quote":  "You must be the change you wish to see in the world.",
        "author": "-Mahatma Gandhi"
    },
    {
        "quote": "Spread love everywhere you go. Let no one ever come to you without leaving happier." ,
        "author": "-Mother Teresa"
    },
    {
        "quote": "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that." ,
        "author": "-Martin Luther King Jr."
    },
    {
        "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall." ,
        "author": " -Nelson Mandela"
    }
];


function displayQuotes() {
   let randomNumber=Math.floor(Math.random()*quotes.length);
   randomQuote=quotes[randomNumber]; 
   let displayQuote=document.getElementById("quotes-generator");
   displayQuote.innerHTML=randomQuote.quote;
   let displayAuthor=document.getElementById("author-name");
   displayAuthor.innerHTML=randomQuote.author;
}
displayQuotes();
setInterval(displayQuotes,10000);
