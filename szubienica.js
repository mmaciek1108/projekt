var haslo = "Bez pracy nie ma kołaczy";

function wypisz_haslo()
{
    document.getElementById("plansza").innerHTML = haslo;
}

window.onload = wypisz_haslo;