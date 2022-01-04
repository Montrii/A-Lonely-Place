import { Player, Movement, MapHandler, Animator } from "./modules/objects.js";
$(document).ready(main);


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
    await testPromise();
}

function testPromise()
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(() =>
        {
            console.log("waited!"); 
        }, 2000);
    })
}



