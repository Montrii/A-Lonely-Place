import { Player } from "./player.js";
import { Movement } from "./movement.js";
import { Animator } from "./animator.js";
import { ItemGenerator } from "./itemGenerator.js";


export class Events
{
    player = new Player();
    movement = new Movement();
    animator = new Animator();
    itemGenerator = new ItemGenerator();
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
            data: userData,
            success: function(userData)
            {
                var itemLength = parseInt(userData);
                console.log(itemGenerator.determineItem(itemLength));
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
}

function playAudio(audio){
    return new Promise(res=>{
      audio.play()
      audio.onended = res
    })
}