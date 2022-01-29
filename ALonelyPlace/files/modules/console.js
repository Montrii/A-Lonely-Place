export class Console
{
    constructor()
    {}
    writeToConsole(string)
    {
        $('#console').append(`<p>${string}</p>`);
    }
}