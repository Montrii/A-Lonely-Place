export class phpCommunicater
{
    constructor()
    {

    }
    getPlayerItems()
    {
        $.ajax({
            type: "GET",
            url: 'https://montriscript.com/projects/ALonelyPlace/ALonelyPlace/files/modules/php/getPlayerItems.php',
            data: 
            {
                'officalRequest' : true
            },
            success: function(userData)
            {
                return userData;
            }
        });
    }
    getItems()
    {
        $.ajax({
            type: "GET",
            url: 'https://montriscript.com/projects/ALonelyPlace/ALonelyPlace/files/modules/php/getItems.php',
            data: 
            {
                'officalRequest' : true
            },
            success: function(userData)
            {
                console.log(userData);
            }
        })
    }
    saveStats(inventory)
    {
        $.get('https://www.cloudflare.com/cdn-cgi/trace', function(userData) {
        // Convert key-value pairs to JSON
        // https://stackoverflow.com/a/39284735/452587
        userData = userData.trim().split('\n').reduce(function(obj, pair) {
            pair = pair.split('=');
            return obj[pair[0]] = pair[1], obj;
        }, {});
        const information = Object.assign(userData, inventory)
            $.ajax({
                type: "GET",
                url: 'https://montriscript.com/projects/ALonelyPlace/ALonelyPlace/files/modules/php/saveStats.php',
                data: information,
                success: function(userData)
                {
                    console.log(userData);
                }
            });
        });
    }
}