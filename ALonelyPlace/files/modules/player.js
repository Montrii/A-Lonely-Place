export class Player
{
    audio = 0;
    constructor()
    {

    }
    createPlayerWalkSound()
    {
        this.audio = new Audio('../../../Assets/sounds/skel_walk.wav');
    }
    playPlayerWalkSound()
    {
        if(this.audio.duration > 0 && !this.audio.paused)
        {
            this.audio.stop();
            this.audio.play();
            console.log("played walk sound");
        }
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