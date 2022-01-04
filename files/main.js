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
    mapHandler.loadMap(1, mapHandler.getMapEvent());
    console.log("Loaded with private repository.");
    document.addEventHandler('mapLoaded', function(e)
    {
        console.log("loaded map!");
    })

}

