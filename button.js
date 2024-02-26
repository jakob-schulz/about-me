
//Link zu bestimmten Stellen im Skript
//Man bekommt den button mit dem Namen buaboutMe
const buaboutMe = document.getElementById("buaboutMe");
const bucontact = document.getElementById("bucontact");
const buhome = document.getElementById("buhome");

//Wird aufgerufen, wenn der button geklickt wird
buaboutMe.addEventListener("click", () => {

  //button wird ausgeblednet, nachdem er angeklickt wurde
  buaboutMe.disabled = true;
  //Die Funktion scrollToContainer wird aufgerufen und der Container, zu dem man scrollen moechte wird als Parameter uebergeben
  scrollToContaineraboutMe(document.querySelector('#aboutMe'));
  //Nach 200 Millisekunden wird der button wird eingeblendet
  setTimeout(() => {
    buaboutMe.disabled = false;
  }, 250);
});
bucontact.addEventListener("click", () =>{
    //button wird ausgeblednet, nachdem er angeklickt wurde
    bucontact.disabled = true;
    //Die Funktion scrollToContainer wird aufgerufen
    scrollToContaineraboutMe(document.getElementById("contact"));
    //Nach 200 Millisekunden wird der button wird eingeblendet
    setTimeout(() => {
      bucontact.disabled = false;
    }, 250);
});
buhome.addEventListener("click", () =>{
  //button wird ausgeblednet, nachdem er angeklickt wurde
  buhome.disabled = true;
  //Die Funktion scrollToContainer wird aufgerufen
  scrollToContaineraboutMe(document.getElementById("home"));
  //Nach 200 Millisekunden wird der button wird eingeblendet
  setTimeout(() => {
    buhome.disabled = false;
  }, 250);
});


//Funktion, die zu dem Container scrolllt, der als Parameter uebergeben wird
function scrollToContaineraboutMe(arg) {
  //Zu dem uebergebenen Container wird gescrollt
  arg.scrollIntoView({ behavior: "smooth" });
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

const callbackaboutme = (entries, observer) => {
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

//Ein IntersectionObserver wird erstellt und die Callback-Funktion die Optionen werden übergeben
//Der Observer beobachtet die Seite und stellt mit Hilfe der uebergebenen Funktionen fest, wann ein beobachtetes Element im Sichtbereich des Nutzers ist
const observeraboutme = new IntersectionObserver(callbackaboutme, options);

// Des Zielelement, dass ueberwacht werden soll wird angegeben
observeraboutme.observe(tableaboutMe);


//Man bekommt den Container mit dem namen '#contact_information'
const contact = document.querySelector('.contact_information');

const callbackcontact = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Wenn das Element im sichtbaren Bereich ist, wird die Animation dem Elemnt hinzugefuegt -> Das fuehrt dazu, dass die Animation ausgefuehrt wird
      entry.target.classList.add('animated-contact');
      //Nachdem die Animation ausgefuehrt wurde ist die Tabelle sichtbar
      entry.target.style.opacity = "1";
      // Sobald die Animation abgespielt wurde muss man das Element nicht mehr beobachten, womit man sich Ressourcen spart
      observer.unobserve(entry.target);
    }
  });
};

//Ein IntersectionObserver wor erstellt und die Callback-Funktion die Optionen werden übergeben
//Der Observer beobachtet die Seite und stellt mit Hilfe der uebergebenen Funktionen fest, wann ein beobachtetes Element im Sichtbereich des Nutzers ist
const observercontact = new IntersectionObserver(callbackcontact, options);

// Des Zielelement, dass ueberwacht werden soll wird angegeben
observercontact.observe(contact);

