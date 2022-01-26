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
                        console.log("Running on Github Commit: " + commitMessage);
                    }
                }
            }
        });
    }
}