

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}




let storytext=["It was 75 degrees fahrenheit outside, so :insertx: went on a car ride. When they got to :inserty:, they laughed for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 185 pounds, and it was a hot day."]
let insertX=["Adam Sandeler the Golfer ","Big bed","Adam Sandeler the Father of Chanukah"]
let insertY=["the Redwoods","the Washington","Las Vegas"]
let insertZ=["magically exploded","grew into a monster","turned into a Kevin James and Segwayed away"]




let newStory=storytext[0]
randomize.addEventListener('click', result);

function result() {

xItem = randomValueFromArray(insertX)
yItem = randomValueFromArray(insertY)
zItem = randomValueFromArray(insertZ)

newStory = newStory.replace(':insertx:', `${xItem}`);
newStory = newStory.replace(':inserty:', `${yItem}`);
newStory = newStory.replace(':insertz:', `${zItem}`);


  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(185 * 0.0714286);
    const temperature = Math.round(75 * 1.8 + 32);
    newStory = newStory.replace('185 pounds', `${weight} stone`);
    newStory = newStory.replace('75 degrees', `${temperature} degrees Celsius`);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}