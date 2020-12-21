function overlayOn(){
    $("#overlayMain").css("display", "block");
}

function overlayOff(){
    $("#overlayMain").css("display", "none")
    $("#presentazioneinformatica")[0].player.pause();
}

overlayOff();