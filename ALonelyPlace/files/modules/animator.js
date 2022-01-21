import { Player } from "./player.js";

var player = new Player();
export class Animator
{
    playerAnimationInterval = 0;
<<<<<<< HEAD
    #player;
    constructor(playerObject)
    {
        this.#player = playerObject;
=======
    constructor()
    {

>>>>>>> parent of 1deece7 (0.6.2)
    }
    playerPlayAnimation()
    {
        var id = 1;
        const interval = setInterval(function()
        {
<<<<<<< HEAD
<<<<<<< HEAD
            /*
            playerObject.getPlayerImage().src = "../../../Assets/monsters_idle/skeleton1/v2/skeleton_32_"+id+".png";
=======
            this.player.getPlayerImage().src = "../../../Assets/monsters_idle/skeleton1/v2/skeleton_32_"+id+".png";
>>>>>>> parent of f1fc8a7 (0.6.21)
=======
            player.getPlayerImage().src = "../../../Assets/monsters_idle/skeleton1/v2/skeleton_32_"+id+".png";
>>>>>>> parent of 1deece7 (0.6.2)
            if(id >= 4)
            {
                id = 1;
            }
            else 
            {
                id++;
            }
            */
           console.log(this.#player.createPlayerWalkSound());
        }, 200);
        this.playerAnimationInterval = interval;
    }
    playerStopAnimation()
    {
        clearInterval(this.playerAnimationInterval);
    }
}