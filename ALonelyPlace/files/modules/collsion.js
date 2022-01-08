import { Player, Wall } from "./objects.js";
var player = new Player();
var wall = new Wall();

// exportiert Methode, welche als Übergabeparameter den gedrückten Knopf nimmt (movement.js)
export default function playerCollsion(keyCode)
{
    // Erhalte Informationen über top, bottom, right and left Koordinaten des Spielers.
    var playerCollsion = player.getPlayerSides();
    // Ziehe jedes Elements von Klasse "object" aus HTML Dokument
    var elements = wall.getWallElements();

    // Variablen zur Initialisierung
    var blockingKey = 0;
    var i = 0;
    var collisionData = 0;

    // Loope durch jedes Element von Klasse "object" -> Array
    for(i = 0; i < elements.length; i++)
    {
        // Erhalte Informationen über top, bottom, right and left Koordinaten von Objekt
        collisionData = elements[i].getBoundingClientRect();

        // Konvertiere Informationen in tatsächliche ints 
        var playerRight = parseInt(playerCollsion.right);
        var collsionLeft = parseInt(collisionData.left);
        var playerLeft = parseInt(playerCollsion.left);
        var collsionRight = parseInt(collisionData.right);
        var playerBottom = parseInt(playerCollsion.bottom);
        var collsionTop = parseInt(collisionData.top);
        var playerTop = parseInt(playerCollsion.top);
        var collsionBottom = parseInt(collisionData.bottom);

        // ÜBERPRÜFUNGEN SIND FOLGEND AUFGEBAUT:
        // <gegenüberWandVonSpieler> == <WandVonObjekt> && (<andereAusrichtungWandVonSpieler1> >= <andereAusrichtungWandVonObjekt2> && <andereAusrichtungWandVonSpieler1> <= <andereAusrichtungWandVonObjekt1>
        // || <andereAusrichtungWandVonSpieler2> <= <andereAusrichtungWandVonObjekt1> && <andereAusrichtungWandVonSpieler2> >= <andereAusrichtungWandVonObjekt2> && <gedrückterKey> == Richtung)
        //                                                                                                                           DAMIT NICHT EINE KOLLISION ENTSTEHT WENN MAN AUS EINER KOMMT UND SICH WEGBEWEGT

        
        // Rechte Wand des Objekts
        if(playerLeft == collsionRight && (playerBottom-1 >= collsionTop && playerBottom-1 <= collsionBottom || playerTop+1 <= collsionBottom && playerTop+1  >= collsionTop) && keyCode == 65)
        {
            // Richtung Key wird returnt und von movement.js geblockt.
            blockingKey = 65;
            
        }
        // Linke Wand des Objekts
        else if(playerRight == collsionLeft && (playerBottom-1 >= collsionTop && playerBottom-1 <= collsionBottom || playerTop+1  <= collsionBottom && playerTop+1  >= collsionTop) && keyCode == 68)
        {
            // Richtung Key wird returnt und von movement.js geblockt.
            blockingKey = 68;
        }
        // Untere Wand des Objekts
        else if(playerTop == collsionBottom && (playerLeft+1 >= collsionLeft && playerLeft+1 <= collsionRight || playerRight-1 >= collsionLeft && playerRight-1 <= collsionRight) && keyCode == 87)
        {
            // Richtung Key wird returnt und von movement.js geblockt.
            blockingKey = 87;
        }
        // Obere Wand des Objekts
        else if(playerBottom == collsionTop && (playerLeft+1 >= collsionLeft && playerLeft+1<= collsionRight || playerRight-1 >= collsionLeft && playerRight-1 <= collsionRight) && keyCode == 83)
        {
            // Richtung Key wird returnt und von movement.js geblockt.
            blockingKey = 83;
        }
    }
    // Kollision Key sonst 0
    return blockingKey;
}