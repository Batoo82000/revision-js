const copyToClipboardButton = document.querySelector(".copy-clipboard-btn")

copyToClipboardButton.addEventListener("click", handleCopyToClipboard)

function handleCopyToClipboard(e) {
    navigator.clipboard.writeText(e.target.previousElementSibling.textContent)
}