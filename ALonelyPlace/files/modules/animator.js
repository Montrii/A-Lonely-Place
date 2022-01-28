import { Player } from "./player.js";

export class Animator
{
    playerAnimationInterval = 0;
    constructor()
    {

    }
    playerPlayAnimation()
    {
        var id = 1;
        var player = new Player(); 
        const interval = setInterval(function()
        {
            
            player.getPlayerImage().src = "../../../Assets/monsters_idle/skeleton1/v2/skeleton_32_"+id+".png";
            if(id >= 4)
            {
                id = 1;
            }
            else 
            {
                id++;
            }
        }, 200);
        this.playerAnimationInterval = interval;
    }
    playerStopAnimation()
    {
        clearInterval(this.playerAnimationInterval);
    }
}