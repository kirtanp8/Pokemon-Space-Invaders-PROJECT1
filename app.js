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


let playerPoints = 0
let healthPointsCount = 100
let enemyArray =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 16, 17, 18, 19, 20, 23, 24, 25, 26, 27, 28, 29, 30, 31]
let levelTwoEnemy = [34, 35, 36, 37, 38, 39, 40, 41, 42]
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

function addEnemy(arr) {
  for (let i = 0; i < arr.length; i++) {
      if(arr[i] <= 10 && arr[i] >= 0) {
          allCells[arr[i]].classList.add('dragonite')
      }
        if(arr[i] <= 21 && arr[i] >= 11) {
          allCells[arr[i]].classList.add('blastoise')
      }
        if(arr[i] <= 31 && arr[i] >= 21) {
          allCells[arr[i]].classList.add('gengar')
        }
        if(arr[i] <= 42 && arr[i] >= 34) {
          allCells[arr[i]].classList.add('venasaur')
        }
           if(arr[i] <= 53 && arr[i] >= 45) {
          allCells[arr[i]].classList.add('trainer')
        }
  } 
}

function removeEnemy(arr) {
  for (let i = 0; i < arr.length; i++) {
      if(arr[i] <= 10 && arr[i] >= 0) {
      allCells[arr[i]].classList.remove('dragonite')
    }
      if(arr[i] <= 20 && arr[i] >= 11) {
      allCells[arr[i]].classList.remove('blastoise')
      }
      if(arr[i] <= 31 && arr[i] >= 21) {
      allCells[arr[i]].classList.remove('gengar')
  }
  if(arr[i] <= 42 && arr[i] >= 34) {
          allCells[arr[i]].classList.remove('venasaur')
        }
  if(arr[i] <= 53 && arr[i] >= 45) {
          allCells[arr[i]].classList.remove('trainer')
    }
}
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
     if(allCells[enemyBulletPosition].classList.contains('goodPokemon')) {
          decreaseHealth()
          updateHealth()
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
              allCells[temp].classList.remove(pokemonHit)
              setTimeout((allCells[temp].classList.remove('flame')), 600)
              updatePoints()
              updateScore() 
              clearInterval(shootFlame)
              temp = false
            }
          }, 300)
          }
        }
    }, 60)
    return 
}

  setInterval(() => {
setInterval(enemyShots('dragonite', 'dragoniteflame', enemyArray), 100)
setInterval(enemyShots('blastoise', 'water', enemyArray), 200)
setInterval(enemyShots('gengar', 'purpleball', enemyArray), 100)
  }, 200)



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

function levelTwoOpen() {

}



function levelThreeOpen() {
  levelThreeEnemy = [45, 46, 47, 48, 49, 50, 51, 52, 53]
  addEnemy(levelThreeEnemy)
  addEnemy(enemyArray)
  addEnemy(levelTwoEnemy)
  setInterval(enemyShots('trainer', 'pokeball', levelThreeEnemy), 3000)
  level = 3
  healthPointsCount = 100
  updateHealth()
  levelThreeSound.play()
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

function startGame() {
  let gameInterval = setInterval(() => {
 if (healthPointsCount <= 0) {
 startScreen.style.display ="none";
  gridWrapper.style.display ="none";
  endMessage.innerHTML ="GAME OVER!"
  gameOverScreen.style.display ="flex"
  removeEnemy(levelThreeEnemy)
  removeEnemy(levelTwoEnemy)
}
if (playerPoints === 2800) {
  levelTwoSound.play()
  levelUpdate()
  levelTwoOpen()
  removeEnemy(enemyArray)
enemyArray =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 16, 17, 18, 19, 20, 23, 24, 25, 26, 27, 28, 29, 30, 31]
levelTwoEnemy = [34, 35, 36, 37, 38, 39, 40, 41, 42]
addEnemy(levelTwoEnemy)
addEnemy(enemyArray)
setInterval(() => {
setInterval(enemyShots('venasaur', 'leaf', levelTwoEnemy), 1000)}, 2000)
  healthPointsCount = 100
  updateHealth()
  return
}
if (playerPoints === 6300 ||  playerPoints === 6400) {
  levelThreeSound.play()
  levelUpdate()
  levelThreeOpen()
}
if (playerPoints >= 10800) {
   startScreen.style.display ="none";
  gridWrapper.style.display ="none";
  endMessage.innerHTML = "YOU WIN!"
  gameOverScreen.style.display ="flex"
  youWin.play()
  levelUpdate()
  clearInterval(gameInterval)
}
}, 1000)
  playerPoints = 0
  healthPointsCount = 100
  updateHealth()
  updatePoints()
  removeEnemy(enemyArray)
  removeEnemy(levelTwoEnemy)
  let levelThreeEnemy = []
  removeEnemy(levelThreeEnemy)
  level = 1
  levelUpdate()
  enemyDestroyed = []
  addEnemy(enemyArray)
  console.log("Hello")
  gridWrapper.style.display ="flex";
  startScreen.style.display ="none"
  removeCharizard(index)
  index = 110
  addCharizard(110)
  startGameAudio.play()
  setTimeout(gameSound.play(), 3000)
  // healthPointsReset()
}

function homeScreenReturn(){
    gameOverScreen.style.display ="none"
    startScreen.style.display ="flex"
    healthPointsCount = 100
    playerPoints = 0
    updateScore()
    updatePoints()
    levelUpdate()
    removeCharizard(index)
  removeEnemy(levelTwoEnemy)
  removeEnemy(levelThreeEnemy)
  index = 110
  addCharizard(110)
    return
}

startButton.addEventListener('click', startGame)
playAgainButton.addEventListener('click', homeScreenReturn)

function progressBarUpdate() {
  progressBar.setAttribute('value', `${healthPointsCount}`)
}

function levelUpdate() {
  if (playerPoints >= 0) {
    level = 1
  }
  if (playerPoints >= 2800) {
    level = 2
  }
  if (playerPoints >= 6300) {
    level = 3
  }
levelAnnouncement.innerHTML = "Level:" + level
  return 
}





}
window.addEventListener('DOMContentLoaded', init)