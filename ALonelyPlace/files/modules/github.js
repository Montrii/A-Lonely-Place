export class Github
{
    constructor()
    {}
    displayJSONWebsite(website)
    {
        $.getJSON(website, function(data)
        {
            console.log(data[0].payload.commits[0].message);
        });
    }
}