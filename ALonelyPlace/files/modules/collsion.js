import { getFriendlyObjectClass, checkIfValidFriendlyObject } from "./utilities.js";
import { Player } from "./player.js";
import { FriendlyObject } from "./friendlyObject.js";
import { Wall } from "./wall.js";
import { Events } from "./event.js";
import { Playground } from "./playGround.js";

var wall = new Wall();
var player = new Player();
var friendlyObject = new FriendlyObject();
var playGround = new Playground();
export class Collsion
{
    constructor()
    {

    }
    friendlyPlayerCollsion(keyCode)
    {
        var events = new Events();
        var blockingKey = 0;
        var playerCollsion = player.getPlayerSides();
        var friendlyObjects = friendlyObject.getFriendlyObjects();
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
                    if(keyCode == 65 && playerLeft+15 <= collsionRight && (playerBottom-15 >= collsionTop && playerBottom <= collsionBottom || playerTop+32 <= collsionBottom && playerTop  >= collsionTop))
                    {
                        // Richtung Key wird returnt und von movement.js geblockt.
                        blockingKey = 65;
                        events.onEnterTrap();
                    }
                    else if(keyCode == 68 && playerRight-15 >= collsionLeft && (playerBottom-15 >= collsionTop && playerBottom <= collsionBottom || playerTop+32  <= collsionBottom && playerTop  >= collsionTop))
                    {
                        // Richtung Key wird returnt und von movement.js geblockt.
                        blockingKey = 68;
                        events.onEnterTrap();
                    }
                    // Untere Wand des Objekts
                    else if(keyCode == 87 && playerTop+32 <= collsionBottom && (playerLeft >= collsionLeft && playerLeft+15 <= collsionRight || playerRight-15 >= collsionLeft && playerRight <= collsionRight))
                    {
                        // Richtung Key wird returnt und von movement.js geblockt.
                        blockingKey = 87;
                        events.onEnterTrap();
                    }
                    // Obere Wand des Objekts
                    else if(keyCode == 83 && playerBottom-15 >= collsionTop && (playerLeft >= collsionLeft && playerLeft+15<= collsionRight || playerRight-15 >= collsionLeft && playerRight <= collsionRight))
                    {
                        // Richtung Key wird returnt und von movement.js geblockt.
                        blockingKey = 83;
                        events.onEnterTrap();
                    }
                }
                else if(getFriendlyObjectClass(friendlyObjects[i]) == "chest")
                {
                    if(keyCode == 65 && playerLeft+15 <= collsionRight && (playerBottom-15 >= collsionTop && playerBottom <= collsionBottom || playerTop+32 <= collsionBottom && playerTop  >= collsionTop))
                    {
                        // Richtung Key wird returnt und von movement.js geblockt.
                        blockingKey = 65;
                        events.onEnterTrap();
                    }
                    else if(keyCode == 68 && playerRight-15 >= collsionLeft && (playerBottom-15 >= collsionTop && playerBottom <= collsionBottom || playerTop+32  <= collsionBottom && playerTop  >= collsionTop))
                    {
                        // Richtung Key wird returnt und von movement.js geblockt.
                        blockingKey = 68;
                        events.onEnterTrap();
                    }
                    // Untere Wand des Objekts
                    else if(keyCode == 87 && playerTop+32 <= collsionBottom && (playerLeft >= collsionLeft && playerLeft+15 <= collsionRight || playerRight-15 >= collsionLeft && playerRight <= collsionRight))
                    {
                        // Richtung Key wird returnt und von movement.js geblockt.
                        blockingKey = 87;
                        events.onEnterTrap();
                    }
                    // Obere Wand des Objekts
                    else if(keyCode == 83 && playerBottom-15 >= collsionTop && (playerLeft >= collsionLeft && playerLeft+15<= collsionRight || playerRight-15 >= collsionLeft && playerRight <= collsionRight))
                    {
                        // Richtung Key wird returnt und von movement.js geblockt.
                        blockingKey = 83;
                        events.onEnterTrap();
                    }
                }
                else if(getFriendlyObjectClass(friendlyObjects[i]) == "exit")
                {
                }
                else if(getFriendlyObjectClass(friendlyObjects[i]) == "playerspawn")
                {
                }
                else if(getFriendlyObjectClass(friendlyObjects[i]) == "door")
                {
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