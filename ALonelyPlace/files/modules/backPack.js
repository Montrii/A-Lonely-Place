import { translateRareityLevelToClass } from "./utilities.js";

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
            const items = String(userData).split(';');
            $('body').append('<div class="inventory-table"><div class="inventory-row"></div></div>');
            for(var i = 0; i < items.length/2; i++)
            {
                if(items[i] != 0)
                {
                    if(items[i] >= 1 && items[i] <= 5) // WEAPONS
                    {
                        var rareity = translateRareityLevelToClass(items[i+5]); 
                        $('.inventory-row').append(`<div class="inventory-cell"><div class= "item sword ${rareity}">${items[i]};${i};${rareity}</div></div>`);
                    }
                    else if(items[i] >= 6 && items[i] <= 10) // SHIELDS
                    {
                        var rareity = translateRareityLevelToClass(items[i+5]); 
                        $('.inventory-row').append(`<div class="inventory-cell"><div class= "item armor ${rareity}">${items[i]};${i};${rareity}</div></div>`);
                    }
                }
            }
            var allItems = document.querySelector('.item');
            console.log(allItems);
            document.querySelector('.inventory-row').style.visibility = "visible";
        }
        else if(this.toggled == true)
        {
            console.log(userData);
            this.toggled = false;
            document.querySelector('.inventory-row').remove();
        }
    }
}