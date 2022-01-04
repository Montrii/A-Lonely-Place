import { Player, Movement, MapHandler, Animator } from "./modules/objects.js";
$(document).ready(main);


var player = new Player();
var movement = new Movement();
var mapHandler = new MapHandler();
var animator = new Animator();
function main()
{
    player.syncPlayer();
    movement.playerMovement();
    animator.playerAnimation();
    mapHandler.loadMap(1);
    console.log("Loaded with private repository.");
    Document.addEventHandler('mapLoaded', (e) =>
    {
        console.log("loaded map!");
    });

}

