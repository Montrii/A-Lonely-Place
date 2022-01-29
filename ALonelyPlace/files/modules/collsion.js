import { getFriendlyObjectClass, checkIfValidFriendlyObject } from "./utilities.js";
import { Player } from "./player.js";
import { FriendlyObject } from "./friendlyObject.js";
import { Wall } from "./wall.js";
import { Events } from "./event.js";
import { Playground } from "./playGround.js";
import { Enemy } from "./enemies.js";

var wall = new Wall();
var player = new Player();
var friendlyObject = new FriendlyObject();
var playGround = new Playground();
var enemy = new Enemy();
export class Collsion
{
    constructor()
    {

    }
    openObjectsCollsion(object, keyDown)
    {
        var events = new Events();
        var playerCollsion = player.getPlayerSides();
        var playGroundCollsion = playGround.getPlayGroundSides();
        var foData = 0;
        var playerTop = parseInt(playerCollsion.top);
        var playerBottom = parseInt(playerCollsion.bottom);
        var playerLeft = parseInt(playerCollsion.left);
        var playerRight = parseInt(playerCollsion.right);
        var playGroundTop = parseInt(playGroundCollsion.bottom);
        var playGroundBottom = parseInt(playGroundCollsion.top);
        var playGroundLeft = parseInt(playGroundCollsion.left);
        var playGroundRight = parseInt(playGroundCollsion.right);
        foData = object.getBoundingClientRect();
        var interaction = document.querySelectorAll(".infoTextInteraction");
        if(interaction.length == 0)
        {
            var content = "Press <b>E</b> to interact";
            // SHOWCASING E TO INTERACT MENU POPUP
            $('body').append(`<div class="infoTextInteraction"><p>${content}</p>
            </div>`);
        }
        if(checkIfValidFriendlyObject(getFriendlyObjectClass(object)) == true)
        {
            if(keyDown == 69 && (getFriendlyObjectClass(object) == "chest")) // OPEN THE CHEST
            {
                
                object.classList.toggle("chest");
                object.classList.add("openedChest");
                events.onChestOpened();

            }
            else if(keyDown == 69 && (getFriendlyObjectClass(object) == "specialChest")) // OPEN THE CHEST
            {
                
                object.classList.toggle("specialChest");
                object.classList.add("specialChestOpen");
                events.onSpecialChestOpened();

            }
            else if(keyDown == 69 && getFriendlyObjectClass(object) == "door")
            {
                object.classList.toggle("door");
                object.classList.add("doorOpen");
                events.onDoorOpened();
            }
        }
        else 
        {
            if(keyDown == 69)
            {
                console.log(object);
                alert("yo");
            }
        } 
    }
    friendlyPlayerCollsion(keyCode)
    {
        var events = new Events();
        var blockingKey = [0,0];
        blockingKey[1] = 0;
        var playerCollsion = player.getPlayerSides();
        var friendlyObjects = friendlyObject.getFriendlyObjects();
        var enemies = enemy.getMobs();
        var playGroundCollsion = playGround.getPlayGroundSides();
        var foData = 0;
        var playerTop = parseInt(playerCollsion.top);
        var playerBottom = parseInt(playerCollsion.bottom);
        var playerLeft = parseInt(playerCollsion.left);
        var playerRight = parseInt(playerCollsion.right);
        var playGroundTop = parseInt(playGroundCollsion.bottom);
        var playGroundBottom = parseInt(playGroundCollsion.top);
        var playGroundLeft = parseInt(playGroundCollsion.left);
        var playGroundRight = parseInt(playGroundCollsion.right);
        var interaction = document.querySelectorAll(".infoTextInteraction");
        for(var i = 0; i < interaction.length; i++)
        {
            interaction[i].remove();
        }
        for(var i = 0; i < enemies.length; i++)
        {
            foData = enemies[i].getBoundingClientRect();
            var collsionLeft = parseInt(foData.left);
            var collsionRight = parseInt(foData.right);
            var collsionTop = parseInt(foData.top);
            var collsionBottom = parseInt(foData.bottom);
            if(keyCode == 65 && playerLeft-1 == collsionRight && (playerBottom >= collsionTop && playerBottom <= collsionBottom || playerTop <= collsionBottom && playerTop  >= collsionTop))
            {
                // Richtung Key wird returnt und von movement.js geblockt.
                blockingKey[0] = 65;
                blockingKey[1] = enemies[i];
            }
            else if(keyCode == 68 && playerRight+1 == collsionLeft && (playerBottom >= collsionTop && playerBottom <= collsionBottom || playerTop  <= collsionBottom && playerTop  >= collsionTop))
            {
                blockingKey[0] = 68;
                blockingKey[1] = enemies[i];
            }
            else if(keyCode == 87 && playerTop-1 == collsionBottom && (playerLeft >= collsionLeft && playerLeft <= collsionRight || playerRight >= collsionLeft && playerRight <= collsionRight))
            {
                // Richtung Key wird returnt und von movement.js geblockt.
                blockingKey[0] = 87;
                blockingKey[1] = enemies[i];
            }
            // Obere Wand des Objekts
            else if(keyCode == 83 && playerBottom+1 == collsionTop && (playerLeft >= collsionLeft && playerLeft<= collsionRight || playerRight >= collsionLeft && playerRight <= collsionRight))
            {
                // Richtung Key wird returnt und von movement.js geblockt.
                blockingKey[0] = 83;
                blockingKey[1] = enemies[i];
            }
        }
        if(blockingKey[0] == 0 && blockingKey[1] == 0)
        {
            for(var i = 0; i < friendlyObjects.length; i++)
            {
                foData = friendlyObjects[i].getBoundingClientRect();
                // Konvertiere Informationen in tatsächliche ints 
                var collsionLeft = parseInt(foData.left);
                var collsionRight = parseInt(foData.right);
                var collsionTop = parseInt(foData.top);
                var collsionBottom = parseInt(foData.bottom);
                if(checkIfValidFriendlyObject(getFriendlyObjectClass(friendlyObjects[i])) == true)
                {
                    if(getFriendlyObjectClass(friendlyObjects[i]) == "gap")
                    {
                        if(keyCode == 65 && playerLeft-1 == collsionRight && (playerBottom >= collsionTop && playerBottom <= collsionBottom || playerTop <= collsionBottom && playerTop  >= collsionTop))
                        {
                            // Richtung Key wird returnt und von movement.js geblockt.
                            blockingKey[0] = 65;
                            events.onEnterTrap();
                        }
                        // Linke Wand des Objekts
                        else if(keyCode == 68 && playerRight+1 == collsionLeft && (playerBottom >= collsionTop && playerBottom <= collsionBottom || playerTop  <= collsionBottom && playerTop  >= collsionTop))
                        {
                            // Richtung Key wird returnt und von movement.js geblockt.
                            blockingKey[0] = 68;
                            events.onEnterTrap();
                        }
                        // Untere Wand des Objekts
                        else if(keyCode == 87 && playerTop-1 == collsionBottom && (playerLeft >= collsionLeft && playerLeft <= collsionRight || playerRight >= collsionLeft && playerRight <= collsionRight))
                        {
                            // Richtung Key wird returnt und von movement.js geblockt.
                            blockingKey[0] = 87;
                            events.onEnterTrap();
                        }
                        // Obere Wand des Objekts
                        else if(keyCode == 83 && playerBottom+1 == collsionTop && (playerLeft >= collsionLeft && playerLeft<= collsionRight || playerRight >= collsionLeft && playerRight <= collsionRight))
                        {
                            // Richtung Key wird returnt und von movement.js geblockt.
                            blockingKey[0] = 83;
                            events.onEnterTrap();
                        }
                    }
                    else if(getFriendlyObjectClass(friendlyObjects[i]) == "exit")
                    {
                        if(keyCode == 65 && playerLeft-1 == collsionRight && (playerBottom >= collsionTop && playerBottom <= collsionBottom || playerTop <= collsionBottom && playerTop  >= collsionTop))
                        {
                            // Richtung Key wird returnt und von movement.js geblockt.
                            blockingKey[0] = 65;
                            events.onEnterStairs();
                        }
                        // Linke Wand des Objekts
                        else if(keyCode == 68 && playerRight+1 == collsionLeft && (playerBottom >= collsionTop && playerBottom <= collsionBottom || playerTop  <= collsionBottom && playerTop  >= collsionTop))
                        {
                            // Richtung Key wird returnt und von movement.js geblockt.
                            blockingKey[0] = 68;
                            events.onEnterStairs();
                        }
                        // Untere Wand des Objekts
                        else if(keyCode == 87 && playerTop-1 == collsionBottom && (playerLeft >= collsionLeft && playerLeft <= collsionRight || playerRight >= collsionLeft && playerRight <= collsionRight))
                        {
                            // Richtung Key wird returnt und von movement.js geblockt.
                            blockingKey[0] = 87;
                            events.onEnterStairs();
                        }
                        // Obere Wand des Objekts
                        else if(keyCode == 83 && playerBottom+1 == collsionTop && (playerLeft >= collsionLeft && playerLeft<= collsionRight || playerRight >= collsionLeft && playerRight <= collsionRight))
                        {
                            // Richtung Key wird returnt und von movement.js geblockt.
                            blockingKey[0] = 83;
                            events.onEnterStairs();
                        }
                    }
                    else if(getFriendlyObjectClass(friendlyObjects[i]) == "chest")
                    {
                        if(playerLeft-1 == collsionRight && (playerBottom >= collsionTop && playerBottom <= collsionBottom || playerTop <= collsionBottom && playerTop  >= collsionTop))
                        {
                            // Richtung Key wird returnt und von movement.js geblockt.
                            blockingKey[0] = 65;
                            blockingKey[1] = friendlyObjects[i];
                        }
                        // Linke Wand des Objekts
                        else if(playerRight+1 == collsionLeft && (playerBottom >= collsionTop && playerBottom <= collsionBottom || playerTop  <= collsionBottom && playerTop  >= collsionTop))
                        {
                            // Richtung Key wird returnt und von movement.js geblockt.
                            blockingKey[0] = 68;
                            blockingKey[1] = friendlyObjects[i];
                        }
                        // Untere Wand des Objekts
                        else if(playerTop-1 == collsionBottom && (playerLeft >= collsionLeft && playerLeft <= collsionRight || playerRight >= collsionLeft && playerRight <= collsionRight))
                        {
                            // Richtung Key wird returnt und von movement.js geblockt.
                            blockingKey[0] = 87;
                            blockingKey[1] = friendlyObjects[i];
                        }
                        // Obere Wand des Objekts
                        else if(playerBottom+1 == collsionTop && (playerLeft >= collsionLeft && playerLeft<= collsionRight || playerRight >= collsionLeft && playerRight <= collsionRight))
                        {
                            // Richtung Key wird returnt und von movement.js geblockt.
                            blockingKey[0] = 83;
                            blockingKey[1] = friendlyObjects[i];
                        }
                    }
                    else if(getFriendlyObjectClass(friendlyObjects[i]) == "door")
                    {
                        if(playerLeft-1 == collsionRight && (playerBottom >= collsionTop && playerBottom <= collsionBottom || playerTop <= collsionBottom && playerTop  >= collsionTop))
                        {
                            // Richtung Key wird returnt und von movement.js geblockt.
                            blockingKey[0] = 65;
                            blockingKey[1] = friendlyObjects[i];
                        }
                        // Linke Wand des Objekts
                        else if(playerRight+1 == collsionLeft && (playerBottom >= collsionTop && playerBottom <= collsionBottom || playerTop  <= collsionBottom && playerTop  >= collsionTop))
                        {
                            // Richtung Key wird returnt und von movement.js geblockt.
                            blockingKey[0] = 68;
                            blockingKey[1] = friendlyObjects[i];
                        }
                        // Untere Wand des Objekts
                        else if(playerTop-1 == collsionBottom && (playerLeft >= collsionLeft && playerLeft <= collsionRight || playerRight >= collsionLeft && playerRight <= collsionRight))
                        {
                            // Richtung Key wird returnt und von movement.js geblockt.
                            blockingKey[0] = 87;
                            blockingKey[1] = friendlyObjects[i];
                        }
                        // Obere Wand des Objekts
                        else if(playerBottom+1 == collsionTop && (playerLeft >= collsionLeft && playerLeft<= collsionRight || playerRight >= collsionLeft && playerRight <= collsionRight))
                        {
                            // Richtung Key wird returnt und von movement.js geblockt.
                            blockingKey[0] = 83;
                            blockingKey[1] = friendlyObjects[i];
                        }
                    }
                    else if(getFriendlyObjectClass(friendlyObjects[i]) == "specialChest")
                    {
                        if(playerLeft-1 == collsionRight && (playerBottom >= collsionTop && playerBottom <= collsionBottom || playerTop <= collsionBottom && playerTop  >= collsionTop))
                        {
                            // Richtung Key wird returnt und von movement.js geblockt.
                            blockingKey[0] = 65;
                            blockingKey[1] = friendlyObjects[i];
                        }
                        // Linke Wand des Objekts
                        else if(playerRight+1 == collsionLeft && (playerBottom >= collsionTop && playerBottom <= collsionBottom || playerTop  <= collsionBottom && playerTop  >= collsionTop))
                        {
                            // Richtung Key wird returnt und von movement.js geblockt.
                            blockingKey[0] = 68;
                            blockingKey[1] = friendlyObjects[i];
                        }
                        // Untere Wand des Objekts
                        else if(playerTop-1 == collsionBottom && (playerLeft >= collsionLeft && playerLeft <= collsionRight || playerRight >= collsionLeft && playerRight <= collsionRight))
                        {
                            // Richtung Key wird returnt und von movement.js geblockt.
                            blockingKey[0] = 87;
                            blockingKey[1] = friendlyObjects[i];
                        }
                        // Obere Wand des Objekts
                        else if(playerBottom+1 == collsionTop && (playerLeft >= collsionLeft && playerLeft<= collsionRight || playerRight >= collsionLeft && playerRight <= collsionRight))
                        {
                            // Richtung Key wird returnt und von movement.js geblockt.
                            blockingKey[0] = 83;
                            blockingKey[1] = friendlyObjects[i];
                        }
                    }
                }
            }
        }
        return blockingKey;
    }
    playerCollsion(keyCode)
    {
        // Erhalte Informationen über top, bottom, right and left Koordinaten des Spielers.
        var playerCollsion = player.getPlayerSides();
        // Ziehe jedes Elements von Klasse "object" aus HTML Dokument
        var elements = wall.getWallElements();

        // Variablen zur Initialisierung
        var blockingKey = 0;
        var i = 0;
        var collisionData = 0;
        var playerTop = parseInt(playerCollsion.top);
        var playerBottom = parseInt(playerCollsion.bottom);
        var playerLeft = parseInt(playerCollsion.left);
        var playerRight = parseInt(playerCollsion.right);
        // Loope durch jedes Element von Klasse "object" -> Array
        for(i = 0; i < elements.length; i++)
        {
            // Erhalte Informationen über top, bottom, right and left Koordinaten von Objekt
            collisionData = elements[i].getBoundingClientRect();

            // Konvertiere Informationen in tatsächliche ints 
            var collsionLeft = parseInt(collisionData.left);

            var collsionRight = parseInt(collisionData.right);

            var collsionTop = parseInt(collisionData.top);

            var collsionBottom = parseInt(collisionData.bottom);
            // ÜBERPRÜFUNGEN SIND FOLGEND AUFGEBAUT:
            
            // Rechte Wand des Objekts
            if(keyCode == 65 && playerLeft-1 == collsionRight && (playerBottom >= collsionTop && playerBottom <= collsionBottom || playerTop <= collsionBottom && playerTop  >= collsionTop))
            {
                // Richtung Key wird returnt und von movement.js geblockt.
                blockingKey = 65;
                console.log("hit")
            }
            // Linke Wand des Objekts
            else if(keyCode == 68 && playerRight+1 == collsionLeft && (playerBottom >= collsionTop && playerBottom <= collsionBottom || playerTop  <= collsionBottom && playerTop  >= collsionTop))
            {
                // Richtung Key wird returnt und von movement.js geblockt.
                blockingKey = 68;
                console.log("hit")
            }
            // Untere Wand des Objekts
            else if(keyCode == 87 && playerTop-1 == collsionBottom && (playerLeft >= collsionLeft && playerLeft <= collsionRight || playerRight >= collsionLeft && playerRight <= collsionRight))
            {
                // Richtung Key wird returnt und von movement.js geblockt.
                blockingKey = 87;
                console.log("hit")
            }
            // Obere Wand des Objekts
            else if(keyCode == 83 && playerBottom+1 == collsionTop && (playerLeft >= collsionLeft && playerLeft<= collsionRight || playerRight >= collsionLeft && playerRight <= collsionRight))
            {
                // Richtung Key wird returnt und von movement.js geblockt.
                blockingKey = 83;
                console.log("hit")
            }
            
        }
        // Kollision Key sonst 0
        return blockingKey;
    }
}