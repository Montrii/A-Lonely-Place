import { Player, Movement, MapHandler, Animator, Callback } from "./modules/objects.js";
$(document).ready(main);


async function main()
{
    var player = new Player();
    var movement = new Movement();
    var mapHandler = new MapHandler();
    var animator = new Animator();
    var callbacks = new Callback();
    player.syncPlayer();
    movement.playerMovement();
    animator.playerAnimation();
    //console.log(await mapHandler.loadMap(1));

    console.log("Loaded with private repository.");
    await mapHandler.loadMap(1, callbacks.onMapLoaded);
}





