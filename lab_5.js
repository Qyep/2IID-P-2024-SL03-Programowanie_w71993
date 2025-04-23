function sprawdzPelnoletnosc() {
    const wiek = prompt("Podaj swój wiek:");
  
    if (wiek >= 18) {
      console.log("Jesteś pełnoletni.");
    } else {
      console.log("Nie jesteś pełnoletni.");
    }
  }
  
  sprawdzPelnoletnosc();