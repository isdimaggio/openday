/*
Autore:       Vittorio Lo Mele
Data:         19-12-2020
Descrizione:  Overlay manager (versione homepage)
*/

function overlayOn(){
    $("#overlayMain").css("display", "block");
}

function overlayOff(){
    $("#overlayMain").css("display", "none")
    $("#presentazioneinformatica")[0].player.pause();
}

overlayOff();