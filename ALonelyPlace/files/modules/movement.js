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
        $(document).keydown(function() {
            var keyDown = event.keyCode;
            player.getPlayerObject().scrollIntoView();
            var collsionKey = collsion.friendlyPlayerCollsion(keyDown);
            // if Interactive Object has
            if(event.keyCode == 87 /*W*/ && event.keyCode != collsion.playerCollsion(keyDown) && event.keyCode != collsionKey[0]) 
            {
                position = player.getPlayerOffSetTop() - 10;
                //PLAYER_OBJECT.style.top = position + "px";
                player.addToTopPosition(position);
                player.playPlayerWalkSound();
            }
            else if(event.keyCode == 83 /*S*/&& event.keyCode != collsion.playerCollsion(keyDown)&& event.keyCode != collsionKey[0])
            {
                position = player.getPlayerOffSetTop() - 6;
                player.addToTopPosition(position);
                player.playPlayerWalkSound();
            }
            else if(event.keyCode == 68 /*D*/&& event.keyCode != collsion.playerCollsion(keyDown)&& event.keyCode != collsionKey[0])
            {
                position = player.getPlayerOffSetLeft() - 6;
                player.addToLeftPosition(position);
                player.playPlayerWalkSound();
            }
            else if(event.keyCode == 65 /*A*/&& event.keyCode != collsion.playerCollsion(keyDown)&& event.keyCode != collsionKey[0])
            {
                position = player.getPlayerOffSetLeft() - 10;
                player.addToLeftPosition(position);
                player.playPlayerWalkSound();
            }
            else if(event.keyCode == 66) /* B */ // INVENTORY
            {
                $.get('https://www.cloudflare.com/cdn-cgi/trace', function(userData) {
                    // Convert key-value pairs to JSON
                    // https://stackoverflow.com/a/39284735/452587
                    userData = userData.trim().split('\n').reduce(function(obj, pair) {
                        pair = pair.split('=');
                        return obj[pair[0]] = pair[1], obj;
                    }, {});
                        $.ajax({
                            type: "GET",
                            url: 'https://montriscript.com/projects/ALonelyPlace/ALonelyPlace/files/modules/php/getPlayerItems.php',
                            data: userData,
                            success: function(userData)
                            {
                                back.toggleBackPackMenu(userData);
                            }
                        });
                    });
            }
            else if(collsionKey[1] != 0) // INTERACTION
            {
                collsion.openObjectsCollsion(collsionKey[1], keyDown);
                // SHOWCASING E TO INTERACT MENU POPUP
                $('body').append(`<div class="infoTextInteraction" style="position:absolute;width:250px;height:75px;top:${50}px;">
                </div>`);
            }
            else 
            {
                document.querySelector(".infoText").remove();
            }
        });
    }
}