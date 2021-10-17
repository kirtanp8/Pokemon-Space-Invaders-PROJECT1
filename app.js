function init() {

function createGrid() {
let gridArray = []
  for (let i = 0; i < 121; i++) {
    gridArray.push(i)
}
const grid = document.querySelector('.grid')

gridArray.forEach((className, i) => {
  const newCell = document.createElement('div')
  grid.appendChild(newCell)
  newCell.classList.add(className)
})
}
createGrid()
let trainerShoot
let movePokemon
let moveTrainer
let levelThreeReady = false
let levelOneInProgress = false
let levelTwoInProgress = false
let levelThreeInProgress = false
// let youWinMessage = false
let speed = 2000
let goingRight = true
let movement = 1
let enemyDestroyed = []
let playerPoints = 0
let healthPointsCount = 100
let enemyArray =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 16, 17, 18, 19, 20, 23, 24, 25, 26, 27, 28, 29, 30, 31]
let index = 110
let shotPosition
let level = 0
const grid = document.querySelector('.grid')
const levelAnnouncement = document.querySelector('.level')
const score = document.querySelector('.score')
const healthPoints = document.querySelector('.hp')
const playAgainButton = document.querySelector('.play-again')
let gridWrapper = document.querySelector('.grid-wrapper')
let startScreen = document.getElementById('start')
const startButton = document.querySelector('.start-button')
const gameOverScreen = document.getElementById('gameover')
const progressBar = document.querySelector('.progress')
const startGameAudio = document.getElementById('start-game-sound')
const gameSound = document.getElementById('game-sound')
const endMessage = document.querySelector('.gameOverYouWin')
const allCells = document.querySelectorAll('.grid div')
const levelTwoSound = document.getElementById('level-two')
const levelThreeSound = document.getElementById('level-three')
const youWin = document.getElementById('you-win-sound')
const youLose = document.getElementById('you-lose-sound')


function addCharizard(index) {
let playerIndex = allCells[index]
playerIndex.classList.add('charizard')
shotPosition = index
}
addCharizard(index)

function removeCharizard(index) {
let playerIndex = allCells[index]
playerIndex.classList.remove('charizard')
}

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

function addEnemy(arr, pokemon) {
  for (let i = 0; i < arr.length; i++) {
      if (!enemyDestroyed.includes(i+1)) {
    allCells[arr[i]].classList.add(pokemon)
  } 
}
}


function removeEnemy(arr, pokemon) {
  for (let i = 0; i < arr.length; i++) {
      if (!enemyDestroyed.includes(i+1)) {
    allCells[arr[i]].classList.remove(pokemon)
  } 
}
}

function moveLeft(arr, pokemon) { 
    removeEnemy(arr, pokemon)
    for (let i = 0; i < arr.length; i++) {
    arr[i] -= 1
  }  
   addEnemy(arr, pokemon)
}

function moveRight(arr, pokemon) { 
    removeEnemy(arr, pokemon)
    for (let i = 0; i < arr.length; i++) {
    arr[i] += 1
  }  
   addEnemy(arr, pokemon)
}

function moveDown(arr, pokemon) {
  removeEnemy(arr, pokemon)
      for (let i = 0; i < arr.length; i++) {
    arr[i] += 11
  }  
   addEnemy(arr, pokemon)
}

function enemyShots(pokemon, move, arr) {
const bulletPosition = arr[Math.floor(Math.random() * arr.length)]  
let enemyBulletPosition = bulletPosition
console.log("helleOne")
  console.log("bulletPosition")
 setInterval(() => {
  if(enemyBulletPosition <= 119) {
  if (!allCells[bulletPosition].classList.contains(pokemon)) {
  console.log("hello")
  }
  else if(allCells[bulletPosition].classList.contains(pokemon)) {
  setInterval(() => {
        allCells[enemyBulletPosition].classList.remove(move) 
      if (bulletPosition >= 109) {
      setTimeout(allCells[enemyBulletPosition].classList.add(move), 1000)
      allCells[enemyBulletPosition].classList.remove(move)
      }
else {
      enemyBulletPosition += 11 
      allCells[enemyBulletPosition].classList.add(move)
     if(allCells[enemyBulletPosition].classList.contains('charizard')) {
          decreaseHealth()
          updateHealth()
          checkForNoHealthPoints()
          progressBarUpdate()
     }
    }
        }, 500)
      }
      }
    }, 300)
return
}

function fireShot() {
  shotPosition = index
  let temp = shotPosition
  let pokemonHit = "hello"
  let shootFlame = setInterval(() => {
  if(temp >= 0 && temp <= 120) {
        allCells[temp].classList.remove('flame') 
        if (temp <= 10) {
          setTimeout(allCells[temp].classList.add('flame'), 1000)
          allCells[temp].classList.remove('flame')
        } 
        else {
              temp -= 11
              allCells[temp].classList.add('flame')
              if(allCells[temp].classList.contains('trainer')) {
              pokemonHit = 'trainer'
              }
              else if(allCells[temp].classList.contains('venasaur')) {
                pokemonHit = 'venasaur'
              }
              else if(allCells[temp].classList.contains('gengar')) {
                pokemonHit = 'gengar'
              }
              else if(allCells[temp].classList.contains('blastoise')) {
                pokemonHit = 'blastoise'
              }
              else if(allCells[temp].classList.contains('dragonite')) {
                pokemonHit = 'dragonite'
              }
              setInterval(() => {
              if(allCells[temp].classList.contains(pokemonHit)) {
               let defeatedEnemy = enemyArray.indexOf(temp)
              enemyDestroyed.push(defeatedEnemy + 1)
              allCells[temp].classList.remove(pokemonHit)
              setTimeout((allCells[temp].classList.remove('flame')), 600)
              updatePoints()
              updateScore() 
              clearInterval(shootFlame)
              temp = false
            }
          }, 100)
          }
        }
    }, 100)
    return 
}

function updatePoints() {
 playerPoints += 100
 return
}

function updateScore() {
   return score.innerHTML = "SCORE:" + playerPoints
}

function resetPoints() {
  return playerPoints = 0
}

function healthPointsReset() {
   healthPointsCount = 100
   return
}

function updateHealth() {
  healthPoints.innerHTML = "HP:" + healthPointsCount
}

function decreaseHealth() {
  if (healthPointsCount >= 10) {
  healthPointsCount -= 10
  }
  return
}

function checkForNoHealthPoints() {
    if (healthPointsCount === 0) {
    gameOver()
  }
  return
}

function updatePoints() {
 playerPoints += 100
 return
}

function updateScore() {
   return score.innerHTML = "SCORE:" + playerPoints
}

function resetPoints() {
  return playerPoints = 0
}

function healthPointsReset() {
   healthPointsCount = 100
   return
}

function updateHealth() {
  healthPoints.innerHTML = "HP:" + healthPointsCount
}

function decreaseHealth() {
  if (healthPointsCount >= 10) {
  healthPointsCount -= 10
  }
  return
}

function progressBarUpdate() {
  progressBar.setAttribute('value', `${healthPointsCount}`)
}

function moveEnemy() {
if (levelThreeReady) {
movePokemon = setInterval(() => {
  isLeftEdge = enemyArray[0] % 11 === 0
  isRightEdge = enemyArray[enemyArray.length - 1] % 11 === 10
  removeEnemy(enemyArray, 'trainer')

  if (isRightEdge && goingRight) {
    for (let i = 0; i < enemyArray.length; i++) {
      enemyArray[i] += 11 + 1
      movement = -1
    goingRight = false
       }
  }

  if (isLeftEdge && !goingRight) {
    for (let i = 0; i < enemyArray.length; i++) {
      enemyArray[i] += 11 - 1
      movement = 1
    goingRight = true
       }
  }

  for (let i = 0; i < enemyArray.length; i++) {
    enemyArray[i] += movement
  }

    addEnemy(enemyArray, 'trainer')

  for (let i = 0; i < enemyArray.length; i++) {
    if (enemyArray[i] >= 110) {
    clearInterval(movePokemon)
    clearInterval(moveTrainer)
    gameOver()
    removeEnemy(enemyArray, 'trainer')

    if (playerPoints === 8100 || playerPoints <= 5300) {
      clearInterval(movePokemon)
      removeEnemy(enemyArray, 'trainer')
    }
  }
  }
  }, speed)
  if (!levelThreeReady) {
  clearInterval(movePokemon)
  clearInterval(trainerShoot)
  removeEnemy(enemyArray, 'trainer')
  }
}
}

   

function levelUpdate() {
levelAnnouncement.innerHTML = "Level:" + level
  return 
}


 function levelOne() {
level = 1
levelOneInProgress = true
levelUpdate()
enemyDestroyed = []
enemyArray =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 16, 17, 18, 19, 20, 23, 24, 25, 26, 27, 28, 29, 30, 31]
addEnemy(enemyArray, 'blastoise')
let blastoiseShoot = setInterval(() => {
  enemyShots('blastoise', 'water', enemyArray)
  enemyShots('blastoise', 'water', enemyArray)
  enemyShots('blastoise', 'water', enemyArray)
} ,speed);
if (!levelOneInProgress) {
   clearInterval(blastoiseShoot)
 }
    }

function levelTwo() {
level = 2
levelOneInProgress = false
levelTwoInProgress = true
levelThreeReady = true
levelTwoSound.play()
removeEnemy(enemyArray, 'blastoise')
levelUpdate()
enemyDestroyed = []
enemyArray =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 16, 17, 18, 19, 20, 23, 24, 25, 26, 27, 28, 29, 30, 31]
addEnemy(enemyArray, 'dragonite')
let dragoniteShoot = setInterval(() => {
  enemyShots('dragonite', 'dragoniteflame', enemyArray)
  enemyShots('dragonite', 'dragoniteflame', enemyArray)
  enemyShots('dragonite', 'dragoniteflame', enemyArray)
  enemyShots('dragonite', 'dragoniteflame', enemyArray)
  enemyShots('dragonite', 'dragoniteflame', enemyArray)
} ,speed);
 if (!levelTwoInProgress) {
   clearInterval(dragoniteShoot)
 }
}

function levelThree() {
level = 3
levelTwoInProgress = false
levelThreeInProgress = true
levelUpdate()
levelThreeSound.play()
enemyDestroyed = []
removeEnemy(enemyArray, 'blastoise')
removeEnemy(enemyArray, 'dragonite')
enemyArray =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 16, 17, 18, 19, 20, 23, 24, 25, 26, 27, 28, 29, 30, 31]
addEnemy(enemyArray, 'trainer')

}

function levelThreeEnemyCheck() {
  if(playerPoints === 5400 && playerPoints <= 8000 && levelThreeReady) {
trainerShoot = setInterval(() => {
  enemyShots('trainer', 'pokeball', enemyArray)
  enemyShots('trainer', 'pokeball', enemyArray)
  enemyShots('trainer', 'pokeball', enemyArray)
  enemyShots('trainer', 'pokeball', enemyArray)
  enemyShots('trainer', 'pokeball', enemyArray)
} ,speed);
  }
  if (!levelThreeReady) {
      enemyArray = []
      clearInterval(trainerShoot)
      removeEnemy(enemyArray, 'trainer')    
    }
}



function startGame() {
  gameReset()
  clearInterval(movePokemon)
 let gameInterval = setInterval(() => {
 if (playerPoints === 0 && !levelOneInProgress) {
  startGameAudio.play()
  gridWrapper.style.display ="flex";
  startScreen.style.display ="none"
  levelOneInProgress = true
  gameReset()
  progressBarUpdate()
  levelOne() 
 }
if (playerPoints === 2700 && !levelTwoInProgress) {
  levelTwo() 
  }
if (playerPoints === 5400 && !levelThreeInProgress && levelThreeReady) {
  levelThree()
  levelThreeEnemyCheck()
  moveEnemy()
}
else if (playerPoints === 8100) {
youWinMessage()
removeCharizard(index) 
clearInterval(gameInterval)
enemyDestroyed = []
enemyArray = []
removeEnemy(enemyArray, 'trainer')
levelThreeReady = false
}
if (healthPointsCount === 0 && playerPoints <= 8000) {
  gameOver()
}
}, 1)
levelThreeReady = false
healthPointsReset()
progressBarUpdate()
level = 1 
levelUpdate()
gridWrapper.style.display ="flex";
startScreen.style.display ="none"
}

function gameReset() {
removeCharizard(index)
index = 110
addCharizard(index)
resetPoints()
healthPointsReset()
updateHealth()
enemyDestroyed = []
levelOneInProgress = false
levelTwoInProgress = false
levelThreeInProgress = false
levelThreeReady = false
console.log(levelThreeReady)
}

function gameOver() {
  if (level === 1) {
  }
  else if (level === 2) {
  }
  else if (level === 3) {
    clearInterval(trainerShoot)
  }
  startScreen.style.display ="none";
  gridWrapper.style.display ="none";
  endMessage.innerHTML ="GAME OVER!"
  gameOverScreen.style.display ="flex"
  youLose.play()
  removeEnemy(enemyArray, 'blastoise')
  removeEnemy(enemyArray, 'dragonite')
  removeEnemy(enemyArray, 'trainer')
  enemyDestroyed = []
  clearInterval(moveTrainer)
  enemyArray = []
}

function homeScreenReturn(){
  startScreen.style.display ="flex"
  gameOverScreen.style.display ="none"
  healthPointsCount = 100
  playerPoints = 0
  updateScore()
  updatePoints()
  level = 1
  levelUpdate()
  removeCharizard(index)
  index = 110
  addCharizard(110)
    return
}


startButton.addEventListener('click', startGame)
playAgainButton.addEventListener('click', homeScreenReturn)


function youWinMessage() {
  startScreen.style.display ="none";
  gridWrapper.style.display ="none";
  endMessage.innerHTML = "YOU WIN!"
  gameOverScreen.style.display ="flex"
  youWin.play()
}

}
window.addEventListener('DOMContentLoaded', init)