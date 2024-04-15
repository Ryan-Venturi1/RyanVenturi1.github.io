document.addEventListener('DOMContentLoaded', () => {
    const endpoint = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
    const quoteText = document.querySelector("#js-quote-text");
    const answerText = document.querySelector("#js-answer-text");
    const newQuoteBtn = document.querySelector('#js-new-quote');
    const showRecipeBtn = document.querySelector('#js-answer');
    let answer = "";

    async function getQuote() {
        try {
            const randomEndpoint = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;
            const response = await fetch(randomEndpoint);
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const json = await response.json();
            
            quoteText.textContent = json["drinks"][0]["strDrink"];
            answer = json["drinks"][0]["strInstructions"];
            answerText.textContent = "";

        } catch(err) {
            console.log(err);
            alert("Failed to fetch new quote");
        }
    }

    newQuoteBtn.addEventListener('click', () => {
        getQuote();
        answerText.textContent = ""; // Clear the recipe text when generating a new quote
    });

    showRecipeBtn.addEventListener('click', () => {
        if (!answer) {
            answerText.textContent = "Please generate a new quote first!";
        } else {
            answerText.textContent = answer;
        }
    });
});