import {Ground} from "./objects.js";


var ground = new Ground();
export async function generateWalls()
{
    var detected, browserName = detectBrowser();
    if(mobileDetection().any())
    {
        alert("You have been detected as mobile user with the browser: " + browserName);
        alert("The game is not available for mobile users any time soon!");
    }
    else 
    {
        console.log("Browser detected: "+ browserName);
        fixBrokenSizes();
        var coords = ground.getGroundSides();
        var width = ground.getGroundClientWidth();
        var height = ground.getGroundClientHeight();
        var widthPosition = coords.left;
        var heightPosition = coords.top;
        while(width - 32 >= 0)
        {
            // BOTTOM WALL
            $('body').append(`<div class="object" style="top:${coords.bottom-32}px;left:${widthPosition}px"></div>`);
            await Sleep(20);
            // TOP WALL
            $('body').append(`<div class="object" style="top:${coords.top}px;left:${widthPosition}px"></div>`);
            await Sleep(20);
            widthPosition = widthPosition + 32;
            width = width - 32;
        }
        while(height - 32 >= 0)
        {
           
             // RIGHT WALL
            $('body').append(`<div class="object" style="top:${heightPosition}px;left:${coords.right-32}px"></div>`);
            await Sleep(20);
            // LEFT WALL
            $('body').append(`<div class="object" style="top:${heightPosition}px;left:${coords.left}px"></div>`);
            await Sleep(20);
            heightPosition = heightPosition + 32;
            height = height - 32;
        }
        
        console.log("successfully loaded barriers!");
    }
}

function fixBrokenSizes()
{
    var width = ground.getGroundClientWidth();
    var height = ground.getGroundClientHeight();
    ground.getGroundObject().style.height = 32 * Math.round(height/32)+"px";
    ground.getGroundObject().style.width =  32 * Math.round(width/32)+"px";
}


function Sleep(milliseconds)
{
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}


function mobileDetection()
{
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    return isMobile;
}
function detectBrowser()
{ 
    if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) 
    {
        return true,"Opera";
    }
    else if(navigator.userAgent.indexOf("Edg") != -1 )
    {
        return true,"Edge";
    }
    else if(navigator.userAgent.indexOf("Chrome") != -1 )
    {
        return true,"Chrome";
    }
    else if(navigator.userAgent.indexOf("Safari") != -1)
    {
        return true,"Safari";
    }
    else if(navigator.userAgent.indexOf("Firefox") != -1 ) 
    {
            return true,"Firefox";
    }
    else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
    {
        return true,"IE";
    }  
    else 
    {
        return false,"null";
    }
}