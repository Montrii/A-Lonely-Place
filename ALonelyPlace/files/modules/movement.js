import { Player } from "./player.js";
import { Collsion } from "./collsion.js";
import { phpCommunicater } from "./phpCommunicater.js";
import { backPack } from "./backPack.js";
import { getRandomInt, playBackGroundMusic } from "./utilities.js";
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
        var audio = new Audio("../../../Assets/sounds/justin game 44.wav");
        $(document).keydown(function() {
            var keyDown = event.keyCode;
            player.getPlayerObject().scrollIntoView();
            playBackGroundMusic(audio);
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
            }
        });
    }
    mobMovement(mob)
    {
        const interval3 = setInterval(function() 
        {
           var top = parseInt(mob.style.top);
           var left = parseInt(mob.style.left);
           var random = getRandomInt(4) + 1;
           var value;
           if(random == 1) // top negative
           {
               value = 2;
               value = value * -1;
               if(collsion.mobCollision(mob) == false)
               {
                    mob.style.top = top+value+"px";
               }
               else 
               {
                    mob.style.top = top+"px";
               }

           }
           else if(random == 2) // top positive
           {
               value = 2;
               if(collsion.mobCollision(mob) == false)
               {
                    mob.style.top = top+value+"px";
               }
               else 
               {
                    mob.style.top = top+"px";
               }

           }
           else if(random == 3) // left negative
           {
                value = 2;
                value = value * -1;
                if(collsion.mobCollision(mob) == false)
                {
                    mob.style.left = left+value+"px";
                }
                else 
               {
                mob.style.left = left+"px";
               }

           }
           else if(random == 4)
           {
                value = 2;
                if(collsion.mobCollision(mob) == false)
                {
                    mob.style.left = left+value+"px";
                }
                else 
               {
                mob.style.left = left+"px";
               }
           }
        }, 200);
    }
}