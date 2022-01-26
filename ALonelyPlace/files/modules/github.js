export class Github
{
    constructor()
    {}
    getLatestGameUpdate(website)
    {
        $.getJSON(website, function(data)
        {
            // latest commit
            // data[0].payload.commits[0].message
            for(var i = 0; i < data.length; i++)
            {
                console.log(data[i].repo.name);
                if(data[i].repo.name == "Montrii/A-Lonely-Place")
                {
                    console.log(data[i].payload.commits[0].message);
                }
            }
        });
    }
}