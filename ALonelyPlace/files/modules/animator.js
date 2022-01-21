export class Animator
{
    playerAnimationInterval = 0;
    #player;
    constructor(playerObject)
    {
        this.#player = playerObject;
    }
    playerPlayAnimation()
    {
        var id = 1;
        const interval = setInterval(function()
        {
            /*
            playerObject.getPlayerImage().src = "../../../Assets/monsters_idle/skeleton1/v2/skeleton_32_"+id+".png";
            if(id >= 4)
            {
                id = 1;
            }
            else 
            {
                id++;
            }
            */
           console.log(this.#player);
        }, 200);
        this.playerAnimationInterval = interval;
    }
    playerStopAnimation()
    {
        clearInterval(this.playerAnimationInterval);
    }
}