/*When the game starts, the player will choose a character by clicking on the fighter's picture. The player will fight as that character for the rest of the game.*/


$(document).ready(function () {
  let rand = function (max, min) {
    let num = Math.floor(Math.random() * (max - min)) + min;
    return num;
  }

  let fighters = [
    {
      name: 'Justin Trudeau',
      hp: rand(135, 90),
      ap: rand(10, 2),
      cap: rand(8, 1)
    },
    {
      name: 'Barrack Obama',
      hp: rand(150, 100),
      ap: rand(10, 2),
      cap: rand(15, 5)
    },
    {
      name: 'Emmanuel Macron',
      hp: rand(120, 90),
      ap: rand(12, 2),
      cap: rand(10, 1)
    },
    {
      name: 'Angela Merkel',
      hp: rand(115, 90),
      ap: rand(10, 2),
      cap: rand(8, 1)
    }
  ];

  let trudeau = fighters[0].name;
  let obama = fighters[1].name;
  let macron = fighters[2].name;
  let merkel = fighters[3].name;

  let enemies = [
    {
      name: 'Donald Trump',
      hp: rand(135, 90),
      ap: rand(10, 2),
      cap: rand(8, 1)
    },
    {
      name: 'Kim Jung-Un',
      hp: rand(150, 100),
      ap: rand(10, 2),
      cap: rand(15, 5)
    },
    {
      name: 'Vladmir Putin',
      hp: rand(120, 90),
      ap: rand(12, 2),
      cap: rand(10, 1)
    },
    {
      name: 'Adolf Hitler',
      hp: rand(115, 90),
      ap: rand(10, 2),
      cap: rand(8, 1)
    }
  ];

  let trump = enemies[0].name;
  let putin = enemies[1].name;
  let kim = enemies[2].name;
  let hitler = enemies[3].name;

  let getCharacter = function (x) {
    if (x === 'trump') {
      return trump;
    } else if (x === 'putin') {
      return putin;
    } else if (x === 'kim') {
      return kim;
    } else if (x === 'hitler') {
      return hitler;
    }
  }

  let selText = $('#selectText');
  console.log(selText);

  let selector = function () {
    let elmId = $(this).attr("id");
    if (selText.text() === 'Select Your Fighter') {
      $("#fighterName").text(getCharacter(elmId));
      $("#selectText").text('Select Your Enemy');
    } else {
      $("#enemyName").text(getCharacter(elmId));
      $("#selectText").text('Select Your Enemy');
    }
    $(this).empty();
  }

  $(document).on('click', '.char', selector);

})


/*

The player must then defeat all of the remaining fighters.Enemies should be moved to a different area of the screen.

The player chooses an opponent by clicking on an enemy's picture.

Once the player selects an opponent, that enemy is moved to a defender area.

The player will now be able to click the attack button.


Whenever the player clicks attack, their character damages the defender.The opponent will lose HP(health points).These points are displayed at the bottom of the defender's picture. 
The opponent character will instantly counter the attack.When that happens, the player's character will lose some of their HP. These points are shown at the bottom of the player character's picture.





The player will keep hitting the attack button in an effort to defeat their opponent.



When the defender's HP is reduced to zero or below, remove the enemy from the defender area. The player character can now choose a new opponent.



The player wins the game by defeating all enemy enemies.The player loses the game the game if their character's HP falls to zero or below.



Option 2 Game design notes


Each character in the game has 3 attributes: Health Points, Attack Power and Counter Attack Power.

Each time the player attacks, their character's Attack Power increases by its base Attack Power. 


For example, if the base Attack Power is 6, each attack will increase the Attack Power by 6(12, 18, 24, 30 and so on).



The enemy character only has Counter Attack Power.


Unlike the player's Attack Points, Counter Attack Power never changes.


The Health Points, Attack Power and Counter Attack Power of each character must differ.

No enemies in the game can heal or recover Health Points.


A winning player must pick their enemies wisely by first fighting an enemy with low Counter Attack Power.This will allow them to grind Attack Power and to take on enemies before they lose all of their Health Points.Healing options would mess with this dynamic.


Your players should be able to win and lose the game no matter what character they choose.The challenge should come from picking the right enemies, not choosing the strongest player.*/



