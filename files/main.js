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
    //console.log(await mapHandler.loadMap(1));

    console.log("Loaded with private repository.");
    const getName = () => 
    new Promise(resolve => setTimeout(resolve, 1000, 'xxx'));

    f = async () => {
        let name = await getName();
        console.log(name);
        return name;
    }
    console.log(await f());
}



