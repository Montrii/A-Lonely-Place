import { Player } from "./objects.js";

var player = new Player();
export function playerAnimation()
{

    var id = 1;
    const interval = setInterval(function()
    {
        player.getPlayerImage().src = "../../../Images/monsters_idle/vampire/v2/vampire_v2_"+id+"_32.png";
        if(id >= 4)
        {
            id = 1;
        }
        else 
        {
            id++;
        }
    }, 200);
    return interval;




}
