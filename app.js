function init() {

  let firstRowLevelEnemy =  [1, 2, 3, 4, 5, 6, 7, 8, 9]
  let secondLevelEnemy =    [12, 13, 14, 15, 16, 17, 18, 19, 20]
  let thirdRowLevelEnemy = [23, 24, 25, 26, 27, 28, 29, 30, 31]
  let enemyDestroyed = []
  // charizard Object 
  let blastoisePosition 
  let gengarPosition
  
  
  
  
  let charizard = {
    // could potentially use a progress bar here with health points.  
      lives: 3, 
      points: 0,
     get healthPointDrop() {
        return this.lives--
      },

     get pointIncrease() {
        this.points += 100
        return
      }
    }

let index = 115  
// function call to create grid
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
createGrid()

const allCells = document.querySelectorAll('.grid div')

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

 function fireShot() {
let currentPositionOfBullet = shotPosition
let x = setInterval(() => {
      allCells[currentPositionOfBullet].classList.remove('flame')
      currentPositionOfBullet -= 11
      allCells[currentPositionOfBullet].classList.add('flame')

if(allCells[currentPositionOfBullet].classList.contains('gengar')) {
    let defeatedEnemy = thirdRowLevelEnemy.indexOf(currentPositionOfBullet)
    enemyDestroyed.push(defeatedEnemy + 1)
    allCells[currentPositionOfBullet].classList.remove('gengar')
    setTimeout(allCells[currentPositionOfBullet].classList.remove('flame'), 600)
    charizard.pointIncrease() 
    clearInterval(x)
}

 else if(allCells[currentPositionOfBullet].classList.contains('blastoise')) {
    let defeatedEnemy = secondLevelEnemy.indexOf(currentPositionOfBullet)
    enemyDestroyed.push(defeatedEnemy + 1)
    allCells[currentPositionOfBullet].classList.remove('blastoise')  
    charizard.pointIncrease()   
    setTimeout(allCells[currentPositionOfBullet].classList.remove('flame'), 600)
      clearInterval(x)
  }
else if (allCells[currentPositionOfBullet].classList.contains('dragonite')) {
    let defeatedEnemy = firstRowLevelEnemy.indexOf(currentPositionOfBullet)
    enemyDestroyed.push(defeatedEnemy + 1)
    allCells[currentPositionOfBullet].classList.remove('dragonite')
   allCells[currentPositionOfBullet].classList.remove('flame')
    charizard.pointIncrease()
  setTimeout(allCells[currentPositionOfBullet].classList.remove('flame'), 600) 
    clearInterval(x)
} 


if (currentPositionOfBullet > 0) {
    allCells[currentPositionOfBullet].classList.remove('flame')
    allCells[currentPositionOfBullet].classList.add('flame')
} 
if (currentPositionOfBullet <= 10) {
       allCells[currentPositionOfBullet].classList.remove('flame')
}
}, 200)
}    

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

  function addFirstRowLevelEnemy() {
  for (let i = 0; i < firstRowLevelEnemy.length; i++) {
    if (!enemyDestroyed.includes(i + 1)) {
   allCells[firstRowLevelEnemy[i]].classList.add('dragonite')
    }
  }
  return 
}
  function addSecondLevelEnemy() {
  for (let i = 0; i < secondLevelEnemy.length; i++) {
    if (!enemyDestroyed.includes(i + 1)) {
   allCells[secondLevelEnemy[i]].classList.add('blastoise')
    }
  }
  return
  }


    function addThirdRowLevelEnemy() {
  for (let i = 0; i < thirdRowLevelEnemy.length; i++) {
     if (!enemyDestroyed.includes(i + 1)) {
   allCells[thirdRowLevelEnemy[i]].classList.add('gengar')
    }
  }
  return
}


  function removeFirstRowEnemy() {
 for (let i = 0; i < firstRowLevelEnemy.length; i++) {
   if (!enemyDestroyed.includes(i + 1)) {
    allCells[firstRowLevelEnemy[i]].classList.remove('dragonite')
   }
  }
  return
}

  function removeSecondRowEnemy() {
 for (let i = 0; i < secondLevelEnemy.length; i++) {
   if (!enemyDestroyed.includes(i + 1)) {
    allCells[secondLevelEnemy[i]].classList.remove('blastoise')
   }
  }
  return
  }
function removeThirdRowEnemy() {
 for (let i = 0; i < thirdRowLevelEnemy.length; i++) {
   if (!enemyDestroyed.includes(i + 1)) {
    allCells[thirdRowLevelEnemy[i]].classList.remove('gengar')
   }
  }
  return 
} 

removeFirstRowEnemy()
removeSecondRowEnemy()
removeThirdRowEnemy()
addFirstRowLevelEnemy()
addSecondLevelEnemy()
addThirdRowLevelEnemy()

function dragoniteFire() {
 let dragoniteBulletPosition = firstRowLevelEnemy[Math.floor(Math.random() * firstRowLevelEnemy.length)]
 setInterval(() => {
      allCells[dragoniteBulletPosition].classList.remove('dragoniteflame')
      dragoniteBulletPosition += 11
      allCells[dragoniteBulletPosition].classList.add('dragoniteflame')
     if (allCells[dragoniteBulletPosition].classList.contains('goodPokemon')) {
         charizard.healthPointDrop()
      setTimeout(allCells[dragoniteBulletPosition].classList.remove('dragoniteflame'), 300)
     }
    if(dragoniteBulletPosition > 120) {
     allCells[dragoniteBulletPosition].classList.remove('dragoniteflame')
     return
      }
    },200) 
}

function blastoiseDrop() {
 let blastoiseDropPosition = secondLevelEnemy[Math.floor(Math.random() * firstRowLevelEnemy.length)]
 setInterval(() => {
      allCells[blastoiseDropPosition].classList.remove('water')
      blastoiseDropPosition += 11
      allCells[blastoiseDropPosition].classList.add('water'  )
     if (allCells[blastoiseDropPosition].classList.contains('goodPokemon')) {
         charizard.healthPointDrop()
      setTimeout(allCells[blastoiseDropPosition].classList.remove('water'), 300)
     }
    if(blastoiseDropPosition > 120) {
     allCells[blastoiseDropPosition].classList.remove('water')
     return
      }
    },200)
}

function gengarDrop() {
 let gengarDropPosition = secondLevelEnemy[Math.floor(Math.random() * firstRowLevelEnemy.length)]
 setInterval(() => {
      allCells[gengarDropPosition].classList.remove('purpleball')
      gengarDropPosition += 11
      allCells[gengarDropPosition].classList.add('purpleball')
     if (allCells[gengarDropPosition].classList.contains('goodPokemon')) {
         charizard.healthPointDrop()
      setTimeout(allCells[gengarDropPosition].classList.remove('purpleball'), 300)
     }
    if(gengarDropPosition > 120) {
     allCells[gengarDropPosition].classList.remove('purpleball')
      return  
    }
    },200)
}

setInterval(gengarDrop, 1000)
setInterval(blastoiseDrop, 300)
setInterval(dragoniteFire, 600)

function moveDragoniteLeft() {
   removeFirstRowEnemy()
    for (let i = 0; i < firstRowLevelEnemy.length; i++) {
    firstRowLevelEnemy[i] -= 1
    }
    addFirstRowLevelEnemy()
}

function moveDragoniteRight() {
   removeFirstRowEnemy()
    for (let i = 0; i < firstRowLevelEnemy.length; i++) {
    firstRowLevelEnemy[i] += 1
    }
    addFirstRowLevelEnemy()
}

function moveBlastoiseLeft() {
  removeSecondRowEnemy() 
  for (let i = 0; i < secondLevelEnemy.length; i++) {
    secondLevelEnemy[i] -= 1
    }
  addSecondLevelEnemy()
}

function moveBlastoiseRight() {
  removeSecondRowEnemy() 
  for (let i = 0; i < secondLevelEnemy.length; i++) {
    secondLevelEnemy[i] += 1
    }
  addSecondLevelEnemy()
}
moveBlastoiseRight()


function gengarMoveLeft() {
  removeThirdRowEnemy()
   for (let i = 0; i < thirdRowLevelEnemy.length; i++) {
    thirdRowLevelEnemy[i] -= 1
    }
   addThirdRowLevelEnemy()
}

function gengarMoveRight() {
  removeThirdRowEnemy()
  for (let i = 0; i < thirdRowLevelEnemy.length; i++) {
    thirdRowLevelEnemy[i] += 1
    }
  addThirdRowLevelEnemy()
}



function moveEnemiesFirstRow() {
  switch(firstRowLevelEnemy[0]){
    case 0:
      moveDragoniteRight()
      break;
    case 1:
      moveDragoniteLeft()
      break;
  }
  return
}


function secondRowEnemyMovement(){
  switch(secondLevelEnemy[0]){
    case 2:
      moveBlastoiseLeft()
      break;
    case 1:
      moveBlastoiseRight()
      break;
  }
  return
}
setInterval(secondRowEnemyMovement, 300)

}
// 
window.addEventListener('DOMContentLoaded', init)
