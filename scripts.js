document.addEventListener('DOMContentLoaded', () => {
    const cartCountElement = document.getElementById('cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const removeFromCartButtons = document.querySelectorAll('.remove-from-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            let cartCount = parseInt(cartCountElement.textContent);
            cartCount++;
            cartCountElement.textContent = cartCount;
        });
    });

    removeFromCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            let cartCount = parseInt(cartCountElement.textContent);
            if (cartCount > 0) {
                cartCount--;
                cartCountElement.textContent = cartCount;
            }
        });
    });
});
