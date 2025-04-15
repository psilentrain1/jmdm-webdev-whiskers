const heroBtn = document.getElementById("hero-button");
const ctaBtn = document.getElementById("cta-button");
const modal = document.getElementById("appointment-modal");
const modalForm = document.getElementById("modal-form");
const modalSent = document.getElementById("modal-sent");
const btnModalSent = document.getElementById("btn-modal-sent");
const clickSource = document.getElementById("click-source");
const modalClose = document.getElementById("modal-close");
const modalCancel = document.getElementById("modal-cancel");

document.addEventListener("click", (e) => {
  if (e.target === heroBtn || e.target === ctaBtn) {
    modal.style.display = "flex";
    clickSource.value = e.target.id;
  }
  if (e.target === modalClose || e.target === modalCancel || e.target === btnModalSent) {
    modal.style.display = "none";
    modalForm.reset();
    modalSent.style.display = "none";
    modalForm.style.display = "flex";
  }
});

modalForm.onsubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(modalForm);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
  modalForm.reset();
  modalForm.style.display = "none";
  modalSent.style.display = "block";
};
