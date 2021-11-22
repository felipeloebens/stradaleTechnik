import $ from 'jquery';
import React from "react";

function getInstagram() {
const token = "IGQVJWeHZAQWHdZATnBydFFOWHFZAcFB6UDBSOHhmc3NWakY4SHU4cGJDNWp0dUhRYmdNY2FOZAERiNDRaRGhEUWxZAR0NRVjVvYnlaZA3RUa183dFRlOHAwbkNVcG9HQzlRelNCR0ktc3U3MnhyR1BHR2F3eAZDZD";
const url = "https://graph.instagram.com/me/media?access_token=" + token + "&fields=media_url,media_type,caption,permalink";

    $.get(url).then(function(response){
    // console.log('retorno', response.data);
    
    let dadosJson = response.data;
    return(

        dadosJson
    )
    })



}

export default getInstagram