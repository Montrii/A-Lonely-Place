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
    onChestOpened(itemCount)
    {
        // Once Chest is opened, generate content
        var item_ID = this.itemGenerator.determineItem(itemCount);
        var rareity = this.itemGenerator.defineRareityLevel();
        return this.itemGenerator.buildItem(item_ID, rareity);
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