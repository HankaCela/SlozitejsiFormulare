document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("orderForm");
    const cardInput = document.getElementById("cardNumber");
    const deliverySelect = document.getElementById("delivery");
    const errorMessage = document.getElementById("errorMessage");
  
    
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (validateCardNumber()) {
        const cardNumber = cardInput.value;
        const deliveryMethod = deliverySelect.value;
        form.innerHTML = `<p>Objednávka odeslána ke zpracování.</p>`;
        console.log(`Platební karta: ${cardNumber}`);
        console.log(`Doprava: ${deliveryMethod}`);
      }
    });
  
    
    const validateCardNumber = () => {
      const cardNumber = cardInput.value;
      const cardLength = cardNumber.length;
      if (cardLength < 16) {
        errorMessage.style.display = "block";
        errorMessage.textContent = `Číslo karty je příliš krátké. Chybí ${16 - cardLength} číslic.`;
        return false;
      } else if (cardLength > 16) {
        errorMessage.style.display = "block";
        errorMessage.textContent = `Číslo karty je moc dlouhé. Přebývá ${cardLength - 16} číslic.`;
        return false;
      } else {
        errorMessage.style.display = "none";
        return true;
      }
    };
  
    
    cardInput.addEventListener("input", validateCardNumber);
  });