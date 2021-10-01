// An array containing all the quote objects
const quotes = [
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        source: "Sam Levenson",
        citation: "",
        year: "",
        tags: "humor"
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
    },

    {
        quote: "The way to get started is to quit talking and begin doing.",
        source: "Walt Disney",
        citation: "",
        year: ""
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

    // Created a function that adds spans to the paragraph
    function getSpan(span) {
        // Checks if the object has a citation property and then prints it to the DOM
        if (randQuote[span]) {
            html += `<span class="${span}">${randQuote[span]}</span>`;
        }
    }

    // Array containing names of spans
    const spans = ['citation', 'year', 'tags'];
    
    // Created a loop that loops over an array and adding its values as spans to the DOM
    for (const span of spans) {
        getSpan(span);
    }

    // Closes the paragraph tag
    html += '</p>'

    // Display Quotes
    $('.quote-box').html(html);

    // Created a function that returns random rgb values
    function color() {
        return Math.floor(Math.random() * 256) + 1;
    }

    // Changed the background to the random color
    $('body').css("background-color", `rgb(${color()}, ${color()}, ${color()})`);
}

// Adds an event listener that listens for button clicks and executes printQuote()
$('#load-quote').on("click", printQuote);

// Auto refreshes the quote displayed on the page
setInterval(printQuote, 15000);