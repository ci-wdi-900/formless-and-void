document.querySelector("button").addEventListener("click", () => {
  document.querySelectorAll("input").forEach((input) => {
    document.querySelector("h1." + input.id).innerText = input.value;
  });
});
