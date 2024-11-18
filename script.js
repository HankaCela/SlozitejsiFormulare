// Funkce pro zpracování odeslání formuláře
document.querySelector("#orderForm").addEventListener("submit", (e) => {
  e.preventDefault(); // Zabráníme odeslání formuláře

  const cardNumber = document.querySelector("#cardNumber").value;
  const delivery = document.querySelector("#delivery").value;

  // Zobrazení vyplněných údajů v konzoli
  console.log(`Číslo platební karty: ${cardNumber}`);
  console.log(`Zvolená doprava: ${delivery}`);

  // Ověření platební karty
  if (cardNumber.length === 16) {
    // Pokud je číslo karty správně dlouhé, zobrazíme zprávu
    document.body.innerHTML = "<p>Objednávka odeslána ke zpracování.</p>";
  } else {
    // Pokud je číslo karty příliš krátké nebo dlouhé, zobrazíme chybovou hlášku
    document.querySelector("#errorMessage").style.display = "block";
    if (cardNumber.length < 16) {
      document.querySelector("#errorMessage").textContent = `Číslo karty je příliš krátké. Chybí ${16 - cardNumber.length} číslic.`;
    } else {
      document.querySelector("#errorMessage").textContent = `Číslo karty je moc dlouhé. Přebývá ${cardNumber.length - 16} číslic.`;
    }
  }
});

// Funkce pro sledování délky čísla platební karty
document.querySelector("#cardNumber").addEventListener("input", (e) => {
  const cardNumberLength = e.target.value.length;
  const errorMessage = document.querySelector("#errorMessage");

  if (cardNumberLength === 16) {
    errorMessage.style.display = "none"; // Smažeme chybovou hlášku, pokud je karta správně dlouhá
  } else {
    // Zobrazíme chybovou hlášku při neplatné délce
    errorMessage.style.display = "block";
  }
});

// Funkce pro zobrazení změny hodnoty dopravy v konzoli
document.querySelector("#delivery").addEventListener("change", (e) => {
  console.log(`Vybraná doprava: ${e.target.value}`);
});

  /*
  document.querySelector("#reg_form").addEventListener("submit", (e) => {
    e.preventDefault()

    const jmeno = document.querySelector("#jmeno").value 
    const vek = Number(document.querySelector("#vek").value)
    const heslo = document.querySelector("#heslo").value 
    const bydliste = document.querySelector("#bydliste").value 

    if(heslo.length > 12) {
        document.body.innerHTML = "Uspesne registrovan"
    } else {
        document.body.innerHTML = "Heslo je kratke"
    }

    console.log(`${jmeno} ${vek} ${heslo} ${bydliste}`)
})

document.querySelector("#heslo").addEventListener("input", (e) => {
    const pocetZnaku = e.target.value.length

    if(pocetZnaku < 8) {
        console.log(`Heslo je kratke, aktualne ma pouze ${pocetZnaku} znaku`)
    } else {
        console.log(`Heslo je dostatecne dlouhe, aktualne ma ${pocetZnaku} znaku`)
    }
})

document.querySelector("#jmeno").addEventListener("change", (e) => {
    console.log(e.target.value)
})
    */