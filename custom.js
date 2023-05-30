//seçim işlemleri//
var genislik=document.getElementById("genislik");
var yukseklik=document.getElementById("yukseklik");
var arka_renk=document.getElementById("arka_renk");
var kalinlik=document.getElementById("kalinlik");
var tip= document.getElementById("tip");
var cerceve_renk= document.getElementById("cerceve_renk");
var dis_bosluk= document.getElementById("dis_bosluk");
var ic_bosluk= document.getElementById("ic_bosluk");
var dondur= document.querySelector("#rotate");
var olustur= document.querySelector("#olustur");
var sag_taraf=document.querySelector(".sag");
//seçim işi bittii//

//tıklandığında çalışacak fonk.//
olustur.addEventListener("click",div_olustur);

function div_olustur(){
    sag_taraf.style.width=genislik.value+ "px";
    sag_taraf.style.height=genislik.value+ "px";
    sag_taraf.style.backgroundColor=arka_renk.value;
    sag_taraf.style.borderWidth=kalinlik.value;
    sag_taraf.style.borderStyle=tip.value;
    sag_taraf.style.borderColor=cerceve_renk.value;
    sag_taraf.style.margin=dis_bosluk.value;
    sag_taraf.style.padding=ic_bosluk.value;
    sag_taraf.style.transform="rotate("+ dondur.value+ "deg)";
}


