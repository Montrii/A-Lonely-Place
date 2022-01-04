export class Ground
{
    constructor()
    {}
    getGroundObject()
    {
        return document.getElementById("ground");
    }
    getGroundClientHeight()
    {
        return document.getElementById("ground").clientHeight;
    }
    getGroundClientWidth()
    {
        return document.getElementById("ground").clientWidth;
    }
    getGroundOffsetHeight()
    {
        return document.getElementById("ground").offsetHeight;
    }
    getGroundOffsetWidth()
    {
        return document.getElementById("ground").offsetWidth;
    }
    getGroundOffsetTop()
    {
        return document.getElementById("ground").offsetTop;
    }
    getGroundOffsetLeft()
    {
        return document.getElementById("ground").offsetLeft;
    }
    getGroundSides()
    {
        return document.getElementById("ground").getBoundingClientRect();
    }
}

export class Wall
{
    constructor()
    {}
    getWallElements()
    {
        return document.querySelectorAll(".object");
    }
}

export class Player
{
    constructor()
    {

    }
    getPlayerObject()
    {
        return document.getElementById("player");
    }
    getPlayerImage()
    {
        return document.getElementById("playerImage");
    }
    getPlayerSides()
    {
        return this.getPlayerObject().getBoundingClientRect();
    }
    getPlayerOffSetTop()
    {
        return this.getPlayerObject().offsetTop;
    }
    getPlayerOffSetLeft()
    {
        return this.getPlayerObject().offsetLeft;
    }
    getPlayerClientTop()
    {
        return this.getPlayerObject().clientTop;
    }
    getPlayerClientLeft()
    {
        return this.getPlayerObject().clientLeft;
    }
    addToTopPosition(value)
    {
        this.getPlayerObject().style.top = value+'px';
    }
    addToLeftPosition(value)
    {
        this.getPlayerObject().style.left = value+'px';
    }
    syncPlayer()
    {
        this.getPlayerObject().style.height = this.getPlayerImage().offsetHeight+'px';
        this.getPlayerObject().style.width = this.getPlayerImage().offsetWidth+'px';
    }
}
export class Collsion
{
    constructor()
    {

    }
    playerCollsion(keyCode)
    {
        // Erhalte Informationen über top, bottom, right and left Koordinaten des Spielers.
        var wall = new Wall();
        var player = new Player();
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

export class Movement
{
    constructor()
    {

    }
    playerMovement()
    {
        var player = new Player();
        var collsion = new Collsion();
        var position = 0;
        $(document).keydown(function() {
            var keyDown = event.keyCode;
            player.getPlayerObject().scrollIntoView();
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
export class Animator
{
    constructor()
    {

    }
    playerAnimation()
    {
        var player = new Player();
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
}

export class MapHandler
{
    constructor()
    {

    }
    async loadMap(map)
    {
        var oReq = new XMLHttpRequest(); // New request object
        oReq.onload = async function() {
            var lines = this.responseText.split("\n"); 
            // Each Line
            var contains = {height: 0, width: 0, top: 0, left: 0, matchingRows: 0};
            // Reading and removing Height, Top, Left and Width.
            for(var i = 0; i < lines.length; i++)
            {
                var block = lines[i].split(",");
                // Position of Map
                if(stringContainsNumber(lines[i]) && lines[i].includes("Top: ", 0))
                {
                    contains.top = parseInt(lines[i].substring(5, lines[i].length));
                    delete lines[i];
                }
                if(stringContainsNumber(lines[i]) && lines[i].includes("Left: ", 0))
                {
                    contains.left = parseInt(lines[i].substring(6, lines[i].length));
                    delete lines[i];
                }
                if(stringContainsNumber(lines[i]) && lines[i].includes("Height: ", 0))
                {
                    contains.height = parseInt(lines[i].substring(8, lines[i].length));
                    delete lines[i];
                }
                if(stringContainsNumber(lines[i]) && lines[i].includes("Width: ", 0))
                {
                    contains.width = parseInt(lines[i].substring(7, lines[i].length));
                    delete lines[i];
                }
            }
            if(contains.height != 0 && contains.width != 0)
            {
                var content;
                var nonNullLines = 0;
                var matchingWidth = 0;
                var isBroken = false;
                var elements = 0;
                contains.height = 32 * Math.round(contains.height/32);
                contains.width = 32 * Math.round(contains.width/32);
                for(i = 0; i < lines.length; i++)
                {
                    if(lines[i] != null)
                    {
                        nonNullLines++;
                        content = lines[i].split(',');
                        elements = elements + content.length;
                        if(contains.width / content.length < 32)
                        {
                            isBroken = true;
                        }
                    }
                    else 
                    {
                        lines.splice(i, 4);
                    }

                }
                if(contains.height / nonNullLines < 32)
                {
                    alert("Unable to load map"+map+".txt due to broken map-layout! You exceeded over your playground (Height)!");
                    return false;
                }
                if(isBroken == true)
                {
                    alert("Unable to load map"+map+".txt due to broken map-layout! You exceeded over your playground (Width)!");
                    return false;
                }
                // Generating Playground
                $('body').append(`<div id="playground" style="height:${contains.height}px;width:${contains.width}px;top:${contains.top}px;left:${contains.left}px"></div>`);
                // each line
                var top = 0;
                var left = 0;
                var y = 0;
                var precentage = 0;
                var precentageToAdd = 100 / elements;
                for(i = 0; i < lines.length; i++)
                {
                    var blocks = lines[i].split(",");
                    // each block
                    while(y != blocks.length)
                    {
                        if(blocks[y] == "X" || blocks[y] == "x")
                        {
                            $('#playground').append(`<div class="object" style="top:${top}px;left:${left}px"></div>`);
                            precentage = precentage + precentageToAdd;
                            await Sleep(20);
                        }
                        else if (blocks[y] == "O" || blocks[y] == "o")
                        {
                            $('#playground').append(`<div class="ground" style="top:${top}px;left:${left}px;"></div>`);
                            precentage = precentage + precentageToAdd;
                            await Sleep(20);
                        }
                        else if (blocks[y] == "_")
                        {

                            $('#playground').append(`<div class="ground" style="top:${top}px;left:${left}px;"></div>`);
                            $('#playground').append(`<div class="gap" style="top:${top}px;left:${left}px;"></div>`);
                            precentage = precentage + precentageToAdd;
                            await Sleep(20);
                        }
                        else if (blocks[y] == "P" || blocks[y] == "p")
                        {
                            $('#playground').append(`<div class="playerspawn" style="top:${top}px;left:${left}px;"></div>`);
                            document.getElementById("player").style.top = top+contains.top+32+"px";
                            document.getElementById("player").style.left = left+contains.left+"px";
                            precentage = precentage + precentageToAdd;
                            await Sleep(20);
                        }
                        else if (blocks[y] == "D" || blocks[y] == "d")
                        {
                            $('#playground').append(`<div class="door" style="top:${top}px;left:${left}px;"></div>`);
                            precentage = precentage + precentageToAdd;
                            await Sleep(20);
                        }
                        else if (blocks[y] == "E" || blocks[y] == "e")
                        {
                            $('#playground').append(`<div class="exit" style="top:${top}px;left:${left}px;"></div>`);
                            precentage = precentage + precentageToAdd;
                            await Sleep(20);
                        }
                        else if (blocks[y] == "C" || blocks[y] == "c")
                        {
                            $('#playground').append(`<div class="ground" style="top:${top}px;left:${left}px;"></div>`);
                            $('#playground').append(`<div class="chest" style="top:${top}px;left:${left}px;"></div>`);
                            precentage = precentage + precentageToAdd;
                            await Sleep(20);
                        }
                        if(precentage >= 100)
                        {
                            precentage = 100;
                        }
                        document.getElementById("progress").style.width = precentage+"%";
                        left = left + 32;
                        y++;
                    }
                    $('#playground').append(`<div class="object" style="top:${top}px;left:${left-32}px"></div>`);
                    top = top + 32;
                    left = 0;
                    y = 0;

                }
                document.getElementById("progressbar").style.display = "none";
                console.log("yo");
                return true;
            }
            else 
            {
                alert("Unable to load map"+map+".txt due to damaged File! Missing Height/Width Defintion!");
                return false;
            }
        };
        oReq.open("get", "./files/maps/map"+map+".txt", true);
        //                               ^ Don't block the rest of the execution.
        //                                 Don't wait until the request finishes to
        //                                 continue.
        oReq.send();
    }
}


function stringContainsNumber(_string)
{
    return /\d/.test(_string);
}


function Sleep(milliseconds)
{
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}
