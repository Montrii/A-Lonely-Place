import { Player, Movement, MapHandler, Animator } from "./modules/objects.js";
$(document).ready(main);


var player = new Player();
var movement = new Movement();
var mapHandler = new MapHandler();
var animator = new Animator();
function main()
{
    mapHandler.loadMap(1).then((resolve) => {
        console.log("executed successfully");
    }).catch((err) => {
        console.log("Error while loading map");
    });
       // player.syncPlayer();
       // movement.playerMovement();
        //animator.playerAnimation();
}

