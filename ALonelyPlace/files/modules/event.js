import { Player } from "./player.js";
import { Movement } from "./movement.js";
import { Animator } from "./animator.js";
import { determineItem, defineRareityLevel, defineSpecialRareityLevel, getMobType, getRandomInt } from "./utilities.js";
import { Console } from "./console.js";


export class Events
{
    player = new Player();
    movement = new Movement();
    animator = new Animator();
    console = new Console();
    constructor()
    {
    }
    onMapLoaded()
    {
        this.player.syncPlayer();
        this.movement.playerMovement();
        this.animator.playerPlayAnimation();
        this.console.writeToConsole(`<span style="color:#90EE90">Successfully </span>loaded the Map!`);
    }
    onMapFailed(reason)
    {
        this.console.writeToConsole(`Map <span style="color:#ff0033">failed </span>to load. Reason: \n ${reason}`);
    }
    onCollsionGapObject()
    {
        this.console.writeToConsole("You've hit an gap Object!");
    }
    async onSpecialChestOpened()
    {
        this.console.writeToConsole("Opening Special Chest...");
        var interaction = document.querySelectorAll(".infoTextInteraction");
        for(var i = 0; i < interaction.length; i++)
        {
            interaction[i].remove();
        }
        await playAudio(new Audio("../../../Assets/sounds/chest_open.wav"));
        this.console.writeToConsole("Calculating Loot...");
        $.ajax({
            type: "GET",
            url: 'https://montriscript.com/projects/ALonelyPlace/ALonelyPlace/files/modules/php/getItems.php',
            data: {
                'ajax' : true
            },
            success: function(userData)
            {
                var itemLength = parseInt(userData);
                var item_ID = determineItem(itemLength);
                var rareity = defineSpecialRareityLevel();
                $.get('https://www.cloudflare.com/cdn-cgi/trace', function(userData) {
                    // Convert key-value pairs to JSON
                    // https://stackoverflow.com/a/39284735/452587
                    userData = userData.trim().split('\n').reduce(function(obj, pair) {
                        pair = pair.split('=');
                        return obj[pair[0]] = pair[1], obj;
                    }, {});
                        $.ajax({
                            type: "GET",
                            url: 'https://montriscript.com/projects/ALonelyPlace/ALonelyPlace/files/modules/php/saveStats.php',
                            data: {
                                'item': item_ID,
                                'rareity': rareity,
                                'ip': userData['ip']
                            },
                            success: function(userData)
                            {
                                console = new Console();
                                console.writeToConsole(userData);
                            }
                        });
                    });
            }
        });
    }
    async onChestOpened()
    {
        this.console.writeToConsole("Opening Chest...");
        var interaction = document.querySelectorAll(".infoTextInteraction");
        for(var i = 0; i < interaction.length; i++)
        {
            interaction[i].remove();
        }
        await playAudio(new Audio("../../../Assets/sounds/chest_open.wav"));
        this.console.writeToConsole("Calculating Loot...");
        $.ajax({
            type: "GET",
            url: 'https://montriscript.com/projects/ALonelyPlace/ALonelyPlace/files/modules/php/getItems.php',
            data: {
                'ajax' : true
            },
            success: function(userData)
            {
                var itemLength = parseInt(userData);
                var item_ID = determineItem(itemLength);
                var rareity = defineRareityLevel();
                $.get('https://www.cloudflare.com/cdn-cgi/trace', function(userData) {
                    // Convert key-value pairs to JSON
                    // https://stackoverflow.com/a/39284735/452587
                    userData = userData.trim().split('\n').reduce(function(obj, pair) {
                        pair = pair.split('=');
                        return obj[pair[0]] = pair[1], obj;
                    }, {});
                        $.ajax({
                            type: "GET",
                            url: 'https://montriscript.com/projects/ALonelyPlace/ALonelyPlace/files/modules/php/saveStats.php',
                            data: {
                                'item': item_ID,
                                'rareity': rareity,
                                'ip': userData['ip']
                            },
                            success: function(userData)
                            {
                                console = new Console();
                                console.writeToConsole(userData);
                            }
                        });
                    });
            }
        });
    }
    async onDoorOpened()
    {
        this.console.writeToConsole("Opened door!");
        await playAudio(new Audio("../../../Assets/sounds/door_open.wav"));
        this.console.writeToConsole("OPENED DOOR");
    }
    async onPlayerHit()
    {
        this.console.writeToConsole("A monster successfully hit a player!");
        var health = parseInt(this.player.getPlayerHealth());
        health = health - 1;
        if(health > 0)
        {
            this.player.setPlayerHealth(health);
            var originalHealth = 5;
            var precentage = (100/originalHealth) * health;
            this.player.getPlayerObject().style.filter = `grayscale(${100-precentage}%)`;
            await playAudio(new Audio("../../../Assets/sounds/skel_hit.wav"));
        }
        else 
        {
            await playAudio(new Audio("../../../Assets/sounds/skel_die.wav"));
            location.reload(true);
        }
    }
    onMonsterFailingHit()
    {
        this.console.writeToConsole("A Monster failed to hit the player!");
    }
    async onMonsterHit(enemy)
    {
        var interaction = document.querySelectorAll(".infoTextInteraction");
        for(var i = 0; i < interaction.length; i++)
        {
            interaction[i].remove();
        }
        playAudio(new Audio("../../../Assets/sounds/skel_swing.wav"));
        if(getMobType(enemy) == "skull")
        {
            this.console.writeToConsole("I just hit a skull!");
            var health = parseInt(enemy.innerHTML);
            if(enemy.innerHTML <= 1)
            {
                await playAudio(new Audio("../../../Assets/sounds/skull_die.wav"));
                enemy.remove();
            }
            else 
            {
                health = health - 1;
                enemy.innerHTML = health;
                await playAudio(new Audio("../../../Assets/sounds/skull_hit.wav"));
                var originalHealth = 2;
                var precentage = (100/originalHealth) * health;
                enemy.style.filter = `grayscale(${100-precentage}%)`;
                await playAudio(new Audio("../../../Assets/sounds/skull_swing.wav"));
                // HIT CHANCE OF MONSTER
                var randomHitChance = getRandomInt(5) + 1;
                
                if(randomHitChance == 1 || randomHitChance == 2)
                {
                    this.onPlayerHit();
                }
                else 
                {
                    this.onMonsterFailingHit();
                }
            }
        }
        else if(getMobType(enemy) == "vampire")
        {
            this.console.writeToConsole("I just hit a vampire!");
            var health = parseInt(enemy.innerHTML);
            if(enemy.innerHTML <= 1)
            {
                await playAudio(new Audio("../../../Assets/sounds/vamp_die.wav"));
                enemy.remove();
            }
            else 
            {
                health = health - 1;
                enemy.innerHTML = health;
                await playAudio(new Audio("../../../Assets/sounds/vamp_hit.wav"));
                var originalHealth = 3;
                var precentage = (100/originalHealth) * health;
                enemy.style.filter = `grayscale(${100-precentage}%)`;
                await playAudio(new Audio("../../../Assets/sounds/vamp_swing.wav"));
                // HIT CHANCE OF MONSTER
                var randomHitChance = getRandomInt(5) + 1;
                
                if(randomHitChance == 1 || randomHitChance == 2)
                {
                    this.onPlayerHit();
                }
                else 
                {
                    this.onMonsterFailingHit();
                }
            }
        }
        else if(getMobType(enemy) == "priest")
        {
            this.console.writeToConsole("I just hit a priest!");
            var health = parseInt(enemy.innerHTML);
            if(enemy.innerHTML <= 1)
            {
                await playAudio(new Audio("../../../Assets/sounds/priest_die.wav"));
                enemy.remove();
            }
            else 
            {
                health = health - 1;
                enemy.innerHTML = health;
                await playAudio(new Audio("../../../Assets/sounds/priest_hit.wav"));
                var originalHealth = 5;
                var precentage = (100/originalHealth) * health;
                enemy.style.filter = `grayscale(${100-precentage}%)`;
                await playAudio(new Audio("../../../Assets/sounds/priest_swing.wav"));
                // HIT CHANCE OF MONSTER
                var randomHitChance = getRandomInt(5) + 1;
                if(randomHitChance == 1 || randomHitChance == 2)
                {
                    this.onPlayerHit();
                }
                else 
                {
                    this.onMonsterFailingHit();
                }
            }
        }
    }
    async onEnterTrap(event)
    {
        // Stop KeyDown Event for multiple inputs during await
        $(document).off("keydown");
        this.console.writeToConsole("Entered Trap!");
        await playAudio(new Audio('../../../Assets/sounds/falling.wav'));
        location.reload();

    }
    onBeWinner()
    {
        this.console.writeToConsole("NO MORE MAPS; YOU ESCAPED");
        document.getElementById("progressbar").remove();
        document.getElementById("player").remove();
        $('body').append(`<p id="winningScreen">You won!</p>`);
    }
    async onEnterStairs(event)
    {
        // Stop KeyDown Event for multiple inputs during await (skipping levels)
        $(document).off("keydown");
            this.console.writeToConsole("Entering Next Level...");
            await playAudio(new Audio('../../../Assets/sounds/stairs.wav'));
            $.get('https://www.cloudflare.com/cdn-cgi/trace', function(userData) {
                // Convert key-value pairs to JSON
                // https://stackoverflow.com/a/39284735/452587
                userData = userData.trim().split('\n').reduce(function(obj, pair) {
                    pair = pair.split('=');
                    return obj[pair[0]] = pair[1], obj;
                }, {});
                    $.ajax({
                        type: "GET",
                        url: 'https://montriscript.com/projects/ALonelyPlace/ALonelyPlace/files/modules/php/enterNextLevel.php',
                        data: {
                            'ip': userData['ip']
                        },
                        success: function(userData)
                        {
                            location.reload();
                        }
                    });
                });
    }
}

function playAudio(audio){
    return new Promise(res=>{
      audio.play()
      audio.onended = res
    })
}