
function addToCart(id){
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let product = products.find(p=>p.id===id);
cart.push(product);
localStorage.setItem("cart", JSON.stringify(cart));
alert("Added to Cart");
}
