function init() {

let index = 115;
let shotPosition = 0;
let score = 0
let level = 1; 
/// Create Grid




// function LevelOne {
if (score >= 899) { 
  console.log("level one complete")
} else {
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
const levelUpdate = document.querySelector('.level')
let scoreAnnouncement = document.querySelector('.score')
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

function updateScore() {
  return scoreAnnouncement.innerHTML   = "SCORE:" + score
}

function levelAnnounce() {
levelUpdate.innerHTML = "level:" + level
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
    clearInterval(levelOneCommence)
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
    score += 100
    updateScore()
    allCells[currentPositionOfBullet].classList.remove('evilPokemon')       
} else if(currentPositionOfBullet >= 0) {
       allCells[currentPositionOfBullet].classList.remove('flame')
        allCells[currentPositionOfBullet].classList.add('flame')
}
 }, 200 )
 
  }     
let levelOneCommence = setInterval(blastoiseMove, 500 )

// bracket before the else 
}


// console.log("Level One Complete")


//    

function levelTwo() {
  //Level 2
let backwardsCharmanderIndex = [12, 13, 15, 16, 18, 20, 34, 37, 40, 42, 55, 57, 58, 61, 63, 64, 78, 79, 82, 83, 84, 99, 100, 102, 103, 106, 108]
let charmanderForwardsIndex = [11, 14, 17, 19, 35, 36, 38, 39, 41 , 43, 56, 59, 60, 62, 80, 81, 85, 86, 87, 101, 104, 105, 107]
let motherCharizard = 110
let moveDownOptions = [10, 21, 22, 33, 54, 65, 66, 77, 98, 109]
let moveUpOptions = [21, 32, 33, 44, 65, 76, 77, 88, 109]
let noGoZone = [21, 33, 65, 77, 109]


function createGridLevel2() {
array = []
  for (let i = 0; i < 121; i++) {
    array.push(i)
}
const grid = document.querySelector('.grid')
array.forEach((className, i) => {
  const newCell = document.createElement('div')
  grid.appendChild(newCell)
  newCell.classList.add(className)
  newCell.innerHTML = i;
})
}




createGridLevel2() 


const allCellsLevel2 = document.querySelectorAll('.grid div')


function addCharizardLevel2(indexLevel2) {
let playerIndexLevel2 = allCellsLevel2[indexLevel2]
playerIndexLevel2.classList.add('goodPokemon')
}


function removeCharizardLevel2(indexLevel2) {
  playerIndexLevel2 = allCellsLevel2[indexLevel2]
playerIndexLevel2.classList.remove('goodPokemon')
}

removeCharizardLevel2(indexLevel2)
addCharizardLevel2(indexLevel2)

function handleKeyUpLvl2(event) {
    const key = event.keyCode
    if (key === 37 && indexLevel2 % 11 !== 0 && indexLevel2 !== 111 && !noGoZone.includes(indexLevel2)) {
  removeCharizardLevel2(indexLevel2)
    indexLevel2--
    }
  else if (key === 39 && (indexLevel2 + 1) % 11 !== 0 && !noGoZone.includes(indexLevel2)) {
  removeCharizardLevel2(indexLevel2)
   indexLevel2++
  } 
  else if (key === 40 && moveDownOptions.includes(indexLevel2) === true) {
    removeCharizardLevel2(indexLevel2)
    indexLevel2 += 11
  }
  else if (key === 38 && moveUpOptions.includes(indexLevel2) === true) {
    removeCharizardLevel2(indexLevel2)
    indexLevel2 -= 11
  } else {
    return
  }
  addCharizardLevel2(indexLevel2)
  }




for(let i = 0; i < backwardsCharmanderIndex.length; i++) {
  allCellsLevel2[backwardsCharmanderIndex[i]].classList.add('charmanderBackwards')
}

for(let i = 0; i < charmanderForwardsIndex.length; i++) {
  allCellsLevel2[charmanderForwardsIndex[i]].classList.add('charmanderForwards')
}




function faceBackwardsShot() {
let randomBackwards = backwardsCharmanderIndex[Math.floor(Math.random()* backwardsCharmanderIndex.length)]
let temp = randomBackwards
allCellsLevel2[temp - 11].classList.add('flame')
setTimeout(() => allCellsLevel2[temp - 11].classList.remove('flame'), 500)
gameOver()
}

function faceForwardsShot() {
  let randomForwards = charmanderForwardsIndex[Math.floor(Math.random()* charmanderForwardsIndex.length)]
  let tempForward = randomForwards
  allCellsLevel2[tempForward + 11].classList.add('flame')
  setTimeout(() => allCellsLevel2[tempForward + 11].classList.remove('flame'), 500)
  gameOver()
}

setInterval(faceForwardsShot, 700)
setInterval(faceForwardsShot, 700)
setInterval(faceForwardsShot, 700)
setInterval(faceBackwardsShot, 700)
setInterval(faceBackwardsShot, 700)
setInterval(faceBackwardsShot, 700)

allCellsLevel2[motherCharizard].classList.add('motherCharizard')

if (indexLevel2 > 110) {
  console.log("Time for Level3?")
} 

function gameOver() {
if(allCellsLevel2[indexLevel2].classList.contains('flame')) {
console.log("Game Over")
}
}
 document.addEventListener('keyup', handleKeyUpLvl2)
} 


// level 2 Bracket

// if (score >= 900) {
//   return levelTwo()
// }  

}
window.addEventListener('DOMContentLoaded', init)
