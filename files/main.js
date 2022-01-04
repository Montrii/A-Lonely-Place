import { Player, Movement, MapHandler, Animator } from "./modules/objects.js";
$(document).ready(await main());


async function main()
{
    var player = new Player();
    var movement = new Movement();
    var mapHandler = new MapHandler();
    var animator = new Animator();
    player.syncPlayer();
    movement.playerMovement();
    animator.playerAnimation();
    //console.log(await mapHandler.loadMap(1));

    console.log("Loaded with private repository.");
    const mapLoaded = await mapHandler.loadMap(1);
    console.log(mapLoaded);
}




