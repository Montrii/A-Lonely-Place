export class Github
{
    constructor()
    {}
    displayJSONWebsite(website)
    {
        $.getJSON(website, function(data)
        {
            console.log(website);
        });
    }
}