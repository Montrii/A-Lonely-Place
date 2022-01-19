export class phpCommunicater
{
    constructor()
    {

    }
    sendToPHP()
    {
        $.ajax({
            type: "GET",
            url: 'https://montriscript.com/projects/ALonelyPlace/ALonelyPlace/files/modules/saveStats.php',
            data: {webname: 'Wayne', 'ajax': true},
            success: function(data){
                alert(data);
            }
        });
    }
}