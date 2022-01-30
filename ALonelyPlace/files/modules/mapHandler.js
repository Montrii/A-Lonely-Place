import { Sleep, stringContainsNumber, detectBrowser, mobileDetection, getRandomInt } from "./utilities.js"; 
import { Events } from "./event.js";
import { Animator } from "./animator.js";
import { Enemy } from "./enemies.js";
import { Movement } from "./movement.js";




var callbacks = new Events(); 
var animation = new Animator();
var movement = new Movement();
export class MapHandler
{
    constructor()
    {
    }
    async loadMap(map)
    {
        var oReq = new XMLHttpRequest(); // New request object
        oReq.onload = async function() {
            
            console.log("Playing on Browser: " + detectBrowser());
            if(mobileDetection().any())
            {
                callbacks.onMapFailed("Mobile players aren't supported by 'A Lonely Place'");
                return;
            }
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
                    contains.top = contains.top + 110;
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
                    callbacks.onMapFailed("Unable to load map"+map+".txt due to broken map-layout! You exceeded over your playground (Height)!");
                    return;
                }
                if(isBroken == true)
                {
                    callbacks.onMapLoaded("Unable to load map"+map+".txt due to broken map-layout! You exceeded over your playground (Width)!");
                    return;
                }
                // Generating Playground
                $('body').append(`<div id="playground" style="height:${contains.height}px;width:${contains.width}px;top:${contains.top}px;left:${contains.left}px"></div>`);
                // each line
                var top = 0;
                var left = 0;
                var y = 0;
                var precentage = 0;
                var precentageToAdd = 100 / elements;
                var mobcounter = 0;
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
                            await Sleep(15)
                        }
                        else if (blocks[y] == "O" || blocks[y] == "o")
                        {
                            $('#playground').append(`<div class="ground" style="top:${top}px;left:${left}px;"></div>`);
                            precentage = precentage + precentageToAdd;
                            await Sleep(15)
                        }
                        else if (blocks[y] == "_")
                        {

                            $('#playground').append(`<div class="groundOnlyTexture" style="top:${top}px;left:${left}px;"></div>`);
                            $('#playground').append(`<div class="gap friendlyObject" style="top:${top}px;left:${left}px;"></div>`);
                            precentage = precentage + precentageToAdd;
                            await Sleep(15)
                        }
                        else if (blocks[y] == "P" || blocks[y] == "p")
                        {
                            $('#playground').append(`<div class="playerspawn friendlyObject" style="top:${top}px;left:${left}px;"></div>`);
                            document.getElementById("player").style.top = top+contains.top+36+"px";
                            document.getElementById("player").style.left = left+contains.left+"px";
                            precentage = precentage + precentageToAdd;
                            await Sleep(15)
                        }
                        else if (blocks[y] == "D" || blocks[y] == "d")
                        {
                            $('#playground').append(`<div class="door friendlyObject" style="top:${top}px;left:${left}px;"></div>`);
                            precentage = precentage + precentageToAdd;
                            await Sleep(15)
                        }
                        else if (blocks[y] == "E" || blocks[y] == "e")
                        {
                            $('#playground').append(`<div class="exit friendlyObject" style="top:${top}px;left:${left}px;"></div>`);
                            precentage = precentage + precentageToAdd;
                            await Sleep(15)
                        }
                        else if (blocks[y] == "C" || blocks[y] == "c")
                        {
                            $('#playground').append(`<div class="groundOnlyTexture" style="top:${top}px;left:${left}px;"></div>`);
                            $('#playground').append(`<div class="chest friendlyObject" style="top:${top}px;left:${left}px;"></div>`);
                            precentage = precentage + precentageToAdd;
                            await Sleep(15)
                        }
                        else if (blocks[y] == "SC" || blocks[y] == "sc")
                        {
                            $('#playground').append(`<div class="groundOnlyTexture" style="top:${top}px;left:${left}px;"></div>`);
                            $('#playground').append(`<div class="specialChest friendlyObject" style="top:${top}px;left:${left}px;"></div>`);
                            precentage = precentage + precentageToAdd;
                            await Sleep(15)
                        }
                        /* MONSTERS */
                        else if (blocks[y] == "MS" || blocks[y] == "MS") /* Monster: Skull */
                        {
                            $('#playground').append(`<div class="ground" style="top:${top}px;left:${left}px;"></div>`);
                            $('#playground').append(`<div class="mob monster${mobcounter} skull skullAnimation1" style="top:${top}px;left:${left}px;">2</div>`);
                            animation.skullPlayAnimation(document.querySelector(`.monster${mobcounter}`));
                            // Unfinished
                            movement.mobMovement(document.querySelector(`.monster${mobcounter}`), getRandomInt(300) + 100);
                            mobcounter = mobcounter + 1;
                            precentage = precentage + precentageToAdd;
                            await Sleep(15);
                        }
                        else if (blocks[y] == "MV" || blocks[y] == "MV") /* Monster: Vampire */
                        {
                            $('#playground').append(`<div class="ground" style="top:${top}px;left:${left}px;"></div>`);
                            $('#playground').append(`<div class="mob monster${mobcounter} vampire vampireAnimation1" style="top:${top}px;left:${left}px;">3</div>`);
                            animation.vampirePlayAnimation(document.querySelector(`.monster${mobcounter}`));
                            // Unfinished
                            movement.mobMovement(document.querySelector(`.monster${mobcounter}`), getRandomInt(300) + 100);
                            mobcounter = mobcounter + 1;
                            precentage = precentage + precentageToAdd;
                            await Sleep(15)
                        }
                        else if (blocks[y] == "MP" || blocks[y] == "MP") /* Monster: Priest */
                        {
                            $('#playground').append(`<div class="ground" style="top:${top}px;left:${left}px;"></div>`);
                            $('#playground').append(`<div class="mob monster${mobcounter} priest priestAnimation1" style="top:${top}px;left:${left}px;">5</div>`);
                            animation.priestPlayAnimation(document.querySelector(`.monster${mobcounter}`));
                            // Unfinished
                            movement.mobMovement(document.querySelector(`.monster${mobcounter}`), getRandomInt(300) + 100);
                            mobcounter = mobcounter + 1;
                            precentage = precentage + precentageToAdd;
                            await Sleep(15)
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
                document.getElementById("progressbar").remove();
                callbacks.onMapLoaded();
                return;
            }
            else 
            {
                callbacks.onMapFailed("Unable to load map"+map+".txt due to damaged File! Missing Height/Width Defintion!");
                return;
            }
        };
        oReq.open("get", "./files/maps/map"+map+".txt", true);
        //                               ^ Don't block the rest of the execution.
        //                                 Don't wait until the request finishes to
        //                                 continue.
        oReq.send();
    }
}


