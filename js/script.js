// creates an array of objects to store quote related information
const quotes = [
    {
        quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
        source: "Patrick McKenzie",
        category: "#programming"
    },
    {
        quote: "What one programmer can do in one month, two programmers can do in two months.",
        source: "Fred Brooks",
        category: "#programming"
    },
    {
        quote: "No one in the brief history of computing has ever written a piece of perfect software. It's unlikely that you'll be the first.",
        source: "Andy Hunt",
        category: "#programming"
    },
    {
        quote: "One of the best programming skills you can have is knowing when to walk away for awhile.",
        source: "Oscar Godson",
        category: "#programming"
    },
    {
        quote: "Without requirements or design, programming is the art of adding bugs to an empty text file.",
        source: "Louis Srygley",
        category: "#programming"
    },
    {
        quote: "Java is to JavaScript as ham is to hamster.",
        source: "Jeremy Keith",
        citation: "Resilient Web Design",
        category: "#programming"
    },
    {
        quote: "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.",
        source: "Linus Torvolds",
        category: "#programming"
    },
    {
        quote: "A good programmer is someone who always looks both ways before crossing a one-way street.",
        source: "Doug Linder",
        category: "#programming"
    },
    {
        quote: "Functions should do one thing. They should do it well. They should do it only.",
        source: "Robert C. Martin",
        category: "#programming"
    },
    {
        quote: "Eighty percent of success is showing up.",
        source: "Woody Allen",
        category: "#success"
    },
    {
        quote: "Self-education is, I firmly believe, the only kind of education there is.",
        source: "Isaac Asimov",
        category: "#learning"
    },
    {
        quote: "Treat your code like poetry and take it to the edge of the bare minimum.",
        source: "Ilya Dorman",
        category: "#programming"
    },
    {
        quote: "It's all talk until the code runs.",
        source: "Ward Cunningham",
        category: "#programming"
    },
    {
        quote: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
        source: "John Woods",
        category: "#programming"
    },
    {
        quote: "It is better to fail in originality that to succeed in imitation.",
        source: "Herman Melville",
        category: "#success"
    },
    {
        quote: "I find that the harder I work, the more luck I seem to have.",
        source: "Thomas Jefferson",
        category: "#success"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        source: "Walt Disney",
        category: "#success"
    },
    {
        quote: "If you really want to do something, you'll find a way. If you don't, you'll find an excuse.",
        source: "Jim Rohn",
        category: "#success"
    },
    {
        quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        source: "Benjamin Franklin",
        category: "#learning"
    },
    {
        quote: "Being a student is easy. Learning requires actual work.",
        source: "William Crawford",
        category: "#learning"
    },
    {
        quote: "Anything worth doing well is worth doing poorly at first.",
        source: "Ray Congdon",
        category: "#learning"
    },
    {
        quote: "It's the only job I can think of where I get to be both an engineer and an artist.",
        source: "Andy Hertzfeld",
        category: "#programming"
    },
    {
        quote: "I’ve finally learned what ‘upward compatible’ means.  It means we get to keep all our old mistakes.",
        source: "Dennie van Tassel",
        category: "#programming"
    },
    {
        quote: "Controlling complexity is the essence of computer programming.",
        source: "Brian Kernigan",
        category: "#programming"
    },
    {
        quote: "The function of good software is to make the complex appear to be simple.",
        source: "Grady Booch",
        category: "#programming"
    },
    {
        quote: "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
        source: "Bill Gates",
        category: "#programming"
    },
    {
        quote: "First, solve the problem. Then, write the code.",
        source: "Jack Johnson",
        category: "#programming"
    },
    {
        quote: "Any code of your own that you haven’t looked at for six or more months might as well have been written by someone else.",
        source: "Eagleson's Law",
        category: "#programming"
    },
    {
        quote: "I don’t care if it works on your machine!  We are not shipping your machine!",
        source: "Vidiu Platon",
        category: "#programming"
    },
    {
        quote: "He who learns but does not think, is lost! He who thinks but does not learn is in great danger.",
        source: "Confucius",
        category: "#learning"
    },
    {
        quote: "Every act of conscious learning requires the willingness to suffer an injury to one's self-esteem. That is why young children, before they are aware of their own self-importance, learn so easily.",
        source: "Thomas Szasz",
        category: "#learning"
    },
    {
        quote: "A wise man can learn more from a foolish question than a fool can learn from a wise answer.",
        source: "Bruce Lee",
        category: "#learning"
    },
    {
        quote: "Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better.",
        source: "Jim Rohn",
        category: "#success"
    },
    {
        quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        source: "Albert Schweitzer",
        category: "#success"
    },
    {
        quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        source: "Thomas Edison",
        category: "#success"
    },
    {
        quote: "I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.",
        source: "Michael Jordan",
        category: "#success"
    },
    {
        quote: "Everyone in this country should learn to program a computer, because it teaches you to think.",
        source: "Steve Jobs",
        category: "#programming"
    },
    {
        quote: "If you can’t explain something in simple terms, you don’t understand it.",
        source: "Richard Feynman",
        category: "#learning"
    },
    {
        quote: "The art of debugging is figuring out what you really told your program to do rather than what you thought you told it to do.",
        source: "Andrew Singer",
        category: "#programming"
    },
    {
        quote: "The elevator to success is out of order. You'll have to use the stairs... one step at a time.",
        source: "Joe Girard",
        category: "#success"
    },
    {
        quote: "Falling in love with code means falling in love with problem solving and being a part of a forever ongoing conversation.",
        source: "Kathryn Barrett",
        category: "#programming"
    },
    {
        quote: "There’s a big difference between making a simple product & making a product simple.",
        source: "Des Traynor",
        category: "#programming"
    },
    {
        quote: "Documentation is a love letter that you write to your future self.",
        source: "Damian Conway",
        category: "#programming"
    },
    {
        quote: "If at first you don’t succeed, call it version 1.0.",
        source: "Unknown",
        category: "#success"
    },
    {
        quote: "Weeks of coding can save you hours of planning.",
        source: "Unknown",
        category: "#programming"
    },
    {
        quote: "Commenting your code is like cleaning your bathroom - you never want to do it, but it really does create a more pleasant experience for you and your guests.",
        source: "Ryan Campbell",
        category: "#programming"
    },
    {
        quote: "It turns out that style matters in programming for the same reason that it matters in writing. It makes for better reading.",
        source: "Douglas Crockford",
        category: "#programming"
    },
    {
        quote: "So much complexity in software comes from trying to make one thing do two things.",
        source: "Ryan Singer",
        category: "#programming"
    },
    {
        quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        source: "Martin Fowler",
        category: "#programming"
    },
    {
        quote: "Programming is the art of doing one thing at a time.",
        source: "Michael Feathers",
        category: "#programming"
    },
    {
        quote: "First do it, then do it right, then do it better.",
        source: "Addy Osmani",
        category: "#success"
    },
    {
        quote: "Programming is not about typing, it's about thinking.",
        source: "Rich Hickey",
        category: "#programming"
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        source: "Confucius",
        category: "#success"
    },
    {
        quote: "It's hard enough to find an error in your code when you're looking for it. It's even harder when you've assumed your code is error-free.",
        source: "Steve McConnell",
        category: "#programming"
    },
    {
        quote: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.",
        source: "Dan Salomon",
        category: "#programming"
    },
    {
        quote: "Programming isn’t about what you know. It’s about what you can figure out.",
        source: "Chris Pine",
        category: "#programming"
    },
    {
        quote: "Real artists ship.",
        source: "Steve Jobs",
        category: "#programming"
    },
    {
        quote: "JavaScript is the duct tape of the internet.",
        source: "Charlie Campbell",
        category: "#programming"
    },
    {
        quote: "Do not compare yourself to others. Compare yourself to the person you were yesterday.",
        source: "Anonymous",
        category: "#success"
    },
    {
        quote: "The most certain way to succeed is always to try just one more time.",
        source: "Thomas Edison",
        category: "#success"
    }
];
// creates an array of objects to store background and button color information
// I didn't want to fully randomize the color because it can sometimes lead to poor contrast between quotes and background
const colors = [
    {
        background: "#ff2e63", //pink
        button: "#252a34"
    },
    {
        background: "#00adb5", //teal
        button: "#393e46"
    },
    {
        background: "#f38181", //salmon
        button: "#625772"
    },
    {
        background: "#6639a6", //purple
        button: "#521262"
    },
    {
        background: "#3f72af", //blue
        button: "#112d4e"
    },
    {
        background: "#f95959", //orange
        button: "#455d7a"
    },
    {
        background: "#a3de83", //lt green
        button: "#2eb872"
    },
    {
        background: "#118df0", //bright blue
        button: "#0e2f56"
    },
    {
        background: "#ff5722", //bright orange
        button: "#393e46"
    },
    {
        background: "#3fc1c9", //aqua
        button: "#fc5185"
    },
    {
        background: "#e6a4b4", //very soft red
        button: "#c86b85"
    }
];
// will be used to store the previously returned quotes
const quotesReturned = [];
let colorsReturned = [];
let timer;

/**
 * selects a random quote object from the quotes array
 * 
 * @return {object} randomly selected quotes object
 */
function getRandomQuote() {
    // if no objects remain in the quotes array, restores the quotes array to its original state by combining the two arrays
    if (quotes.length === 0) {
        quotes.push.apply(quotes, quotesReturned);
    }
    
    const randomQuote = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomQuote];

    // adds the selected quote to the quotesReturned array
    quotesReturned.push(quote);
    // removes the selected quote from the quotes array
    quotes.splice(randomQuote, 1);

    return quote;

}

/**
 * selects a random quote object from the colors array
 * 
 * @return {object} randomly selected colors object
 */
function getRandomColor() {
    // if no objects remain in the colors array, restores the colors array to its original state by combining the two arrays
    // and resets the colorReturned array to an empty array
    if (colors.length === 0) {
        colors.push.apply(colors, colorsReturned);
        colorsReturned = [];
    }

    const randomColor = Math.floor(Math.random() * colors.length);
    const color = colors[randomColor];

    // adds the selected color to the colorsReturned array
    colorsReturned.push(color);
    // removes the selected color from the colors array
    colors.splice(randomColor, 1);

    return color;
}

// assigns a setInterval method to the variable so that the printQuote function will automatically run after 10 seconds
function startTimer(interval) {
    // clears the setInterval method from the timer variable
    clearInterval(timer);
    timer = setInterval(printQuote, interval);
}

function printQuote() {
    // creates the currentQuote variable and sets the value to the random object that is returned when the getRandomQuote function is called
    const currentQuote = getRandomQuote();
    const currentColor = getRandomColor();
    // creates the html variable and uses the currentQuote variable along with key values to build a string
    let html = "";
    html = "<p class='quote'> " + currentQuote.quote + "</p>";
    html += "<p class='source'> " + currentQuote.source;
    // tests to see if the citation property is present in the currentQuote and if so, adds it to the string
    if ("citation" in currentQuote) {
        html += "<span class='citation'> " + currentQuote.citation + "</span>";
    }
    // tests to see if the date property is present in the currentQuote and if so, adds it to the string
    if ("date" in currentQuote) {
        html += "<span class='year'> " + currentQuote.date + "</span>";
    }
    html += "<span class='category'> " + currentQuote.category + "</span>";

    // writes the info from the html variable to the div with the quote-box id
    // uses the currentColor variable to change the background color
    // uses the currentColor variable to change the button color
    document.getElementById("quote-box").innerHTML = html;
    document.body.style.background = currentColor.background;
    document.getElementById("loadQuote").style.background = currentColor.button;

    // clears any previous timers that might be running and starts a new one
    startTimer(10000);
}

// runs the printQuote function upon initial page load
printQuote();

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
