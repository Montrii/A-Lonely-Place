export class Movement
{
    player = 0;
    collsionObject = 0;
    constructor(playerObject, collsionObject)
    {
        this.player = playerObject;
        this.collsion = collsionObject;
    }
    playerMovement()
    {
        var position = 0;
        this.player.createPlayerWalkSound();
        $(document).keydown(function() {
            var keyDown = event.keyCode;
            this.player.getPlayerObject().scrollIntoView();
            this.collsion.friendlyPlayerCollsion(keyDown);
            if(event.keyCode == 87 /*W*/ && event.keyCode != this.collsion.playerCollsion(keyDown))
            {
                position = this.player.getPlayerOffSetTop() - 10;
                //PLAYER_OBJECT.style.top = position + "px";
                this.player.addToTopPosition(position);
                this.player.playPlayerWalkSound();
            }
            else if(event.keyCode == 83 /*S*/&& event.keyCode != this.collsion.playerCollsion(keyDown))
            {
                position = this.player.getPlayerOffSetTop() - 6;
                this.player.addToTopPosition(position);
                this.player.playPlayerWalkSound();
            }
            else if(event.keyCode == 68 /*D*/&& event.keyCode != this.collsion.playerCollsion(keyDown))
            {
                position = this.player.getPlayerOffSetLeft() - 6;
                this.player.addToLeftPosition(position);
                this.player.playPlayerWalkSound();
            }
            else if(event.keyCode == 65 /*A*/&& event.keyCode != this.collsion.playerCollsion(keyDown))
            {
                position = this.player.getPlayerOffSetLeft() - 10;
                this.player.addToLeftPosition(position);
                this.player.playPlayerWalkSound();
            }
        });
    }
}