var haslo = "Bez pracy nie ma kołaczy tak";
haslo = haslo.toUpperCase(); //wielkie litery
var dlugosc = haslo.length; //lenght -  wlaściwość (cecha atrybut) nie funkcja!!

var haslo1 = "";

for (i=0; i<dlugosc; i++)
{
    if (haslo.charAt(i)==" ") haslo1=haslo1+" ";//nie wolno uuywać nawiasów kwa w JS
    else haslo1=haslo1+"-";
}

function wypisz_haslo()
{
    document.getElementById("plansza").innerHTML = haslo1;
}

window.onload = start; //inna ksywka zderznia window.Onload

var litery = new Array(35);

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";

function start()
{
    let tresc_diva = "";

    for (i=0; i<=34; i++)
    {
        let element = "lit"+i;
        tresc_diva=tresc_diva+'<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">'+ litery[i]+'</div>';
        if ((i+1)%7==0) tresc_diva=tresc_diva+'<div style="clear:both;"></div>'
    }

    document.getElementById("alfabet").innerHTML= tresc_diva;

    wypisz_haslo();
}

String.prototype.ustawZnak = function(miejsce, znak){
    if(miejsce > this.length - 1) return this.toString();
    else return this.substring(0, 1) + znak + this.substring(miejsce+1);
}


function sprawdz(nr){
    for(let i=0; i<dlugosc; i++){
        if (haslo.charAt(i) == litery[nr]){
            haslo1 = haslo1.ustawZnak(i, litery[nr]);
        }
    }

}