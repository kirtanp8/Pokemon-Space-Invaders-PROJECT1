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


let enemyDestroyed = []
let enemyArray =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 16, 17, 18, 19, 20, 23, 24, 25, 26, 27, 28, 29, 30, 31]
let index = 110
let shotPosition
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


const allCells = document.querySelectorAll('.grid div')
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
    if (!enemyDestroyed.includes(i+1)) {
      if(arr[i] <= 10 && arr[i] >= 0) {
          allCells[arr[i]].classList.add('dragonite')
      }
        if(arr[i] <= 21 && arr[i] >= 11) {
          allCells[arr[i]].classList.add('blastoise')
      }
        if(arr[i] <= 31 && arr[i] >= 21) {
          allCells[arr[i]].classList.add('gengar')
        }
    }
  } 
}

function removeEnemy(arr) {
  for (let i = 0; i < arr.length; i++) {
      if(arr[i] <= 10 && arr[i] >= 0) {
        if(!enemyDestroyed.includes(i+1)) {
      allCells[arr[i]].classList.remove('dragonite')
      }
    }
      if(arr[i] <= 20 && arr[i] >= 11) {
      allCells[arr[i]].classList.remove('blastoise')
      }
      if(arr[i] <= 31 && arr[i] >= 21) {
      allCells[arr[i]].classList.remove('gengar')
  }
}
}

addEnemy(enemyArray)

function enemyShots() {
    const bulletPosition = enemyArray[Math.floor(Math.random() * enemyArray.length)]  
    let enemyBulletPosition = bulletPosition
      setInterval(() => {
if(enemyBulletPosition < 120) {
    if (allCells[bulletPosition].classList.contains('dragonite') || enemyDestroyed.includes(bulletPosition)) {
      setInterval(() => {
      allCells[enemyBulletPosition].classList.remove('dragoniteflame')    
      enemyBulletPosition += 11
      allCells[enemyBulletPosition].classList.add('dragoniteflame')
         if(allCells[enemyBulletPosition].classList.contains('goodPokemon')) {
      decreaseHealth()
       updateHealth()
       progressBarUpdate()
       endGame()
      }
      }, 600)
    }
 
    }
    if(allCells[bulletPosition].classList.contains('blastoise')) {
      setInterval(() => {
      allCells[enemyBulletPosition].classList.remove('water')
      enemyBulletPosition += 11
      allCells[enemyBulletPosition].classList.add('water')
        if(allCells[enemyBulletPosition].classList.contains('goodPokemon')) {
          decreaseHealth()
          updateHealth()
          progressBarUpdate()
          endGame()
        }
         }, 600)
    }
   
   
    if(allCells[bulletPosition].classList.contains('gengar')) {
          setInterval(() => {
      allCells[enemyBulletPosition].classList.remove('purpleball') 
      enemyBulletPosition += 11 
      allCells[enemyBulletPosition].classList.add('purpleball')
     if(allCells[enemyBulletPosition].classList.contains('goodPokemon')) {
          decreaseHealth()
          updateHealth()
          progressBarUpdate()
          endGame()
    }
       }, 600)
    }
 
  }, 350)
}






setInterval(enemyShots, 200)

function fireShot() {
  shotPosition = index
  let temp = shotPosition
  let shootFlame = setInterval(() => {
      if(temp >= 0 && temp <= 120) {
        allCells[temp].classList.remove('flame')  
        temp -= 11
        allCells[temp].classList.add('flame')
          if(allCells[temp].classList.contains('gengar')) {
              allCells[temp].classList.remove('gengar')
              updatePoints() 
              updateScore() 
              setTimeout((allCells[temp].classList.remove('flame')), 300)
              clearInterval(shootFlame)
          }
          if(allCells[temp].classList.contains('blastoise')) {
              allCells[temp].classList.remove('blastoise')
              updatePoints()
              updateScore() 
              setTimeout((allCells[temp].classList.remove('flame')), 300)
              clearInterval(shootFlame)
          }
           if(allCells[temp].classList.contains('dragonite')) {
              allCells[temp].classList.remove('dragonite')
              updatePoints()
              updateScore() 
              setTimeout((allCells[temp].classList.add('flame')), 3000)
              clearInterval(shootFlame)
          } 
          if(allCells[temp].classList.contains('dragoniteflame') && allCells[temp].classList.contains('purple')) { 
            allCells[temp].classList.remove('dragoniteflame')
            allCells[temp].classList.remove('purpleball')
          }
      } 
    }, 100)
}

let playerPoints = 0
let healthPointsCount = 100

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
    playerPoints = 0
  healthPointsCount = 100
    updateHealth()
    updatePoints()
  removeEnemy(enemyArray)
  enemyDestroyed = []
  enemyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 16, 17, 18, 19, 20, 23, 24, 25, 26, 27, 28, 29, 30, 31]
  addEnemy(enemyArray)
  console.log("Hello")
  gridWrapper.style.display ="flex";
  startScreen.style.display ="none"
  removeCharizard(index)
  index = 110
  addCharizard(110)
  // healthPointsReset()
}

function homeScreenReturn(){
    gameOverScreen.style.display ="none"
    startScreen.style.display ="flex"
    playerPoints = 0
    updateScore()
    updatePoints()
    removeCharizard(index)
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
  
}

function endGame() {
 if (healthPointsCount <= 0) {
 startScreen.style.display ="none";
  gridWrapper.style.display ="none";
  gameOverScreen.style.display ="flex"
}
return
}



}
window.addEventListener('DOMContentLoaded', init)
