const search_text_block = document.querySelector(".search_text_block");
const search_text = document.querySelector(".search_text");
const search_label = document.querySelector(".search_label");
const search_checkbox = document.querySelector(".search_checkbox");

search_label.addEventListener("click", (e) => {
  let checked = search_checkbox.checked;
  if (checked) {
    search_text_block.classList.add("search_text_block_active");
    search_label.classList.add("search_label_active");
    search_text.focus();
  } else if (!checked) {
    search_text_block.classList.remove("search_text_block_active");
    search_label.classList.remove("search_label_active");
  }
});
