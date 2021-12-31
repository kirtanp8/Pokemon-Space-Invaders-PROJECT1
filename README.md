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
**Shooter-Movement**


