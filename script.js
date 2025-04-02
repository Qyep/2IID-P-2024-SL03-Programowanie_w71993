function zmienTekst() {
    document.getElementById("tekst").innerHTML = "Witaj na mojej stronie!";
    alert("Tekst został zmieniony!");
}
for (let i = 0; i <= 100; i += 2) {
    console.log(i);
}
let liczba1 = parseInt(prompt("Podaj pierwszą liczbę:"));
let liczba2 = parseInt(prompt("Podaj drugą liczbę:"));
let suma = liczba1 + liczba2;
alert("Wynik dodawania: " + suma);
function aktualizujCzas() {
    let teraz = new Date();
    document.getElementById("czas").innerHTML = teraz.toLocaleTimeString();
}
setInterval(aktualizujCzas, 1000);
let losowaLiczba = Math.floor(Math.random() * 101);
let liczbaProb = 0;

function sprawdzLiczbe() {
    let zgadywana = parseInt(document.getElementById("zgadywanaLiczba").value);
    liczbaProb++;

    if (zgadywana < losowaLiczba) {
        document.getElementById("wynik").innerHTML = "Za mało!";
    } else if (zgadywana > losowaLiczba) {
        document.getElementById("wynik").innerHTML = "Za dużo!";
    } else {
        alert("Gratulacje! Zgadłeś liczbę w " + liczbaProb + " próbach!");
        location.reload();
    }
}
