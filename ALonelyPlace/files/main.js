import { MapHandler } from "./modules/mapHandler.js";
import { Github } from "./modules/github.js";
import { Console } from "./modules/console.js";

$(document).ready(main);


async function main()
{
    var mapHandler = new MapHandler();
    // OFFICIAL VERSION 1.0.0
    var github = new Github();

    github.displayLatestUpdate("https://api.github.com/users/Montrii/events");
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
    $.ajax({
        type: "GET",
        url: 'https://montriscript.com/projects/ALonelyPlace/ALonelyPlace/files/modules/php/getLinesOfCode.php',
        data: {
            'ajax':true
        },
        success: function(userData)
        {
            var con = new Console();
            con.writeToConsole("This game was written with " + userData + " lines of Code!");
        }
    });

}





