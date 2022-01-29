import { Console } from "./console.js";
var console = new Console();
export class Github
{
    constructor()
    {}
    displayLatestUpdate(website)
    {
        var commitMessage = "test";
        $.getJSON(website, function(data)
        {
            // latest commit
            // data[0].payload.commits[0].message
            for(var i = 0; i < data.length; i++)
            {
                if(data[i].repo.name == "Montrii/A-Lonely-Place")
                {
                    if(commitMessage == "test")
                    {
                        commitMessage = data[i].payload.commits[0].message;
                        console.writeToConsole("A Lonely Place - A Browser Dungeoncrawler.");
                        console.writeToConsole("© Montri 2021-2022");
                        console.writeToConsole("Running on Github Commit: " + commitMessage);
                        $.ajax({
                            type: "GET",
                            url: 'https://montriscript.com/projects/ALonelyPlace/ALonelyPlace/files/modules/php/getLinesOfCode.php',
                            data: {
                                'ajax':true
                            },
                            success: function(userData)
                            {
                                console.writeToConsole("This game was written with " + userData + " lines of Code!");
                            }
                        });
                    }
                }
            }
        });
    }
}