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
    skullPlayAnimation(skull)
    {
        var id = 1;
        const interval = setInterval(function() 
        {
            skull.classList.toggle("skullAnimation1");
            skull.classList.add(`skullAnimation${id}`);
            if(id >= 4)
            {
                id = 1;
            }
            else 
            {
                id++;
            }
        }, 200);
    }
    vampirePlayAnimation(vampire)
    {
        var id = 1;
        const interval = setInterval(function() 
        {
            vampire.classList.toggle("vampireAnimation1");
            vampire.classList.add(`vampireAnimation${id}`);
            if(id >= 4)
            {
                id = 1;
            }
            else 
            {
                id++;
            }
        }, 200);
    }
    playerStopAnimation()
    {
        clearInterval(this.playerAnimationInterval);
    }
}