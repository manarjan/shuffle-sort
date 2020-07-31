const shuffleButton = document.querySelector("#shuffleBtn");
const sortButton = document.querySelector("#sortBtn");

const cards = document.querySelectorAll(".card");

const onSort = () => {
  cards.forEach((card, index) => {
    card.setAttribute("data-number", index + 1);
  });
};

const onShuffle = () => {
  const numbers = [...Array.from(Array(9), (_, i) => i + 1)].sort(
    () => Math.random() - 0.5
  );
  cards.forEach((card, index) => {
    card.setAttribute("data-number", numbers[index]);
  });
};

shuffleButton.addEventListener("click", onShuffle);
sortButton.addEventListener("click", onSort);

document.addEventListener("readystatechange", onSort);
