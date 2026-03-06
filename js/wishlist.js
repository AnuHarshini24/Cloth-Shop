
function addToWishlist(id){
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
let product = products.find(p=>p.id===id);
wishlist.push(product);
localStorage.setItem("wishlist", JSON.stringify(wishlist));
alert("Added to Wishlist");
}
