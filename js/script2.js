let line = 10;
let colone = 10;
let shotLeft = 20;
let sound = document.body.querySelector('#sound');

let gameboard = document.querySelector('#gameboard');
gameboard.addEventListener('click', shoot);
let winShots = 0;
let board = [];

for (r=0; r<line; r++) {
    let arr = [];
    let row = document.createElement('div');
    row.className = 'row';

    for (c=0; c<colone; c++) {
        arr.push(0);
        let square = document.createElement('div');
        square.className = 'cell-'+r+c;
        row.appendChild(square);
    }
    board.push(arr);
    gameboard.appendChild(row);
}

    boat(5); 
    boat(4); 
    boat(3); 
    boat(3); 
    boat(2);
    console.log(board);


function boat(boatLenght) {

    let done = false;
    while (!done) {

        let Rline = getRandom(line);
        let Col = getRandom(colone);

        let ship_position = [[Rline,Col]];

        if (board[Rline][Col] === 0) {

            ship_position = position(Rline, Col, boatLenght);

            let available = checkAvailability(ship_position);

            if (available) {
                for (p in ship_position) {
                    board[ ship_position[p][0] ][ ship_position[p][1] ] = boatLenght;
                }

                winShots += boatLenght;
                done = true;
            }
        }
    }
}

function shoot(element) {

    let e = element.target;

    if (e.className.indexOf('cell') !== -1) {

        let r = e.className.substr(5,1);
        let c = e.className.substr(6,1);

        if (board[r][c] > 0) {
            e.style.background = 'blue';
            board[r][c] = -1;
            winShots--;
            document.body.querySelector('#msg').className = "alert alert-primary";
            document.body.querySelector('#msg').innerHTML = "YOU HIT A BOAT  !!!";
        }
        else if (board[r][c] !== -1) {
            e.style.background = '#000';
            shotLeft--;
            document.body.querySelector('#msg').className = "alert alert-warning";
            document.body.querySelector('#msg').innerHTML = `YOU MISSED ! Try again <span class="float-right">Shots Left: ${shotLeft}</span>`;
        }

        if (shotLeft === 0) {
            document.body.querySelector('#msg').className = "alert alert-danger";
            // document.body.querySelector('#msg').innerHTML = "GAME OVER <br> Try Again... Reloading Page";
            // document.body.querySelector('#gameOver').innerHTML = `<iframe src="https://giphy.com/embed/JUSwkiO1Eh5K43ruN0" width="960" height="574" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`;
            document.body.querySelector('#gameOver').innerHTML = `<img src="images/over.gif"  width="960" height="574" />`;
            sound.play();
            setTimeout(function(){ 
                location.reload();
             }, 15000);
            
        }

        else if (winShots === 0) {
            document.body.querySelector('#msg').className = "alert alert-success";
            document.body.querySelector('#msg').innerHTML = "Congratulations, you have climbed to the top! Great job!";
            setTimeout(function(){ 
                location.reload();
             }, 6000);
            } 
    }
}


function getRandom(range) {
    if (range === 1)
        return Math.floor( Math.random() * 2 );
    return Math.floor( Math.random() * range );
}

function position(r, c, boatLenght) {

    let arr = [[r,c]];
    let vh = getRandom(1);
    let side = false;
    for (i=1; i<boatLenght; i++) {
        if (vh) {
            if (side) {
                r += i;
                arr.push([r, c]);
                side = false;
            } else {
                r -= i;
                arr.push([r, c]);
                side = true;
            }
        } else {
            if (side) {
                c += i;
                arr.push([r, c]);
                side = false;
            }
            else {
                c -= i;
                arr.push([r, c]);
                side = true;
            }
        }
    }
    return arr;
}
function checkAvailability(arr) {
    for (i in arr) {
        let r = arr[i][0];
        let c = arr[i][1];
        if (r >= line || r < 0 || c >= colone || c < 0 ||  board[r][c] !== 0)
            return false;
    }
    return true;
}