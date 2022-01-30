import { Player } from "./player.js";
import { Collsion } from "./collsion.js";
import { phpCommunicater } from "./phpCommunicater.js";
import { backPack } from "./backPack.js";
import { getRandomInt, playBackGroundMusic, getMobType, getMobId } from "./utilities.js";
var player = new Player();
var collsion = new Collsion();
var php = new phpCommunicater();
var back = new backPack();
var interacted = false;
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
        $(document).keydown(function(event) {
            var keyDown = event.keyCode;
            player.getPlayerObject().scrollIntoView();
            playBackGroundMusic(audio);
            interacted = true;
            var collsionKey = collsion.friendlyPlayerCollsion(keyDown, event);
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
    async mobMovement(mob, delay)
    {
        var skullWalk = new Audio("../../../Assets/sounds/skull_walk.wav");
        var priestWalk = new Audio("../../../Assets/sounds/priest_walk.wav");
        var vampWalk = new Audio("../../../Assets/sounds/vamp_walk.wav");
        var skullWalkDuration = skullWalk.duration * 1000;
        var vampWalkDuration = vampWalk.duration * 1000;
        var priestWalkDuration = priestWalk.duration * 1000;
        var timer = delay;
        const interval3 = setInterval(async function() 
        {
           var top = parseInt(mob.style.top);
           var left = parseInt(mob.style.left);
           var random = getRandomInt(4) + 1;
           var returns = collsion.mobCollision(mob);
           var value = 0;
           if(document.querySelector(`.${getMobId(mob)}`) != null) // If Monster is actually still alive, then
           // start calculating sound and steps.
           {
                if(interacted == true)
                {
                        if(getMobType(mob) == "skull")
                        {
                            skullWalk.volume = 0.3;
                            await playAudio(skullWalk);
                            timer = timer + skullWalkDuration;
                        }
                        else if(getMobType(mob) == "vampire")
                        {
                            vampWalk.volume = 0.3;
                            await playAudio(vampWalk);
                            timer = timer + vampWalkDuration;
                        }
                        else if(getMobType(mob) == "priest")
                        {
                            priestWalk.volume = 0.3;
                            await playAudio(priestWalk);
                            timer = timer + priestWalkDuration;
                        }
                }
                if(random == 1 && returns[1] != random) // walk to the left
                {
                    value = 2;
                    value = value * -1;
                    mob.style.left = left+value+"px";

                }
                else if(random == 2 && returns[1] != random) // walk to the right
                {
                        value = 2;
                        mob.style.left = left+value+"px";

                }
                else if(random == 3 && returns[1] != random) // walk to above
                {
                        value = 2;
                        value = value * -1;
                        mob.style.top = top+value+"px";

                }
                else if(random == 4 && returns[1] != random)
                {
                        value = 2;
                        mob.style.top = top+value+"px";
                }
           }
           

                

        }, timer);
    }
}

function playAudio(audio){
    return new Promise(res=>{
      audio.play()
      audio.onended = res
    })
}