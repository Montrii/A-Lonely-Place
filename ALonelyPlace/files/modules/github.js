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
            console.log(data);
        });
    }
}