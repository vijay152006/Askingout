document.addEventListener("DOMContentLoaded", () => {
  const cartItemsList = document.getElementById("cart-items");

  // Retrieve cart items from localStorage
  const selectedItems = JSON.parse(localStorage.getItem("cart")) || [];

  if (selectedItems.length > 0) {
    selectedItems.forEach(item => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      cartItemsList.appendChild(listItem);
    });
  } else {
    cartItemsList.innerHTML = "<li>No items selected</li>";
  }
});
