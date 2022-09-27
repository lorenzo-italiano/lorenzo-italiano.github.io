let projets = document.getElementsByClassName("projet");

 Array.prototype.forEach.call(projets, val =>{
    val.addEventListener("click",function(){
       	window.location.href = "pagesprojets/" + val.id + ".html";
    });
});

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



/*for(var i=0; i<projets.length ;i++){
	projets[i].addEventListener("click",function(){
		console.log("test");
	});
}
*/


//console.log(projets);
// boutons pages

/*let projetISN = document.getElementById("projetISN")

projetISN.addEventListener("click", function(){
		print("1")
		window.location.href = "pageprojets/projetISN.html"
	});

let projetNuit2019 = document.getElementById("projetNuit2019")

let projetHTMLCSSDUT = document.getElementById("projetHTMLCSSDUT")

let projetWordpressDUT = document.getElementById("projetWordpressDUT")

let projetCodeGameJam4 = document.getElementById("projetCodeGameJam4")

let projetIHMDUT = document.getElementById("projetIHMDUT")

let projetCreationEntrepriseDUT = document.getElementById("projetCreationEntrepriseDUT")

let projetNuit2020 = document.getElementById("projetNuit2020")

let projetEligaDUT = document.getElementById("projetEligaDUT")

let projetAlgoGenDUT = document.getElementById("projetAlgoGenDUT")

let projetPHPDUT = document.getElementById("projetPHPDUT")

let projetUngoogleDUT = document.getElementById("projetUngoogleDUT")

let projetCodeGameJam5 = document.getElementById("projetCodeGameJam5")

let projetS4DUT = document.getElementById("projetS4DUT")

let projetStageMinesISR = document.getElementById("projetStageMinesISR")

let projetPiscinePolytech = document.getElementById("projetPiscinePolytech")

let projetRaspPolytech = document.getElementById("projetRaspPolytech")

let projetAlgoPolytech = document.getElementById("projetAlgoPolytech")

//let projet = document.getElementsById()

function onClick(el){
	el.addEventListener("click", function(){
		print("1")
		//window.location.href = "pageprojets/" + str(name) + ".html"
	});
}

onClick(projetISN);

/*onClick(projetNuit2019)

onClick(projetHTMLCSSDUT)

onClick(projetWordpressDUT)

onClick(projetCodeGameJam4)

onClick(projetIHMDUT)

onClick(projetCreationEntrepriseDUT)

onClick(projetNuit2020)

onClick(projetEligaDUT)

onClick(projetAlgoGenDUT)

onClick(projetPHPDUT)

onClick(projetUngoogleDUT)

onClick(projetCodeGameJam5)

onClick(projetS4DUT)

onClick(projetStageMinesISR)

onClick(projetPiscinePolytech)

onClick(projetRaspPolytech)

onClick(projetAlgoPolytech)
*/


//corriger pck le in range existe pas en js
/*for in range(projets.length-1){
	console.log(projets[i]);
}

function projectOnHover(){
	console.log("A");
}*/