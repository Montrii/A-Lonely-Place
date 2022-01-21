import { getRandomInt } from "./utilities.js";
import { Item } from "./Item.js";

export class ItemGenerator
{
    constructor()
    {}
    determineItem(itemLength)
    {
        var item_ID = getRandomInt(itemLength) + 1;
        if(item_ID > itemLength)
        {
            item_ID = itemLength;
        }
        else if(item_ID < 1)
        {
            item_ID = 1;
        }
        return item_ID;
    }
    defineRareityLevel(item_ID)
    {
        var rareity = 0;
        // RAREITY LEVELS
        // 4 -> legendary, 3 -> ultra, 2 -> epic, 1 -> rare, 0 -> common
        // legi -> 1%, ultra -> 3%, epic -> 8%, rare -> 30%, 
        switch(getRandomInt(100) + 1)
        {
            case 39:
                rareity = 4;
                break;
            case 48, 67, 87:
                rareity = 3;
                break;
            case 92,93,94,95,96,97,98,99,100:
                rareity = 2;
                break;
            case 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30:
                rareity = 1;
                break;
            default:
                rareity = 0;
                break;
        }
        return rareity;
    }
    buildItem(item_ID, rareity)
    {
        return new Item(item_ID, rareity);
    }
}

