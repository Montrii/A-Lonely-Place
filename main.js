$(document).ready(main);

function main()
{
    console.log("loaded main script!");
    $("#muteButton").hover(async function()
    {
        var i = 1;
        for(i = 1; i <= 30; i++)
        {
            document.getElementById("muteButton").style.boxShadow = "inset 0 0 0 "+i+"px #7BAEFF";
            await Sleep(5);
        }
        i = 1;
    }, function()
    {
        document.getElementById("muteButton").style.boxShadow = "inset 0 0 0 0 transparent";
    });
    var audio = new Audio("../Images/sounds/Obscura - 720.mp4");
    $("#muteButton").click(function()
    {
        if(document.getElementById("muteIcon").src.includes("speakerNormal.png"))
        {
            // muted 
            audio.play();
            audio.volume = 0.1;
            $("#muteIcon").attr("src", "./speakerMuted.png");
        }
        else if(document.getElementById("muteIcon").src.includes("speakerMuted.png"))
        {
            // unmuted
            audio.pause();
            $("#muteIcon").attr("src", "./speakerNormal.png");
        }

    });
}

function Sleep(milliseconds)
{
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}
