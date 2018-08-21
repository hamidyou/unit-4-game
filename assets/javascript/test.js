/*When the game starts, the player will choose a character by clicking on the fighter's picture. The player will fight as that character for the rest of the game.*/


$(document).ready(function () {
  let rand = function (max, min) {
    let num = Math.floor(Math.random() * (max - min)) + min;
    return num;
  }

  let currentFighter = {};
  let currentEnemy = {};
  let victories = 0;
  let defeats = 0;
  let attackNumber = 1;
  let defeated = 0;
  let enemySelected = false;
  const $selText = $('#fighterSelectText');
  const $enemyHealth = $("#enemyHP");
  const $fighterHealth = $("#fighterHP");
  const $message1 = $(".message1");
  const $message2 = $(".message2");

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

  // let fightersFunction = function (name, img, hpRange, apRange) {
  //   this.name = name;
  //   this.img = img;
  //   this.hp = rand(hpRange[0], hpRange[1]);
  //   this.ap = rand(apRange[0], apRange[1]);
  // };

  // let fighters = [['Justin Trudeau', 'assets/images/trudeau.jpg', [160, 100], [10, 2]], 
  //   ['Barrack Obama', 'assets/images/obama.jpg', [200, 100], [10, 2]]]

  // // let fighterVariables = ['trudeau', 'obama', 'macron', 'merkel'];

  // let fighterVariables = new fightersFunction(fighters[0], fighters[1], fighters[2], fighters[3];

  // let TEST = [];

  // for (let i = 0; i < fighters.length; i++) {
  //   let fighter = new fightersFunction(fighters[i][0], fighters[i][1], fighters[i][2], fighters[i][3];
  //   TEST.push(fighter);
  // }

  // let fighters = [
  //   {
  //     name: 'Justin Trudeau',
  //     hp: rand(160, 100),
  //     ap: rand(10, 2),
  //     img: 'assets/images/trudeau.jpg'
  //   },
  //   {
  //     name: 'Barrack Obama',
  //     hp: rand(200, 100),
  //     ap: rand(10, 2),
  //     img: 'assets/images/obama.jpg'
  //   },
  //   {
  //     name: 'Emmanuel Macron',
  //     hp: rand(140, 100),
  //     ap: rand(10, 2),
  //     img: 'assets/images/macron.jpg'
  //   },
  //   {
  //     name: 'Angela Merkel',
  //     hp: rand(180, 100),
  //     ap: rand(10, 2),
  //     img: 'assets/images/merkel.jpg'
  //   }
  // ];

  let trudeau = fighters[0];
  let obama = fighters[1];
  let macron = fighters[2];
  let merkel = fighters[3];

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

  let trump = enemies[0];
  let kim = enemies[1];
  let putin = enemies[2];
  let hitler = enemies[3];


  let updateResults = function () {
    $('#victories').text(victories);
    $('#defeats').text(defeats);
  }

  let initialize = function () {
    $("#enemies, #fighter, #enemy, #restart").hide();
    $("#fighters, #trudeau, #obama, #macron, #merkel, #trump, #putin, #kim, #hitler").show();
    attackNumber = 1;
    defeated = 0;
    enemySelected = false;
    $($selText).text('Select Your Fighter');
    $('#attackBtn').show();
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

  let checkEnemyHealth = function () {
    return currentEnemy.hp <= 0;
  }

  let enemyDefeated = function () {
    eDefeated(currentEnemy);
    defeated++;
    $(document).off('click', '#attackBtn', attack);
  }

  let getFighterHealth = function () {
    currentFighter.hp = currentFighter.hp - currentEnemy.cap;
  }

  let checkFighterHealth = function () {
    return currentFighter.hp <= 0;
  }

  let fighterDefeated = function () {
    $(".message1").text('You have been defeated by ' + currentEnemy.name + '. Better luck next time.')
    $(".message2").text('');
    $("#fighterHP").text('Health = 0');
    defeats++;
    updateResults();
    $(document).off('click', '#attackBtn', attack);
    $('#attackBtn').hide();
    $('#restart').show();
  }

  let attack = function () {
    getEnemyHealth();
    if (checkEnemyHealth()) {
      enemyDefeated();
      enemySelected = false;
      checkWin();
    } else {
      getFighterHealth();
      checkFighterHealth();
      if (!checkFighterHealth()) {
        updateAfterAttack();
        attackNumber++;
      } else {
        fighterDefeated();
      }
    }
  }

  let textUpdate = function (elm, str) {
    $(elm).text(str);
  }

  let selector = function () {
    if (!enemySelected) {
      let elmId = $(this).attr("id");
      let char = getCharacter(elmId);
      if ($selText.text() === 'Select Your Fighter') {
        $("#fighterName").text(char.name);
        $($selText).text('Select Your Enemy');
        $("#fighters").hide();
        $("#enemies, #fighter").show();
        currentFighter = char;
        $("#fighterImage").attr('src', char.img);
        $("#fighterHP").text('Health = ' + currentFighter.hp);
      } else {
        $("#enemyName").text(getCharacter(elmId).name);
        currentEnemy = char;
        $("#enemy").show();
        $("#enemyImage").attr('src', char.img);
        $("#enemyHP").text('Health = ' + currentEnemy.hp);
        $(".message1, .message2").empty();
        enemySelected = true;
        $(document).on('click', '#attackBtn', attack);
      }
      $(this).hide();
    }

  }

  let eDefeated = function (b) {
    $("#enemyHP").text('Health = 0');
    $(".message1").text('Congratulations! You have defeated ' + b.name + '.')
    $(".message2").text('Select your next enemy.');
  }

  let checkWin = function () {
    if (defeated === 4) {
      victories++;
      updateResults();
      $(".message1").text('Congratulations! You have defeated all of your enemies.')
      $(".message2").text('')
      $("#attackBtn").hide();
      $('#restart').show();
    }
  }

  $(document).on('click', '.char', selector)
    .on('click', '#restart', initialize);
})