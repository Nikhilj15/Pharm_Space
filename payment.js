document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get('name');
    const productPrice = urlParams.get('price');
    const productQuantity = urlParams.get('quantity');

    // Display product details
    document.getElementById('productName').textContent = productName;
    document.getElementById('productPrice').textContent = productPrice;
    document.getElementById('productQuantity').textContent = productQuantity;

    // Set current date and time
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    document.getElementById('dateTime').textContent = dateTimeString;

    // Confirm payment button functionality
    document.getElementById('confirmPayment').addEventListener('click', function() {
        const customerName = document.getElementById('customerName').value;
        if (customerName) {
            alert(`Payment confirmed for ${customerName}!`);
            // Redirect or further payment processing logic can be implemented here
        } else {
            alert('Please enter your name to confirm payment.');
        }
    });
});
