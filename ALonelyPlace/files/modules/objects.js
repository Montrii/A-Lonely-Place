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
    {}
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