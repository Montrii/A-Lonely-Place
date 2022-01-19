export class phpCommunicater
{
    constructor()
    {

    }
    sendToPHP()
    {
        var objXMLHttpRequest = new XMLHttpRequest();
        objXMLHttpRequest.onreadystatechange = function()
        {
            if(objXMLHttpRequest.readyState == 4 && objXMLHttpRequest.status == 200)
            {
                console.log(objXMLHttpRequest.status);
                console.log(objXMLHttpRequest.statusText);
            }
        }
        objXMLHttpRequest.open('GET', 'https://montriscript.com/projects/ALonelyPlace/ALonelyPlace/files/modules/saveStats.php');
        objXMLHttpRequest.send();
    }
}