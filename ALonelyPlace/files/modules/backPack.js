export class backPack
{
    toggled = false;
    constructor()
    {}
    toggleBackPackMenu()
    {

        if(this.toggled == false)
        {
            this.toggled = true;
        }
        else if(this.toggled == true)
        {
            this.toggled = false;
        }
    }
}