
//Link zu bestimmten Stellen im Skript
//Man bekommt den button mit dem Namen buaboutMe
const button = document.getElementById("buaboutMe");

//Wir aufgerufen, wenn der button geklickt wird
button.addEventListener("click", () => {

  //button wird ausgeblednet, nachdem er angeklickt wurde
  button.disabled = true;
  //Die Funktion scrollToContainer wird aufgerufen
  scrollToContaineraboutMe();
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


//Animationen:
//Man bekommt den Container mit dem namen '.tableaboutMe'
const tableaboutMe = document.querySelector('.tableaboutMe');

// Optionnen/Einstellungen fuer den IntersectionObserver
const options = {
  root: null,
  rootMargin: "0px",
  // Bestimmt, wie viel vom Element sichtbar sein muss, damit die Animation abgespielt wird
  threshold: 0.5
};

const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Wenn das Element im sichtbaren Bereich ist, wird die Animation dem Elemnt hinzugefuegt -> Das fuehrt dazu, dass die Animation ausgefuehrt wird
      entry.target.classList.add('animated-aboutMe');
      //Nachdem die Animation ausgefuehrt wurde ist die Tabelle sichtbar
      entry.target.style.opacity = "1";
      // Sobald die Animation abgespielt wurde muss man das Element nicht mehr beobachten, womit man sich Ressourcen spart
      observer.unobserve(entry.target);
    }
  });
};

//Ein IntersectionObserver wor erstellt und die Callback-Funktion die Optionen werden übergeben
//Der Observer beobachtet die Seite und stellt mit Hilfe der uebergebenen Funktionen fest, wann ein beobachtetes Element im Sichtbereich des Nutzers ist
const observer = new IntersectionObserver(callback, options);

// Des Zielelement, dass ueberwacht werden soll wird angegeben
observer.observe(tableaboutMe);

