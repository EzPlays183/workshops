const titleInput = document.querySelector("#titleInput");
const messageInput = document.querySelector("#messageInput");
const colorSelect = document.querySelector("#colorSelect");
const sizeInput = document.querySelector("#sizeInput");
const messageBox = document.querySelector("#messageBox");
const previewTitle = document.querySelector("#previewTitle");
const previewBody = document.querySelector("#previewBody");

const defaultTitle = "Your headline appears here";
const defaultMessage = "Your message appears here.";
const defaultSize = 300;

const updatePreview = () => {
  const title = titleInput.value.trim();
  const message = messageInput.value.trim();

  previewTitle.textContent = title === "" ? defaultTitle : title;
  previewBody.textContent = message === "" ? defaultMessage : message;

  messageBox.className = `message-preview ${colorSelect.value}`;

  const sizeValue = Number(sizeInput.value);
  const safeSize = Number.isNaN(sizeValue) || sizeValue <= 0 ? defaultSize : sizeValue;
  messageBox.style.width = `${safeSize}px`;
  messageBox.style.minHeight = `${Math.round(safeSize * 0.6)}px`;
};

titleInput.addEventListener("input", updatePreview);
messageInput.addEventListener("input", updatePreview);
colorSelect.addEventListener("change", updatePreview);
sizeInput.addEventListener("input", updatePreview);

updatePreview();
