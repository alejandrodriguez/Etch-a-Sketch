const gridContainer = document.querySelector('.grid-container');
const gridSquares = [];

function randomizeRGB(){
    let randomRGB = Math.floor(Math.random()*256);
    return randomRGB;
}

console.log(randomizeRGB())

for (let i = 0; i < 256; i++) {
    gridSquares[i] = document.createElement('div');
    gridSquares[i].classList.add('grid-square');
    gridSquares[i].addEventListener('mouseover', () => {
        gridSquares[i].style.backgroundColor = `rgb(${randomizeRGB()},${randomizeRGB()},${randomizeRGB()})`;
    });
    gridContainer.appendChild(gridSquares[i]);
}

const btn = document.querySelector('button');
btn.addEventListener('click', resetGrid);

function resetGrid(){
    let userSelection = prompt('Please enter a number between 1-100');
    if (!(userSelection >= 1 && userSelection <= 100)){
        alert('Error');
    } else {
        for (let i = 0; i < gridSquares.length; i++) {
            gridContainer.removeChild(gridSquares[i]);
        }
        gridSquares.splice(0, gridSquares.length);
        gridContainer.style.gridTemplateColumns = `repeat(${userSelection}, 1fr)`;
        for (let i = 0; i < userSelection * userSelection; i++) {
            gridSquares[i] = document.createElement('div');
            gridSquares[i].classList.add('grid-square');
            gridSquares[i].addEventListener('mouseover', () => {
                gridSquares[i].style.backgroundColor = `rgb(${randomizeRGB()},${randomizeRGB()},${randomizeRGB()})`;
            });
            gridContainer.appendChild(gridSquares[i]);
        }
    }
}