import { Player } from "./player.js";

var player = new Player();
export class Animator
{
    playerAnimationInterval = 0;
    constructor()
    {

    }
    playerPlayAnimation()
    {
        var id = 1;
        const interval = setInterval(function()
        {
            player.getPlayerImage().src = "../../../Assets/monsters_idle/vampire/v2/vampire_v2_"+id+"_32.png";
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