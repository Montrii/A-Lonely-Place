export class phpCommunicater
{
    constructor()
    {

    }
    sendToPHP()
    {
        $.ajax({
            method: 'get',
            url: 'https://montriscript.com/projects/ALonelyPlace/ALonelyPlace/files/modules/saveStats.php',
            data :
            {
                'receivedItem': true,
                'ajax': true
            },
            success: function(data)
            {
                alert("successfully sent data to php server");
            }
        });
    }
}