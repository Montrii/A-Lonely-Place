export class Events
{
    constructor()
    {
    }
    onMapLoaded(player, movement, animator)
    {
        console.log("MAP FINISHED LOADING! ");
        player.syncPlayer();
        movement.playerMovement();
        animator.playerPlayAnimation();
    }
    onMapFailed(reason)
    {
        console.log("Map failed to load.");
        alert(reason);
    }
    onCollsionGapObject()
    {
        console.log("hit gap object");
    }
    onChestOpened(itemCount, itemGenerator)
    {
        // Once Chest is opened, generate content
        var item_ID = itemGenerator.determineItem(itemCount);
        var rareity = itemGenerator.defineRareityLevel();
        return itemGenerator.buildItem(item_ID, rareity);
    }
    onDoorOpened()
    {

    }
    onPlayerHit()
    {

    }
    onMonsterHit(enemy)
    {

    }
    onEnterTrap()
    {

    }
}