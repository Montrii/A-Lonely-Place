import { MapHandler } from "./modules/mapHandler.js";
import { Github } from "./modules/github.js";
$(document).ready(main);


async function main()
{
    var mapHandler = new MapHandler();
    var github = new Github();
    //console.log(await mapHandler.loadMap(1));
    github.getLatestCommitNumber("https://api.github.com/users/Montrii/events");
    console.log("Version 0.7.09 BETA.");
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





