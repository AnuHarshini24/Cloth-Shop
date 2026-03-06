
let orders=JSON.parse(localStorage.getItem("orders"))||[];

let container=document.getElementById("orders");

orders.forEach(o=>{

container.innerHTML+=`
<p>
Name: ${o.name} <br>
Address: ${o.address} <br>
Phone: ${o.phone} <br>
Product: ${o.product}
</p>
<hr>
`;

});
