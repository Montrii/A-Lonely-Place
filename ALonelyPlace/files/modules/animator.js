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
    vampirePlayAnimation(vampire)
    {
        var id = 1;
        const interval3 = setInterval(function() 
        {
            vampire.classList.toggle(`vampireAnimation${id}`);
            if(id >= 4)
            {
                id = 1;
            }
            else 
            {
                id++;
            }
            vampire.classList.add(`vampireAnimation${id}`);
        }, 200);
    }
    skullPlayAnimation(skull)
    {
        var id = 1;
        const interval2 = setInterval(function() 
        {
            skull.classList.toggle(`skullAnimation${id}`);
            if(id >= 4)
            {
                id = 1;
            }
            else 
            {
                id++;
            }
            skull.classList.add(`skullAnimation${id}`);
        }, 200);
    }
    playerStopAnimation()
    {
        clearInterval(this.playerAnimationInterval);
    }
}