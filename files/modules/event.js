import { Player } from "./player.js";
import { Movement } from "./movement.js";
import { Animator } from "./animator.js";

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
}