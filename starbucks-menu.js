document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const addToCartButton = document.querySelector('.add-to-cart-button');

  addToCartButton.addEventListener('click', () => {
    const selectedItems = [];
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        selectedItems.push(checkbox.parentElement.textContent.trim());
      }
    });
    // Save selected items to localStorage
    localStorage.setItem("cart", JSON.stringify(selectedItems));
    window.location.href = "confirmation.html";
  });
});
