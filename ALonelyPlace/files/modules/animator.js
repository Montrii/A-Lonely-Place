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
<<<<<<< HEAD
            /*
            playerObject.getPlayerImage().src = "../../../Assets/monsters_idle/skeleton1/v2/skeleton_32_"+id+".png";
=======
            this.player.getPlayerImage().src = "../../../Assets/monsters_idle/skeleton1/v2/skeleton_32_"+id+".png";
>>>>>>> parent of f1fc8a7 (0.6.21)
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