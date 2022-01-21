export class Animator
{
    playerAnimationInterval = 0;
    constructor(playerObject)
    {
        this.playerObject = playerObject;
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
           console.log(this.playerObject);
        }, 200);
        this.playerAnimationInterval = interval;
    }
    playerStopAnimation()
    {
        clearInterval(this.playerAnimationInterval);
    }
}