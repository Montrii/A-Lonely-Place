import { Player } from "./objects.js";
import playerCollsion from "./collsion.js";

var player = new Player();
export function playerMovement()
{
    var position = 0;
    $(document).keydown(function() {
        var keyDown = event.keyCode;
        player.getPlayerObject().scrollIntoView();
        console.log("Left: " + document.documentElement.scrollTop);
        console.log("Height: " + document.documentElement.scrollHeight);
        console.log("Top: " + document.documentElement.scrollTop);
        console.log("Width: " + document.documentElement.scrollWidth);
        if(event.keyCode == 87 /*W*/ && event.keyCode != playerCollsion(keyDown))
        {
            position = player.getPlayerOffSetTop() - 10;
            //PLAYER_OBJECT.style.top = position + "px";
            player.addToTopPosition(position);
        }
        else if(event.keyCode == 83 /*S*/&& event.keyCode != playerCollsion(keyDown))
        {
            position = player.getPlayerOffSetTop() - 6;
            player.addToTopPosition(position);
        }
        else if(event.keyCode == 68 /*D*/&& event.keyCode != playerCollsion(keyDown))
        {
            position = player.getPlayerOffSetLeft() - 6;
            player.addToLeftPosition(position);
        }
        else if(event.keyCode == 65 /*A*/&& event.keyCode != playerCollsion(keyDown))
        {
            position = player.getPlayerOffSetLeft() - 10;
            player.addToLeftPosition(position);
        }
    });
}