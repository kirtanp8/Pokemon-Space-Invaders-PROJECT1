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
setInterval(() => {
  if (currentPositionOfBullet >=  11) {
      allCells[currentPositionOfBullet].classList.remove('flame')
      currentPositionOfBullet -= 11
      allCells[currentPositionOfBullet].classList.add('flame')
  }
  if (allCells[currentPositionOfBullet].classList.contains('evilPokemon') === true) {
    let defeatedEnemy = enemyIndex.indexOf(currentPositionOfBullet)
    enemyDestroyed.push(defeatedEnemy + 1)
    allCells[currentPositionOfBullet].classList.remove('evilPokemon')
    charizard.pointIncrease()      
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
}
// 
window.addEventListener('DOMContentLoaded', init)
