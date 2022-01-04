import { Player, Movement, MapHandler, Animator } from "./modules/objects.js";
$(document).ready(await main);


var player = new Player();
var movement = new Movement();
var mapHandler = new MapHandler();
var animator = new Animator();
async function main()
{
    player.syncPlayer();
    movement.playerMovement();
    animator.playerAnimation();
    //console.log(await mapHandler.loadMap(1));

    console.log("Loaded with private repository.");
    mapHandler.loadMap(1).then((val) =>
    {
        console.log(val);
    }, (reason) =>
    {
        console.log(reason);
    })
}




