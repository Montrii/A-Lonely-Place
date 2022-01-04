import { MapHandler } from "./modules/objects.js";
$(document).ready(main);


async function main()
{
    var mapHandler = new MapHandler();
    //console.log(await mapHandler.loadMap(1));

    console.log("Loaded with private repository.");
    await mapHandler.loadMap(1);
}





