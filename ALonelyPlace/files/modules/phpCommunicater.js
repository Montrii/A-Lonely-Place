export class phpCommunicater
{
    constructor()
    {

    }
    receiveIPAddressOfUser()
    {
        $.get('https://www.cloudflare.com/cdn-cgi/trace', function(data) {
        // Convert key-value pairs to JSON
        // https://stackoverflow.com/a/39284735/452587
        data = data.trim().split('\n').reduce(function(obj, pair) {
            pair = pair.split('=');
            return obj[pair[0]] = pair[1], obj;
        }, {});
        return data['ip'];
        });
    }
    sendToPHP(ip)
    {
        $.ajax({
            type: "GET",
            url: 'https://montriscript.com/projects/ALonelyPlace/ALonelyPlace/files/modules/saveStats.php',
            data: {
                'userIp' : ip,
                'ajax' : true
            },
            success: function(data){
                alert(data);
            }
        });
    }
}