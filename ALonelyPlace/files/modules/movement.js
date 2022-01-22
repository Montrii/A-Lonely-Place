import { Player } from "./player.js";
import { Collsion } from "./collsion.js";
import { phpCommunicater } from "./phpCommunicater.js";
import { backPack } from "./backPack.js";
var player = new Player();
var collsion = new Collsion();
var php = new phpCommunicater();
var back = new backPack();
export class Movement
{
    constructor()
    {

    }
    playerMovement()
    {
        var position = 0;
        player.createPlayerWalkSound();
        php.getPlayerItems();
        $(document).keydown(function() {
            var keyDown = event.keyCode;
            player.getPlayerObject().scrollIntoView();
            collsion.friendlyPlayerCollsion(keyDown);
            if(event.keyCode == 87 /*W*/ && event.keyCode != collsion.playerCollsion(keyDown))
            {
                position = player.getPlayerOffSetTop() - 10;
                //PLAYER_OBJECT.style.top = position + "px";
                player.addToTopPosition(position);
                player.playPlayerWalkSound();
            }
            else if(event.keyCode == 83 /*S*/&& event.keyCode != collsion.playerCollsion(keyDown))
            {
                position = player.getPlayerOffSetTop() - 6;
                player.addToTopPosition(position);
                player.playPlayerWalkSound();
            }
            else if(event.keyCode == 68 /*D*/&& event.keyCode != collsion.playerCollsion(keyDown))
            {
                position = player.getPlayerOffSetLeft() - 6;
                player.addToLeftPosition(position);
                player.playPlayerWalkSound();
            }
            else if(event.keyCode == 65 /*A*/&& event.keyCode != collsion.playerCollsion(keyDown))
            {
                position = player.getPlayerOffSetLeft() - 10;
                player.addToLeftPosition(position);
                player.playPlayerWalkSound();
            }
            else if(event.keyCode == 66) /* B */ // INVENTORY
            {
                back.toggleBackPackMenu();
            }
        });
    }
}