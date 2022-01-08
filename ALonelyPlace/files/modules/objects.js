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

