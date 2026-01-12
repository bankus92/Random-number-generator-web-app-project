const dropdown = document.getElementById("dice-select");
const output = document.getElementById("selectedValue");
const result = document.getElementById("result");
const rollButton = document.getElementById("roll-button");

dropdown.addEventListener("change", () => {
  const selected = dropdown.value;
  if (selected === "") {
    output.textContent = "No dice selected.";
  } else {
    output.textContent = `You selected: d${selected}`;
  }
});

rollButton.addEventListener("click", () => {
  const sides = Number(dropdown.value);

  if (!sides) {
    result.textContent = "Please select a dice to roll.";
    return;
  }

  const roll = Math.floor(Math.random() * sides) + 1;
  result.textContent = `You rolled a ${roll}`;
});
