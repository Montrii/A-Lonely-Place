import { translateRareityLevelToClass, getSlotFromItem, getTitleOfItem, getItemIDFromItem} from "./utilities.js";

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
            for(var i = 0; i < 5; i++)
            {
                if(items[i] != 0)
                {
                    if(items[i] >= 1 && items[i] <= 5) // WEAPONS
                    {
                        var rareity = translateRareityLevelToClass(items[i+5]); 
                        $('.inventory-row').append(`<div class="inventory-cell"><div class= "item sword ${rareity}">${items[i]};${i};${rareity};${items[i+10]};${items[i+15]}</div></div>`);
                    }
                    else if(items[i] >= 6 && items[i] <= 10) // SHIELDS
                    {
                        var rareity = translateRareityLevelToClass(items[i+5]); 
                        $('.inventory-row').append(`<div class="inventory-cell"><div class= "item armor ${rareity}">${items[i]};${i};${rareity};${items[i+10]};${items[i+15]}</div></div>`);
                    }
                }
            }
            var allItems = document.querySelectorAll('.item');
            for(var i = 0; i < allItems.length; i++)
            {
                allItems[i].addEventListener("mouseover", function(event)
                {
                    $('body').append(`<div class="infoText ${getSlotFromItem(this.innerHTML)}" style="position:absolute;width:400px;height:400px;top:${event.clientY}px;left:${event.clientX}px;">
                    <p>THIS IS THE TITLE OF THE WEAPON</p><br><p>DESCRIPTION</p><br><p>EFFECT></p><br><p>RAREITY LEVEL</p></div>`);
                    getItemIDFromItem(this.innerHTML);
                });
                allItems[i].addEventListener("mouseout", function(event)
                {
                    var infoTexts = document.querySelectorAll(`.infoText`);
                    for(var y = 0; y < infoTexts.length; y++)
                    {
                        if(infoTexts[y].classList[1] == getSlotFromItem(this.innerHTML))
                        {
                            infoTexts[y].remove();
                        }
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