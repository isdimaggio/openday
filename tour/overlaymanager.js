/*
Autore:       Vittorio Lo Mele
Data:         19-12-2020
Descrizione:  Overlay manager (versione tour)
*/

function overlayOff1(){
    $("#overlay1").css("display", "none");
    $("#videojs")[0].player.pause();
}

function overlayOff2(){
    $("#overlay1").css("display", "none");
    $("#videojs-2")[0].player.pause();
}

function overlayOn1(){
    $("#overlay1").css("display", "block");
}

function overlayOn2(){
    $("#overlay2").css("display", "block");
}

$("#overlay1").css("display", "none");
$("#overlay2").css("display", "none");