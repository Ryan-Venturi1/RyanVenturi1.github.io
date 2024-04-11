addEventListener('load', getQoute);

const btn = document.querySelector('#js-new-quote');
btn.addEventListener('click', getQoute);

const answerBtn = document.querySelector('#js-tweet');
answerBtn.addEventListener('click', getAnswer);

const answerText = document.querySelector('#js-answer-text');


const endpoint= "https://trivia.cyberwisp.com/getrandomchristmasquestion";


let answer = "";


async function getQoute() {
    try {
        const response = await fetch (endpoint);
        if (!response.ok) {
            throw Error(response.statusText)
        }
        const json = await response.json();
        
        displayQoute(json["question"]);
        answer=json["answer"];
        answerText.textContent= " ";

        

        
    }
    catch(err){
        console.log(err);
        alert("Failed to fetch new quote");
    }

    function displayQoute(qoute){
        const qouteText = document.querySelector("#js-quote-text");
        qouteText.textContent = qoute;

    }


}

function getAnswer(){
    answerText.textContent = answer;

}

