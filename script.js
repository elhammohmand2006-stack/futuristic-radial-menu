const selectors = document.querySelectorAll(".selector");

selectors.forEach((selector) => {
  const knob = selector.querySelector(".knob");
  const radios = selector.querySelectorAll('input[type="radio"]');

  function handleClick() {
    selector.classList.toggle("active");

    // وقتی منو بسته شد، اولین گزینه دوباره انتخاب می‌شود
    if (!selector.classList.contains("active")) {
      radios.forEach((radio, index) => {
        radio.checked = index === 0;
      });
    }
  }

  knob.addEventListener("click", handleClick);
});