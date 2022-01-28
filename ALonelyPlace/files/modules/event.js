import { Player } from "./player.js";
import { Movement } from "./movement.js";
import { Animator } from "./animator.js";
import { determineItem, defineRareityLevel } from "./utilities.js";


export class Events
{
    player = new Player();
    movement = new Movement();
    animator = new Animator();
    constructor()
    {
    }
    onMapLoaded()
    {
        console.log("MAP FINISHED LOADING! ");
        this.player.syncPlayer();
        this.movement.playerMovement();
        this.animator.playerPlayAnimation();
    }
    onMapFailed(reason)
    {
        console.log("Map failed to load.");
        alert(reason);
    }
    onCollsionGapObject()
    {
        console.log("hit gap object");
    }
    async onChestOpened()
    {
        console.log("OPENING CHEST");
        await playAudio(new Audio("../../../Assets/sounds/chest_open.wav"));
        console.log("CALCULATE LOOT");
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
                                console.log(userData);
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
    onEnterStairs()
    {
        console.log("ENTERED NEXT LEVEL");
    }
}

function playAudio(audio){
    return new Promise(res=>{
      audio.play()
      audio.onended = res
    })
}