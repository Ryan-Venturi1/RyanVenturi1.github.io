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
    upButtons.forEach(button => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = randomColor;
        moveElement(button);
    });
}

function volumedown() {
    downButtons.forEach(button => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = randomColor;
        moveElement(button);
    });
}

function volumebox() {
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

