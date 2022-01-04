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
    var mapLoaded = new CustomEvent('mapLoaded', {
        detail:
        {
            finished: true
        }
    });

    document.getElementById("player").addEventListener('mapLoaded', (e) =>
    {
        console.log(e.detail.finished);
    });

    document.getElementById("player").dispatchEvent(mapLoaded);
    console.log("Map loaded.");
}

