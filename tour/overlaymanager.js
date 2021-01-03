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
    $("#overlay2").css("display", "none");
    $("#videojs-2")[0].player.pause();
}

function overlayOff3(){
    $("#overlay3").css("display", "none");
    $("#videojs-3")[0].player.pause();
}

function overlayOn1(){
    $(".info-hotspot-modal").removeClass("visible");
    $("#overlay1").css("display", "block");
}

function overlayOn2(){
    $(".info-hotspot-modal").removeClass("visible");
    $("#overlay2").css("display", "block");
}

function overlayOn3(){
    $(".info-hotspot-modal").removeClass("visible");
    $("#overlay3").css("display", "block");
}

$("#overlay1").css("display", "none");
$("#overlay2").css("display", "none");
$("#overlay3").css("display", "none");