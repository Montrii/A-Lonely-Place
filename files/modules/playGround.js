export class Playground
{
    constructor()
    {}
    getPlayGroundObject()
    {
        return document.getElementById("playground");
    }
    getPlayGroundClientHeight()
    {
        return document.getElementById("playground").clientHeight;
    }
    getPlayGroundClientWidth()
    {
        return document.getElementById("playground").clientWidth;
    }
    getPlayGroundOffsetHeight()
    {
        return document.getElementById("playground").offsetHeight;
    }
    getPlayGroundOffsetWidth()
    {
        return document.getElementById("playground").offsetWidth;
    }
    getPlayGroundOffsetTop()
    {
        return document.getElementById("playground").offsetTop;
    }
    getPlayGroundOffsetLeft()
    {
        return document.getElementById("playground").offsetLeft;
    }
    getPlayGroundSides()
    {
        return document.getElementById("playground").getBoundingClientRect();
    }
}