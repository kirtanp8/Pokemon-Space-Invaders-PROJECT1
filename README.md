# Project-1 Pokemon-Space-Invaders
 Implementing my love for Pokemon into the popular arcade game Space Invaders 👾
 
# Overview
For the first project of the SEI Course, the assigned task was to create a fully functioning browser-based game from a short list of arcade games which included Space Invaders.

I opted to go for Space Invaders and include my own twist which of course was Pokemon, a game I played growing up. 

By following the rules of Space Invaders, the objective is simple. Defend Charizard by defeating Blastoise, Dragonite and his Trainer 🙃 (just me being funny). 

Feel free to enjoy playing the game at: https://kirtanp8.github.io/Pokemon-Space-Invaders/

# Technologies Used
* Html
* CSS
* JavaScript (ES6)
* Git
* GitHub
* Google Fonts

# Controls 
* Use the Spacebar to Shoot. 
* Use the Right Arrow Key to Move Right.
* USe the Left Arrow Key to Move Left.

# Development Process

**Planning** 

After choosing Pokemon Space Invaders as my game, I thought I should create a checklist using Trello having used it in a workplace to plan day to day tasks.

Below is a copy of my checklist attached (I unticked them all for the screenshot). 
![Screenshot 2021-12-30 at 17 01 38](https://user-images.githubusercontent.com/83728526/147785138-a77460e3-bdcf-4ba1-8779-dcdbfd1baa88.png)

**Creating the Grid**

I used a for loop to create the grid which allowed me to avoid writing out 121 div elements in HTML and then I was able to allocate a size to each div using CSS. 

```
function createGrid() {
  let gridArray = []
    for (let i = 0; i < 121; i++) {
      gridArray.push(i)
  }
  const grid = document.querySelector('.grid')

  gridArray.forEach((className) => {
    const newCell = document.createElement('div')
    grid.appendChild(newCell)
    newCell.classList.add(className)
  })
  }
```

**Movement**

For the game, I needed to create moving elements:  
* A Shooter (Charizard) that can shoot bullets (flamethrower)
* Multiple Enemies (Pokemon) to defeat whilst they move from side to side shooting bullets till they reach the bottom.

**Enemies** 

The enemies are assigned their starting positions with index's on the grid
```
enemyArray =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 16, 17, 18, 19, 20, 23, 24, 25, 26, 27, 28, 29, 30, 31]
```

With the below function, I can then add any pokemon with the use of the second parameter in their starting positions. 
```
function addEnemy(arr, pokemon) {
  for (let i = 0; i < arr.length; i++) {
      if (!enemyDestroyed.includes(i+1)) {
    allCells[arr[i]].classList.add(pokemon)
  } 
}
}
```
**Shooter Movement**

When adding and testing the function below, my game was starting to feel like an actual game as I could move the Shooter from side to side and then of course the `fireShot()` function allowed me to shoot but it was implemented in a little later on.

```
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

```

**Shooting Bullets + Collision Dection**

Writing the below function was definitley a fun problem to solve. I needed a function that could move bullets up towards the enemy and then remove them if they are hit by the bullet. To do this, I first implemented a `setInterval` method which allowed me to control the speed of the bullets movement and then every millisecond each bullet would then move vertically up grid by deducting the bullets starting position by `-= 11` and this is because each row has eleven blocks.

Once the bullet is in enemy territory and hits one I used `allCells[temp].classList.remove(pokemonHit)` to remove the pokemon from the grid, increase the players points but only after finding out which pokemon has been hit through an `if` statement. The reason I needed to do this was because my game had **3 Levels** with each level having a different pokemon to hit. 

```
function fireShot() {
  shotPosition = index
  let temp = shotPosition
  let pokemonHit = ''
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
```

**Moving the Enemies**

I managed to get the enemies to move but prior to the code below I had a massive switch statement which didn't look appealing and was an easy way out of solving the problem. The enemies only move when Level 3 commences, I did this so Level One and Level Two would be much easier.

I have added some notes to explain the reasoning for my code. 

```
function moveEnemy() {
  if (levelThreeReady) { **A Boolean value determining whether level two has finished**
  movePokemon = setInterval(() => {
    isLeftEdge = enemyArray[0] % 11 === 0 //Checks which enemy is furthest to the left
    isRightEdge = enemyArray[enemyArray.length - 1] % 11 === 10 **Checks which enemy is furthest to the Right**
    removeEnemy(enemyArray, 'trainer') //Removes them from their current Position

//The below checks whether enemies are colliding with the border on the right
  if (isRightEdge && goingRight) {
    for (let i = 0; i < enemyArray.length; i++) {
      enemyArray[i] += 11 + 1
      movement = -1
    goingRight = false
       }
  }

//The below checks whether enemies are colliding with the border on the left**
  if (isLeftEdge && !goingRight) {
    for (let i = 0; i < enemyArray.length; i++) {
      enemyArray[i] += 11 - 1
      movement = 1
    goingRight = true
       }
  }
 
//The for loop below then moves the enemies to the next block respictively
  for (let i = 0; i < enemyArray.length; i++) {
    enemyArray[i] += movement
  }

    addEnemy(enemyArray, 'trainer')

// If the Enemy reaches the bottom row, the below function ends the game and stops the movement.
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

```

