import { playerAnimation } from "./modules/animation.js";
//import { generateWalls } from "./modules/worldGeneration.js";
import { Player } from "./modules/objects.js";
import { playerMovement } from "./modules/movement.js";
import { loadMap } from "./modules/mapGeneration.js";
$(document).ready(main);


var player = new Player();
function main()
{

    player.syncPlayer();
    playerMovement();
    playerAnimation();
    //generateWalls();
    loadMap(1);
}

