import { translateRareityLevelToClass, getSlotFromItem, getRareityFromItem, getItemIDFromItem } from "./utilities.js";

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
            var allItems = document.querySelectorAll('.item');
            for(var i = 0; i < allItems.length; i++)
            {
                allItems[i].addEventListener("mouseenter", function(event)
                {
                    $('body').append(`<div class="infoText ${getSlotFromItem(this.innerHTML)}" style="position:absolute;width:200px;height:200px;top:${event.clientY}px;left:${event.clientX}px;"></div>`);
                });
                allItems[i].addEventListener("mouseover", function(event)
                {
                    if(document.querySelector(`.infoText ${getSlotFromItem(this.innerHTML)}`))
                    {
                        document.querySelector(`.infoText ${getSlotFromItem(this.innerHTML)}`).remove();
                    }
                })
            }
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