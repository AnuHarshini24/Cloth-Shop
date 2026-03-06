
function goPayment(e){
e.preventDefault();

let name=document.getElementById("name").value;
let address=document.getElementById("address").value;
let phone=document.getElementById("phone").value;

let order={
name,
address,
phone,
product:JSON.parse(localStorage.getItem("product")).name
};

localStorage.setItem("order",JSON.stringify(order));

window.location="payment.html";
}
