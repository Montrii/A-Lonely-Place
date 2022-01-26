export class Github
{
    constructor()
    {}
    getLatestCommitNumber(website)
    {
        $.getJSON(website, function(data)
        {
            // latest commit
            // data[0].payload.commits[0].message
            for(var i = 0; i < data.length; i++)
            {
                console.log(data[i].repo.name);
            }
        });
    }
}