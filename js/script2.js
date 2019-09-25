let boardRows = 12;
let boardCols = 12;
let squareSize = 50;


let gameBoardContainer = document.getElementById("gameboard");

for (i = 0; i < boardCols; i++) {
	for (k = 0; k < boardRows; k++) {

		let cube = document.createElement("div");
        gameBoardContainer.appendChild(cube);
        
		cube.id = 'carre_' + k + i;			
		
		let topPosition = k * squareSize;
		let leftPosition = i * squareSize;			
		
		cube.style.top = topPosition + 'px';
        cube.style.left = leftPosition + 'px';
        
        //console.log(cube.id);
	}
}


let Carrier     = [1,1,1,1,1];
let Battleship  = [1,1,1,1];
let Destroyer   = [1,1,1];
let Submarine   = [1,1,1];
let PatrolBoat  = [1,1];

let arr = [0,0,0,0,0,0,0,0,0,0,0,0];

let emptyGame = [
                [0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0]
];

arr.push(Carrier);



console.log(arr);

// let rand = Math.floor(Math.random() * 2);

// for (let a=0; a<12; a++) {
//     console.log( Math.floor(Math.random() * 2) );
//     for (let b=0; b<12; b++) {
//         console.log(b);
//     }
// }

//console.log(emptyGame);


