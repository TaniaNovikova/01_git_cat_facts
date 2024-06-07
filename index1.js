const FACTS = document.querySelector(".facts");
const GET_FACT_BUTTON = document.querySelector(".get-fact");
const FACTS_FORM = document.querySelector(".facts-card");
const LIST = document.querySelector("ul");

const RANDOM_FACT_URL = "https://catfact.ninja/fact";

FACTS_FORM.addEventListener("submit", async (event) => {
  event.preventDefault();
  GET_FACT_BUTTON.disabled = true;

  //response дает общую информацию об ответе
  const response = await fetch(RANDOM_FACT_URL);
  console.log(response);

  const result = await response.json();
  console.log(result);
  if (response.ok) {
    const TEXT = document.createTextNode(`${result.fact}`);
    const LI = document.createElement("li");
    LI.appendChild(TEXT);
    if (LIST.childElementCount < 3) {
      LIST.appendChild(LI);
      GET_FACT_BUTTON.disabled = false;
    } else {
      LIST.firstElementChild.remove();
      LIST.append(LI);
      GET_FACT_BUTTON.disabled = false;
    }
  } else {
    FACTS.textContent = "FACTS NOT FOUND!";
    GET_FACT_BUTTON.disabled = false;
  }
});
