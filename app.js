function init() {


//axis 
let index = 115;
let shotPosition = 0;
let score = 0;

/// Create Grid
function createGrid() {
array = []
  for (let i = 0; i < 121; i++) {
    array.push(i)
}
const grid = document.querySelector('.grid')
array.forEach((className, i) => {
  const newCell = document.createElement('div')
  grid.appendChild(newCell)
  newCell.classList.add(className)
  // newCell.innerHTML = i;
})
}
// function call to create grid
createGrid()

///// 
const allCells = document.querySelectorAll('.grid div')
let enemyIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9] 
let enemyDestroyed = []


  

function handleKeyUp(event) {
    const key = event.keyCode
    if (key === 39 && index !== 120) {
  removeCharizard(index)
      index++
    } else if (key === 37 && index !== 110) {
  removeCharizard(index)
      index--
    } else if (key === 32) {
      fireShot()
    } else {
      return 
    }
    addCharizard(index)
  }
 document.addEventListener('keyup', handleKeyUp)


// add Charizard to Game


function addCharizard(index) {
let playerIndex = allCells[index]
playerIndex.classList.add('goodPokemon')
shotPosition = index
}
addCharizard(index)

function removeCharizard(index) {
  let playerIndex = allCells[index]
playerIndex.classList.remove('goodPokemon')
}


function addBlastoise() {
  for (let i = 0; i < enemyIndex.length; i++) {
    if (!enemyDestroyed.includes(i + 1)) {
     allCells[enemyIndex[i]].classList.add('evilPokemon')
    }
  }
  return
}

function removeBlastoise() {
 for (let i = 0; i < enemyIndex.length; i++) {
   if (!enemyDestroyed.includes(i + 1)) {
    allCells[enemyIndex[i]].classList.remove('evilPokemon')
   }
  }
  return
}
  
removeBlastoise()
addBlastoise()

function moveLeft() { 
    removeBlastoise()
    for (let i = 0; i < enemyIndex.length; i++) {
    enemyIndex[i] -= 1
  }  
    addBlastoise()
}

function moveDown() {
    removeBlastoise()
     for (let i = 0; i < enemyIndex.length; i++) {
    enemyIndex[i] += 11
}
 addBlastoise()
}

function moveRight() {
  removeBlastoise() 
  for (let i = 0; i < enemyIndex.length; i++) {
  enemyIndex[i] += 1
 }
 addBlastoise()
}


function blastoiseMove() {
switch(enemyIndex[0]) {
  case 0:
  case 13:
  case 22:
  case 35:
  case 44:
  case 57:
  case 66:
  case 79:
  case 88:
  case 101:
      return moveDown()
      break;
  case 1:
  case 23:
  case 24:
  case 45:
  case 46:
  case 67:
  case 68:
  case 89:
  case 90:
  case 91:
  case 111:
  case 112:
      return moveLeft()
      break;
  case 11:
  case 12:
  case 33:
  case 34:
  case 55:
  case 56:
  case 77:
  case 78:
  case 99:
  case 100:
 return moveRight()
  break;
  default:
    console.log("Do Nothing")
}
}
//  

function fireShot() {
  let currentPositionOfBullet = (shotPosition)
   setInterval(() => {
      allCells[currentPositionOfBullet].classList.remove('flame')
      currentPositionOfBullet -= 11
      allCells[currentPositionOfBullet].classList.add('flame')

  if (allCells[currentPositionOfBullet].classList.contains('evilPokemon')) {
    let defeatedEnemy = enemyIndex.indexOf(currentPositionOfBullet)
    enemyDestroyed.push(defeatedEnemy + 1)
    console.log(enemyDestroyed)
    score += 100
    allCells[currentPositionOfBullet].classList.remove('evilPokemon')       
} else if(currentPositionOfBullet >= 0) {
       allCells[currentPositionOfBullet].classList.remove('flame')
        allCells[currentPositionOfBullet].classList.add('flame')
}
 }, 200 )
 
  }     
setInterval(blastoiseMove, 2000)

}
window.addEventListener('DOMContentLoaded', init)
