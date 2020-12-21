/*
Autore:       Vittorio Lo Mele
Data:         19-12-2020
Descrizione:  Overlay manager (versione tour)
*/

function overlayOn(ytid){
    document.getElementById("overlayIframe").src = "https://www.youtube-nocookie.com/embed/" + ytid;
    document.getElementById("overlayMain").style.display = "block";
}

function overlayOff(){
    document.getElementById("overlayMain").style.display = "none";
    document.getElementById("overlayIframe").src = "";
}

overlayOff();