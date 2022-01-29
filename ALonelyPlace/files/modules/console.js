export class Console
{
    constructor()
    {}
    writeToConsole(string)
    {
        $('#console').append(`<p>${string}</p>`);
        document.querySelector("#console p").scrollIntoView();
    }
}