import { MapHandler } from "./modules/mapHandler.js";
$(document).ready(main);


async function main()
{
    var mapHandler = new MapHandler();
    //console.log(await mapHandler.loadMap(1));

    console.log("Version 0.6.0 BETA.");
    $.get('https://www.cloudflare.com/cdn-cgi/trace', async function(userData) {
            userData = userData.trim().split('\n').reduce(function(obj, pair) {
            pair = pair.split('=');
            return obj[pair[0]] = pair[1], obj;
        }, {});
            $.ajax({
            type: "GET",
            url: 'https://montriscript.com/projects/ALonelyPlace/ALonelyPlace/files/modules/php/loadPlayer.php',
            data: userData,
            success: async function(userData)
            {
                await mapHandler.loadMap(parseInt(userData));
            }
        });
    });
}





