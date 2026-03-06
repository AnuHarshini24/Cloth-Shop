
function payNow(){

alert("Order Confirmed 🎉");

let order=JSON.parse(localStorage.getItem("order"));

let orders=JSON.parse(localStorage.getItem("orders"))||[];

orders.push(order);

localStorage.setItem("orders",JSON.stringify(orders));

window.location="index.html";

}
