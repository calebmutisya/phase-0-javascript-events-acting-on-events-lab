// Your code here
const dodger = document.getElementById('dodger');

function moveDodgerLeft(){
    const currentPosition =parseInt(dodger.style.left) || 0;
    const newPosition = Math.max(currentPosition - 10, 0);
    dodger.style.left = newPosition + 'px';
}

function moveDodgerRight(){
    const currentPosition =parseInt(dodger.style.left) || 0;
    const newPosition = Math.min(currentPosition + 10, 360);
    dodger.style.left = newPosition + 'px';
}
