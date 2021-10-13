function init() {

  
  let firstRowLevelEnemy =  [1, 2, 3, 4, 5, 6, 7, 8, 9]
  let secondLevelEnemy =    [12, 13, 14, 15, 16, 17, 18, 19, 20]
  let thirdRowLevelEnemy = [23, 24, 25, 26, 27, 28, 29, 30, 31]
  let enemyDestroyed = []
  // charizard Object 
  let blastoisePosition 
  let gengarPosition
  let shotPosition
  
  let player = {
    // could potentially use a progress bar here with health points.  
      healthPoints: 100, 
      points: 0,
    healthPointDrop() {
       if (this.healthPoints !== 0) {
        this.healthPoints -= 20
        return 
      }
      },

     get pointIncrease() {
        this.points += 100
        return
      },

    get playerReset() {
      this.points = 0
      this.healthPoints = 100
      return
    }
    }




let index = 115  
// function call to create grid
console.log




function createGrid() {
array = []
  for (let i = 0; i < 121; i++) {
    array.push(i)
}
const grid = document.querySelector('.grid')

array.forEach((className) => {
  const newCell = document.createElement('div')
  grid.appendChild(newCell)
  newCell.classList.add(className)
})
}
  createGrid()


const allCells = document.querySelectorAll('.grid div')
const score = document.querySelector('.score')
const healthPoints = document.querySelector('.hp')
const playAgainButton = document.querySelector('.play-again')
 

 

let gridWrapper = document.querySelector('.grid-wrapper')
let startScreen = document.getElementById('start')
const startButton = document.querySelector('.start-button')
const gameOverScreen = document.getElementById('gameover')
function startGame() {
  console.log("Hello")
    enemyDestroyed = []
  gridWrapper.style.display ="flex";
  startScreen.style.display ="none"
  addCharizard(index)
  dragoniteFire()
  gengarDrop()
  blastoiseDrop()
  setInterval(gengarDrop, 750)
  setInterval(blastoiseDrop, 750)
  setInterval(dragoniteFire, 750)
  player.playerReset()
  firstRowLevelEnemy = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  secondLevelEnemy = [12, 13, 14, 15, 16, 17, 18, 19, 20]
  thirdRowLevelEnemy = [23, 24, 25, 26, 27, 28, 29, 30, 31]
  addFirstRowLevelEnemy()
  addSecondLevelEnemy()
  addThirdRowLevelEnemy()
}


startButton.addEventListener('click', startGame)
playAgainButton.addEventListener('click', homeScreenReturn)

function homeScreenReturn(){
    gameOverScreen.style.display ="none"
    startScreen.style.display ="flex"
    return
}

function endGame() {
  if (player.healthPoints === 0) {
  startScreen.style.display ="none";
  gridWrapper.style.display ="none";
  gameOverScreen.style.display ="flex"
  return
  }
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
      updateScore()
       endGame()
    } else {
      return 
    }
    addCharizard(index)
  }
 document.addEventListener('keyup', handleKeyUp)
        function updateScore() {
        return score.innerHTML = "SCORE: " + player.points
        } 

        function fireShot() {
        let currentPositionOfBullet = shotPosition
              let x = setInterval(() => {
                        let a = setInterval(() => {
                            if(currentPositionOfBullet >= 0 && currentPositionOfBullet <= 120) { 
                            allCells[currentPositionOfBullet].classList.remove('flame')
                            if (currentPositionOfBullet >= 0 && currentPositionOfBullet <= 10) {
                              setTimeout((allCells[currentPositionOfBullet].classList.add('flame'), 700))
                            }
                            else {
                            currentPositionOfBullet -= 11
                            allCells[currentPositionOfBullet].classList.add('flame')
                            }
              if(allCells[currentPositionOfBullet].classList.contains('gengar')) {
              let defeatedEnemy = thirdRowLevelEnemy.indexOf(currentPositionOfBullet)
              enemyDestroyed.push(defeatedEnemy + 1)
              let thirdRow = thirdRowLevelEnemy.filter(gengar => gengar !== thirdRowLevelEnemy[defeatedEnemy])
              thirdRowLevelEnemy = thirdRow
              allCells[currentPositionOfBullet].classList.remove('gengar')
              allCells[currentPositionOfBullet].classList.remove('flame')
              currentPositionOfBullet = false
              player.pointIncrease()
              }

              if(allCells[currentPositionOfBullet].classList.contains('dragonitefire' )) {
                  allCells[currentPositionOfBullet].classList.remove('dragonitefire')
                  allCells[currentPositionOfBullet].classList.remove('flame')
                  currentPositionOfBullet = false
                }
    
              if(allCells[currentPositionOfBullet].classList.contains('purpleball')) {
                  allCells[currentPositionOfBullet].classList.remove('purpleball')
                  allCells[currentPositionOfBullet].classList.remove('flame')
                  currentPositionOfBullet = false
                }

              if(allCells[currentPositionOfBullet].classList.contains('water')) {
                  allCells[currentPositionOfBullet].classList.remove('flame')
                  allCells[currentPositionOfBullet].classList.remove('water')
                  currentPositionOfBullet = false
                }
      

}

            else if(allCells[currentPositionOfBullet].classList.contains('blastoise')) {
                let defeatedEnemy = secondLevelEnemy.indexOf(currentPositionOfBullet)
                enemyDestroyed.push(defeatedEnemy + 1)
                allCells[currentPositionOfBullet].classList.remove('blastoise')
                allCells[currentPositionOfBullet].classList.remove('flame')
                currentPositionOfBullet = false  
                let secondRow = secondLevelEnemy.filter(blastoise => blastoise !== secondLevelEnemy[defeatedEnemy])
                secondLevelEnemy = secondRow
              player.pointIncrease()
                  clearInterval(a)
              }
              else if (allCells[currentPositionOfBullet].classList.contains('dragonite')) {
                  let defeatedEnemy = firstRowLevelEnemy.indexOf(currentPositionOfBullet)
                  enemyDestroyed.push(defeatedEnemy + 1)
                  allCells[currentPositionOfBullet].classList.remove('dragonite')
                  let firstRow = firstRowLevelEnemy.filter(dragonite => dragonite !== firstRowLevelEnemy[defeatedEnemy])
                  firstRowLevelEnemy = firstRow
                  setTimeout(allCells[currentPositionOfBullet].classList.remove('flame'), 3000)
                                  currentPositionOfBullet = false
                player.pointIncrease()
                  clearInterval(a)
              } 
              else {
                clearInterval(x)
              }
            }, 200)
            if (currentPositionOfBullet > 0) {
                allCells[currentPositionOfBullet].classList.remove('flame')
                allCells[currentPositionOfBullet].classList.add('flame')
            } 
            else if (currentPositionOfBullet <= 10) {
                  allCells[currentPositionOfBullet].classList.remove('flame')
                  clearInterval(a)
            }
            }, 200)
            }   

              function addCharizard(index) {
            let playerIndex = allCells[index]
            playerIndex.classList.add('goodPokemon')
            shotPosition = index
        }


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
          let dragoniteShot = setInterval(() => {
          if (dragoniteBulletPosition > 0 && dragoniteBulletPosition <= 120) {  
              allCells[dragoniteBulletPosition].classList.remove('dragoniteflame')

            if(dragoniteBulletPosition >= 109 && dragoniteBulletPosition <= 120) {
            setTimeout(allCells[dragoniteBulletPosition].classList.remove('dragoniteflame'), 700)
            }
            else{
              dragoniteBulletPosition += 11
            allCells[dragoniteBulletPosition].classList.add('dragoniteflame')
            }
              if (dragoniteBulletPosition > 120) {
                dragoniteBulletPosition = false
              }
              }
              else {
                clearInterval(dragoniteShot)
              }
              if(allCells[dragoniteBulletPosition].classList.contains('flame')) {
                    allCells[dragoniteBulletPosition].classList.remove('dragonitefire')
                    allCells[dragoniteBulletPosition].classList.remove('flame')
                  }
            if (allCells[dragoniteBulletPosition].classList.contains('goodPokemon')) {
              player.healthPointDrop()
              updateHealthPoints()
            }

              }, 300)
            if (allCells[dragoniteBulletPosition].classList.contains('flame') && allCells[dragoniteBulletPosition].classList.contains('dragoniteflame')) {
            allCells[dragoniteBulletPosition].classList.remove('dragoniteflame') 
            dragoniteBulletPosition = false
                }  
                return
            }

            function blastoiseDrop() {
            let blastoiseDropPosition = secondLevelEnemy[Math.floor(Math.random() * secondLevelEnemy.length)]
              let waterDrop = setInterval(() => {
                      allCells[blastoiseDropPosition].classList.remove('water')
                if (blastoiseDropPosition > 0 && blastoiseDropPosition <= 109) {
                
                  if(blastoiseDropPosition >= 109 && blastoiseDropPosition <= 120) {
              setTimeout(allCells[blastoiseDropPosition].classList.remove('dragoniteflame'), 700)
              }

                else {

                blastoiseDropPosition += 11
                  allCells[blastoiseDropPosition].classList.add('water')
                }
                }
                else {
                  clearInterval(waterDrop)
                }
              
                if (allCells[blastoiseDropPosition].classList.contains('goodPokemon')) {
                    player.healthPointDrop()
                    updateHealthPoints()
                  setTimeout(allCells[blastoiseDropPosition].classList.remove('water'), 300)
                }
                if(blastoiseDropPosition >= 120) {
                setTimeout(allCells[blastoiseDropPosition].classList.remove('water'))
                return
                  }
                },200)
      return 
            }

            function gengarDrop() {
            let gengarDropPosition = thirdRowLevelEnemy[Math.floor(Math.random() * thirdRowLevelEnemy.length)]
              let gengarAttack = setInterval(() => {
              allCells[gengarDropPosition].classList.remove('purpleball')
                if (gengarDropPosition > 0 && gengarDropPosition <= 109) {     
                  gengarDropPosition += 11
                  allCells[gengarDropPosition].classList.add('purpleball')      
                }
                else {
                  clearInterval(gengarAttack)
                }
            if (allCells[gengarDropPosition].classList.contains('goodPokemon')) {
                player.healthPointDrop()
                updateHealthPoints()
                }
                if (allCells[gengarDropPosition].classList.contains('flame')) {
                  allCells[gengarDropPosition].classList.remove('purpleball') 
                  gengarDropPosition = false
                } 
                
                if(gengarDropPosition >= 120) {
              allCells[gengarDropPosition].classList.remove('purpleball');
                  return  
                }
                  }, 300)
    return
            }


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

function updateHealthPoints() {
  healthPoints.innerHTML = "HP:" + player.healthPoints
}

////////////////////////////





}
// 
window.addEventListener('DOMContentLoaded', init)
