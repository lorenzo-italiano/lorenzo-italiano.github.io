// apitoken : nU3de5QwthNLefPzy88-kBmQgjVpC2RXuEI53xT2_tQ
// https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN
let plantlist = document.getElementById("plantlist");

function getPlants(nbpage) {
    let url = "https://trefle.io/api/v1/plants?token=nU3de5QwthNLefPzy88-kBmQgjVpC2RXuEI53xT2_tQ";
    requete = new XMLHttpRequest();
    requete.open("GET", url, true);
    requete.addEventListener("load", function () {
        let tab = JSON.parse(requete.responseText);
        plantlist.innerHTML = "";
        for (let i = 0; i < tab.length; i++) {
            let plant_img = document.createElement("img");
            plant_img.src = tab[i].image_url;
            plantlist.appendChild(plant_img);
        }
    });
    requete.send(null);
}