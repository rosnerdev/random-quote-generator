// An array containing all the quote objects
const quotes = [
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        source: "Sam Levenson",
        citation: "",
        year: ""
    },

    {
        quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
        source: "Patrick McKenzie",
        citation: "Twitter",
        year: "2016"
    },
    
    {
        quote: "If you can dream it, you can do it.",
        source: "Walt Disney",
        citation: "",
        year: ""
    },

    {
        quote: "Innovation distinguishes between a leader and a follower.",
        source: "Steve Jobs",
        citation: "",
        year: ""
    },

    {
        quote: "If you need inspiring words, don’t do it.",
        source: "Elon Musk",
        citation: "DraperTV",
        year: "2015"
    }
];

// getRandomQuote() function
function getRandomQuote() {
    const random = Math.floor(Math.random() * quotes.length);
    return quotes[random];
}

// printQuote() function
function printQuote() {
    const randQuote = getRandomQuote();
    // Created an html variable which contains the paragraph elements
    let html = `<p class="quote">${randQuote.quote}</p><p class="source">${randQuote.source}`;

    // Checks if the object has a citation property and then prints it to the DOM
    if (randQuote['citation']) {
        html += `<span class="citation">${randQuote.citation}</span>`
    }

    // Checks if the object has a year property and then prints it to the DOM
    if (randQuote['year']) {
        html += `<span class="year">${randQuote.year}</span>`
    }

    // Closes the paragraph tag
    html += '</p>'

    // Display Quotes
    document.querySelector('.quote-box').innerHTML = html;

    // Created variables that store random rgb values
    const red = Math.floor(Math.random() * 256) + 1;
    const green = Math.floor(Math.random() * 256) + 1;
    const blue = Math.floor(Math.random() * 256) + 1;

    // Changed the background to the random color
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

// Adds an event listener that listens for button clicks and executes printQuote()
document.getElementById('load-quote').addEventListener("click", printQuote, false);