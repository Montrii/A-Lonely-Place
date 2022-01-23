export class backPack
{
    toggled = false;
    constructor()
    {}
    toggleBackPackMenu(userData)
    {

        if(this.toggled == false)
        {
            this.toggled = true;
            console.log(userData);
            //$('#body').append('<div class="inventory-table"><div class="inventory-row"><div class="inventory-cell"></div><div class="inventory-cell"></div><div class="inventory-cell"></div><div class="inventory-cell"></div><div class="inventory-cell"></div></div></div>');
        }
        else if(this.toggled == true)
        {
            console.log(userData);
            this.toggled = false;
        }
    }
}