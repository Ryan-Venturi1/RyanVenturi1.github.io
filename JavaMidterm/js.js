const audioContext = new AudioContext();
const gainNode = audioContext.createGain();
gainNode.connect(audioContext.destination);

const upButtons = document.querySelectorAll('.Up-Button');
const downButtons = document.querySelectorAll('.Down-Button');
const box = document.querySelectorAll('.Volume-Box');

function moveElement(element) {  
    const left = Math.floor(Math.random() * window.innerWidth);
    const top = Math.floor(Math.random() * window.innerHeight);
    element.style.position = 'absolute';
    element.style.left = `${left}px`;
    element.style.top = `${top}px`;
}

function volumeup() {
    gainNode.gain.value += 0.01;
    upButtons.forEach(button => {
        const currentFontSize = parseFloat(window.getComputedStyle(button).fontSize);
        button.style.fontSize = `${currentFontSize * 1.03}px`; 
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = randomColor;
        moveElement(button);
    });
}

function volumedown() {
    gainNode.gain.value -= 0.01;
    downButtons.forEach(button => {
        const currentFontSize = parseFloat(window.getComputedStyle(button).fontSize);
        button.style.fontSize = `${currentFontSize * 0.97}px`; 
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = randomColor;
        moveElement(button);
    });
}

function volumebox() {
    const volume = gainNode.gain.value * 100;
    box.forEach(box => {
        box.textContent = Math.round(volume);  
    });
}

upButtons.forEach(button => {
    button.addEventListener('click', volumeup);
    moveElement(button);  
});

downButtons.forEach(button => {
    button.addEventListener('click', volumedown);
    moveElement(button);  
});
