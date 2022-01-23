export function mobileDetection()
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
export function getFriendlyObjectClass(friendlyObject)
{
    const text = friendlyObject.className;
    var split = text.split(" ");
    if(split[0] == "" || split[0] == " " || split[0] == null || split[0] == typeof(undefined))
    {
        return "null";
    }
    return split[0];
}

export function checkIfValidFriendlyObject(friendlyObject) 
{
    if(friendlyObject != "null")
    {
        return true;
    }
    return false;
}
export function detectBrowser()
{ 
    if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) 
    {
        return "Opera";
    }
    else if(navigator.userAgent.indexOf("Edg") != -1 )
    {
        return "Edge";
    }
    else if(navigator.userAgent.indexOf("Chrome") != -1 )
    {
        return "Chrome";
    }
    else if(navigator.userAgent.indexOf("Safari") != -1)
    {
        return "Safari";
    }
    else if(navigator.userAgent.indexOf("Firefox") != -1 ) 
    {
        return "Firefox";
    }
    else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
    {
        return "IE";
    }  
    else 
    {
        return "null";
    }
}

export function stringContainsNumber(_string)
{
    return /\d/.test(_string);
}


export function Sleep(milliseconds)
{
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

export function getRandomInt(max)
{
    return Math.floor(Math.random() * max);
}

export function translateRareityLevelToClass(rareity)
{
    if(rareity == 0)
    {
        return "common";
    }
    if(rareity == 1)
    {
        return "rare";
    }
    if(rareity == 2)
    {
        return "epic";
    }
    if(rareity == 3)
    {
        return "ultra";
    }
    if(rareity == 4)
    {
        return "legendary";
    }
}

export function getSlotFromItem(classList)
{
    var info = classList.split(";");
    return info[1];
}

export function getItemIDFromItem(classList)
{
    var info = classList.split(";");
    return info[0];
}

export function getRareityFromItem(classList)
{
    var info = classList.split(";");
    return info[2];
}

export function translateRareityToColor(classList)
{
    var info = classList.split(";");
    if(info[2] == "common")
    {
        return "rgb(160, 157, 157)";
    }
    if(info[2] == "rare")
    {
        return "#0070dd";
    }
    if(info[2] == "epic")
    {
        return "#a335ee";
    }
    if(info[2] == "ultra")
    {
        return "rgb(226, 7, 7)";
    }
    if(info[2] == "legendary")
    {
        return "#fca420";
    }
}


export function getTitleOfItem(innerHTML)
{
    var info = innerHTML.split(";");
    return info[3];
}

export function getDescriptionOfItem(innerHTML)
{
    var info = innerHTML.split(";");
    return info[4];
}

export function getEffectOfItem(innerHTML)
{
    var info = innerHTML.split(";");
    return info[5];
}
