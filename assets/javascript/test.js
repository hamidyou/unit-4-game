/*When the game starts, the player will choose a character by clicking on the fighter's picture. The player will fight as that character for the rest of the game.*/


$(document).ready(function () {
  let rand = function (max, min) {
    let num = Math.floor(Math.random() * (max - min)) + min;
    return num;
  }

  const $selText = $('#fighterSelectText');
  const $enemyHealth = $("#enemyHP");
  const $fighterHealth = $("#fighterHP");
  const $message1 = $(".message1");
  const $message2 = $(".message2");
  const $fighterName = $("#fighterName");
  const $fighters = $("#fighters");
  const $enemies = $("#enemies");
  const $fighter = $("#fighter");
  const $fighterImage = $("#fighterImage");
  const $fighterHP = $("#fighterHP");
  const $enemyName = $("#enemyName");
  const $enemy = $("#enemy");
  const $enemyImage = $("#enemyImage");
  const $enemyHP = $("#enemyHP");
  const $attackBtn = $("#attackBtn");
  const $restart = $('#restart');
  const $victories = $('#victories');
  const $defeats = $('#defeats');
  const $trudeau = $('#trudeau');
  const $obama = $('#obama');
  const $macron = $('#macron');
  const $merkel = $('#merkel');
  const $trump = $('#trump');
  const $putin = $('#putin');
  const $kim = $('#kim');
  const $hitler = $('#hitler');
  let currentFighter = {};
  let currentEnemy = {};
  let victories = 0;
  let defeats = 0;
  let attackNumber = 1;
  let defeated = 0;
  let enemySelected = false;

  let initializeCharacters = function () {
    fighters = [
      {
        name: 'Justin Trudeau',
        hp: rand(160, 100),
        ap: rand(10, 2),
        img: 'assets/images/trudeau.jpg'
      },
      {
        name: 'Barrack Obama',
        hp: rand(200, 100),
        ap: rand(10, 2),
        img: 'assets/images/obama.jpg'
      },
      {
        name: 'Emmanuel Macron',
        hp: rand(140, 100),
        ap: rand(10, 2),
        img: 'assets/images/macron.jpg'
      },
      {
        name: 'Angela Merkel',
        hp: rand(180, 100),
        ap: rand(10, 2),
        img: 'assets/images/merkel.jpg'
      }
    ];

    trudeau = fighters[0];
    obama = fighters[1];
    macron = fighters[2];
    merkel = fighters[3];

    enemies = [
      {
        name: 'Donald Trump',
        hp: rand(120, 90),
        cap: rand(25, 1),
        img: 'assets/images/trump.jpg'
      },
      {
        name: 'Kim Jung-Un',
        hp: rand(150, 90),
        cap: rand(25, 1),
        img: 'assets/images/kim.jpg'
      },
      {
        name: 'Vladmir Putin',
        hp: rand(140, 90),
        cap: rand(25, 1),
        img: 'assets/images/putin.jpg'
      },
      {
        name: 'Adolf Hitler',
        hp: rand(130, 90),
        cap: rand(25, 1),
        img: 'assets/images/hitler.jpg'
      }
    ];

    trump = enemies[0];
    kim = enemies[1];
    putin = enemies[2];
    hitler = enemies[3];

  }

  let fighters = [
    {
      name: 'Justin Trudeau',
      hp: rand(160, 100),
      ap: rand(10, 2),
      img: 'assets/images/trudeau.jpg'
    },
    {
      name: 'Barrack Obama',
      hp: rand(200, 100),
      ap: rand(10, 2),
      img: 'assets/images/obama.jpg'
    },
    {
      name: 'Emmanuel Macron',
      hp: rand(140, 100),
      ap: rand(10, 2),
      img: 'assets/images/macron.jpg'
    },
    {
      name: 'Angela Merkel',
      hp: rand(180, 100),
      ap: rand(10, 2),
      img: 'assets/images/merkel.jpg'
    }
  ];

  let enemies = [
    {
      name: 'Donald Trump',
      hp: rand(120, 90),
      cap: rand(25, 1),
      img: 'assets/images/trump.jpg'
    },
    {
      name: 'Kim Jung-Un',
      hp: rand(150, 90),
      cap: rand(25, 1),
      img: 'assets/images/kim.jpg'
    },
    {
      name: 'Vladmir Putin',
      hp: rand(140, 90),
      cap: rand(25, 1),
      img: 'assets/images/putin.jpg'
    },
    {
      name: 'Adolf Hitler',
      hp: rand(130, 90),
      cap: rand(25, 1),
      img: 'assets/images/hitler.jpg'
    }
  ];

  let trudeau = fighters[0];
  let obama = fighters[1];
  let macron = fighters[2];
  let merkel = fighters[3];
  let trump = enemies[0];
  let kim = enemies[1];
  let putin = enemies[2];
  let hitler = enemies[3];

  let updateResults = function () {
    $victories.text(victories);
    $defeats.text(defeats);
  }

  let initialize = function () {
    $enemies.hide();
    $fighter.hide();
    $enemy.hide();
    $restart.hide();
    $fighters.show();
    $trudeau.show();
    $obama.show();
    $macron.show();
    $merkel.show();
    $trump.show();
    $putin.show();
    $kim.show();
    $hitler.show();
    attackNumber = 1;
    defeated = 0;
    enemySelected = false;
    $selText.text('Select Your Fighter');
    $attackBtn.show();
    updateResults();
    initializeCharacters();
    $('.message1, .message2').text("");
  }

  initialize();

  let getCharacter = function (x) {
    if (x === 'trump') {
      return trump;
    } else if (x === 'putin') {
      return putin;
    } else if (x === 'kim') {
      return kim;
    } else if (x === 'hitler') {
      return hitler;
    } else if (x === 'obama') {
      return obama;
    } else if (x === 'trudeau') {
      return trudeau;
    } else if (x === 'macron') {
      return macron;
    } else if (x === 'merkel') {
      return merkel;
    }
  }

  let updateAfterAttack = function () {
    $fighterHealth.text('Health = ' + currentFighter.hp);
    $message1.text('Attack inflicted: ' + (currentFighter.ap * attackNumber) + ' damage.');
    $message2.text('Counter attack inflicted ' + (currentEnemy.cap) + ' damage.');
  }

  let getEnemyHealth = function () {
    currentEnemy.hp = currentEnemy.hp - currentFighter.ap * attackNumber;
    $enemyHealth.text('Health = ' + currentEnemy.hp);
  }

  let checkEnemyHealth = () => currentEnemy.hp <= 0;

  let enemyDefeated = function () {
    eDefeated(currentEnemy);
    defeated++;
    $(document).off('click', '#attackBtn', attack);
  }

  let getFighterHealth = (a) => a.hp = a.hp - currentEnemy.cap;

  let checkFighterHealth = () => currentFighter.hp <= 0;

  let updateElementText = (elm, str) => $(elm).text(str);
  let getAttributeValues = (elm, att) => $(elm).attr(att);
  let setAttributeValues = (elm, attr, value) => $(elm).attr(attr, value);
  let show = (elm) => $(elm).show();
  let hide = (elm) => $(elm).hide();
  let getElementText = (elm) => $(elm).text();

  let fighterDefeated = function () {
    updateElementText($message1, 'You have been defeated by ' + currentEnemy.name + '. Better luck next time.')
    updateElementText($message2, '');
    updateElementText($fighterHP, 'Health = 0');
    defeats++;
    updateResults();
    $(document).off('click', '#attackBtn', attack);
    hide($attackBtn);
    show($restart);
  }

  let attack = function () {
    getEnemyHealth();
    if (checkEnemyHealth()) {
      enemyDefeated();
      enemySelected = false;
      checkWin();
    } else {
      getFighterHealth(currentFighter);
      checkFighterHealth();
      if (!checkFighterHealth()) {
        updateAfterAttack();
        attackNumber++;
      } else {
        fighterDefeated();
      }
    }
  }

  let selectFighter = function (a) {
    updateElementText($fighterName, a.name);
    updateElementText($selText, 'Select Your Enemy');
    hide($fighters);
    show($enemies);
    show($fighter);
    currentFighter = a;
    setAttributeValues($fighterImage, 'src', a.img);
    updateElementText($fighterHP, 'Health = ' + currentFighter.hp)
  }

  let selectEnemy = function (a) {
    updateElementText($enemyName, a.name);
    currentEnemy = a;
    show($enemy);
    setAttributeValues($enemyImage, 'src', a.img);
    updateElementText($enemyHP, 'Health = ' + currentEnemy.hp)
    $message1.empty();
    $message2.empty();
    enemySelected = true;
    $(document).on('click', '#attackBtn', attack);
  }

  let selector = function () {
    if (!enemySelected) {
      let elmId = getAttributeValues(this, 'id');
      let char = getCharacter(elmId);
      if (getElementText($selText) === 'Select Your Fighter') {
        selectFighter(char);
      } else {
        selectEnemy(char);
      }
      $(this).hide();
    }

  }

  let eDefeated = function (b) {
    $enemyHP.text('Health = 0');
    $message1.text('Congratulations! You have defeated ' + b.name + '.')
    $message2.text('Select your next enemy.');
  }

  let checkWin = function () {
    if (defeated === 4) {
      victories++;
      updateResults();
      $message1.text('Congratulations! You have defeated all of your enemies.')
      $message2.text('')
      $attackBtn.hide();
      $restart.show();
    }
  }

  $(document).on('click', '.char', selector)
    .on('click', '#restart', initialize);
})