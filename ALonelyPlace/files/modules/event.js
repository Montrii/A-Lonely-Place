import { Player } from "./player.js";
import { Movement } from "./movement.js";
import { Animator } from "./animator.js";
import { determineItem, defineRareityLevel } from "./utilities.js";
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
                console.log("ITEM" + item_ID + " RAREITY" + rareity);
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
                                if(userData != "")
                                {
                                    this.console.writeToConsole(userData);
                                }
                                else 
                                {
                                    this.console.writeToConsole(`<span style="color:#90EE90">Successfully </span>saved loot into your inventory!`);
                                }
                            }
                        });
                    });
            }
        });
    }
    onDoorOpened()
    {

    }
    onPlayerHit()
    {

    }
    onMonsterHit(enemy)
    {

    }
    async onEnterTrap()
    {
        console.log("Entered Trap!");
        await playAudio(new Audio('../../../Assets/sounds/falling.wav'));
        location.reload();
    }
    async onEnterStairs()
    {
        console.log("ENTERED NEXT LEVEL");
        await playAudio(new Audio('../../../Assets/sounds/stairs.wav'));
        console.log("updating in database and reloading website!");
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
                        console.log(userData);
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