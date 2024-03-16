
const rollBtn = document.getElementById("rollBtn");

rollBtn.onclick = function() {
  const InputNum = document.getElementById("InputNum").value;
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");
  const values = [];
  const images = [];

  for(let i=0; i < InputNum; i++){
    const value =  Math.floor(Math.random() *6) + 1;
    values.push(value);
    images.push(`<img src="dice_images/${value}.png">`);
  }
    // Show the result of each die in
    diceResult.textContent =  `Result: ${values.join(" | ")}`;
    // Show all the dice images next to

    diceImages.innerHTML =  images.join(" ");
}
