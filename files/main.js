import { MapHandler } from "./modules/mapHandler.js";
$(document).ready(main);


async function main()
{
    var mapHandler = new MapHandler();
    //console.log(await mapHandler.loadMap(1));

    console.log("Version 0.1.1 BETA.");
    await mapHandler.loadMap(1);
}





