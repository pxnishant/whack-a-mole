const box = document.getElementById('box')
let moleTile;

window.onload = () => {

    score = 0
    initialize();   
    setInterval(showMole, 2000)

}

const clickEvent = () => {

    console.log(this.tile.id, moleTile)

    if (this.tile == moleTile) {
        this.tile.innerHTML = ''
        score += 1
        const sc = document.getElementById('score')
        sc.innerText = `SCORE: ${score}`
        moleTile = -1
    }

}

function showMole() {

    for (let i=0; i<9; i++) {

        const sq = document.getElementById(i)
        sq.innerHTML = ''

    }

    tileid = Math.floor(Math.random() * 9)

    tile = document.getElementById(tileid)

    const mole = document.createElement('img')
    mole.src = 'images/character.png'
    mole.height = 80
    tile.append(mole)
    moleTile = tile

}



function resetScore() {

    score = 0
    const sc = document.getElementById('score')
    sc.innerText = `SCORE: ${score}`

}

function initialize() {

    for (let i=0; i<9; i++) {

        const sq = document.createElement('div');
        sq.id = i;
        sq.style.border = "2px solid #3B1C32"
        sq.addEventListener('click', clickEvent)
        box.append(sq)

    }

    const resetButton = document.getElementById('reset')
    resetButton.addEventListener('click', () => resetScore())

}