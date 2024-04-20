const products = document.querySelectorAll('.products.');
products.forEach(product => {product.addEventListener('click', handleProductClick);});


function handleProductClick(event) {
    console.log("Product Clicked!", e.target);
}

let cart =[];
function addToCart(product) {
    cart.push(product);
}