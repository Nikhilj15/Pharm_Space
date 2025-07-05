// Get URL parameters for product name, price, and quantity
const urlParams = new URLSearchParams(window.location.search);
const productName = urlParams.get('name');
const productPrice = urlParams.get('price');
const productQuantity = urlParams.get('quantity');

// If product details are available, show them in the cart
if (productName && productPrice && productQuantity) {
    const cartItemsDiv = document.getElementById('cartItems');
    const cartItem = document.createElement('div');
    cartItem.innerHTML = `<strong>${productName}</strong> - ${productPrice} x ${productQuantity}`;
    cartItemsDiv.appendChild(cartItem);
} else {
    // If no product is in the cart, show a message
    document.getElementById('cartItems').innerText = "Your cart is empty.";
}
document.querySelector('.buy-now').addEventListener('click', function() {
    const productName = document.querySelector('.product-info h2').innerText;
    const productPrice = document.querySelector('.product-info strong').innerText.replace('₹', '').trim();
    const quantity = document.getElementById('quantity').value;

    // Redirect to the receipt page with product details as URL parameters
    window.location.href = `receipt.html?name=${encodeURIComponent(productName)}&price=${encodeURIComponent(productPrice)}&quantity=${encodeURIComponent(quantity)}`;
});
