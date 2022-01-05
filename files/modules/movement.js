import { Player } from "./player.js";
import { Collsion } from "./collsion.js";
var player = new Player();
var collsion = new Collsion();

export class Movement
{
    constructor()
    {

    }
    playerMovement()
    {
        var position = 0;
        $(document).keydown(function() {
            var keyDown = event.keyCode;
            player.getPlayerObject().scrollIntoView();
            collsion.friendlyPlayerCollsion(keyDown);
            if(event.keyCode == 87 /*W*/ && event.keyCode != collsion.playerCollsion(keyDown))
            {
                position = player.getPlayerOffSetTop() - 10;
                //PLAYER_OBJECT.style.top = position + "px";
                player.addToTopPosition(position);
            }
            else if(event.keyCode == 83 /*S*/&& event.keyCode != collsion.playerCollsion(keyDown))
            {
                position = player.getPlayerOffSetTop() - 6;
                player.addToTopPosition(position);
            }
            else if(event.keyCode == 68 /*D*/&& event.keyCode != collsion.playerCollsion(keyDown))
            {
                position = player.getPlayerOffSetLeft() - 6;
                player.addToLeftPosition(position);
            }
            else if(event.keyCode == 65 /*A*/&& event.keyCode != collsion.playerCollsion(keyDown))
            {
                position = player.getPlayerOffSetLeft() - 10;
                player.addToLeftPosition(position);
            }
        });
    }
}