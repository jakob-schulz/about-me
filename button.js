//Man bekommt den button mit dem Namen buaboutMe
const button = document.getElementById("buaboutMe");
const tableaboutMe = document.querySelector('.tableaboutMe');


//Wir aufgerufen, wenn der button geklickt wird
button.addEventListener("click", () => {

  //button wird ausgeblednet, nachdem er angeklickt wurde
  button.disabled = true;
  //Die Funktion scrollToContainer wird aufgerufen
  scrollToContaineraboutMe();
  //Wenn der button das erste mal angeklickt wird, wird die Animation gestartet
  tableaboutMe.classList.add('animated-aboutMe');
  //Nach 200 Millisekunden wird der button wird eingeblendet
  setTimeout(() => {
    button.disabled = false;
  }, 250);
});

//Funktion, die zu dem entsprechendne Container scrollt
function scrollToContaineraboutMe() {
  //Man bekommt den Container durch seinen Namen (getElementbyID hat nicht mehr funktioniert, deshalb nun diese Variante)
  const container = document.querySelector("#aboutMe");
  //Zu dem container wird gescrollt
  container.scrollIntoView({ behavior: "smooth" });
}

