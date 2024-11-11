/*
Zarovka
Vytvořte si repozitář ze šablony cviceni-zarovka se stránkou, která zobrazuje obyčejnou žárovku.
*/

const bulbElement = document.querySelector(".bulb");

/*
Pomocí JavaScriptu zařiďte, aby se při stisknutí libovolné klávesy na stránce přidala k elementu žárovky CSS třída bulb--on. Žárovka by se takto měla rozsvítit.
*/
// document.addEventListener("keydown", () => {
//   bulbElement.classList.add("bulb--on");
// });

/*
Vylepšete program tak, aby na následné stisknutí libovolné klávesy žárovka opět zhasnula. Opakovaným mačkáním kláves ji tak můžeme rozsvěcovat a zhasínat.
*/

document.addEventListener("keydown", () => {
  bulbElement.classList.toggle("bulb--on");
});
