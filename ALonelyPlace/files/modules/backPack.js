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
                        $('.inventory-row').append('<div class="inventory-cell"><div class= "item sword ' +rareity+ '">' + items[i] + '</div></div>');
                    }
                    else if(items[i] >= 6 && items[i] <= 10) // SHIELDS
                    {
                        var rareity = translateRareityLevelToClass(items[i+5]); 
                        $('.inventory-row').append('<div class="inventory-cell"><div class= "item armor ' +rareity+ '">' + items[i] + '</div></div>');
                    }
                }
            }
            alert("HI");
            var itemsInInventory = document.querySelectorAll('.item');
            for(var i = 0; i < itemsInInventory.length; i++)
            {
                var item_id = itemsInInventory[i].innerHTML;
                itemsInInventory[i].addEventListener("mouseenter", function(event)
                {
                    console.log(item_id);
                    console.log(event.clientX);
                    console.log(event.clientY);
                    $('body').append('<div style="position: absolute;background-color:white;width:200px;height:200px;top:' + event.clientY + 'px;left:' + event.clientY + "px;" + ">");
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