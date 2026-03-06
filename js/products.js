let products = [

/* WOMEN */

{id:1,name:"Stylish Maxi Frock",price:1200,category:"women",image:"images/w1.jpg"},
{id:2,name:"Party Saree",price:2000,category:"women",image:"images/w2.jpg"},
{id:3,name:"Cotton Kurti",price:900,category:"women",image:"images/w3.jpg"},
{id:4,name:"Designer Lehenga",price:3500,category:"women",image:"images/w4.jpg"},
{id:5,name:"Casual Top",price:600,category:"women",image:"images/w5.jpg"},

/* MEN */

{id:6,name:"Formal Shirt",price:800,category:"men",image:"images/m1.jpg"},
{id:7,name:"Denim Jacket",price:2200,category:"men",image:"images/m2.jpg"},
{id:8,name:"Casual T-shirt",price:500,category:"men",image:"images/m3.jpg"},
{id:9,name:"Hoodie",price:1200,category:"men",image:"images/m4.jpg"},
{id:10,name:"Classic Jeans",price:1500,category:"men",image:"images/m5.jpg"},

/* CHILDREN */

{id:11,name:"Kids Party Dress",price:700,category:"children",image:"images/c1.jpg"},
{id:12,name:"Kids T-shirt",price:300,category:"children",image:"images/c2.jpg"},
{id:13,name:"Kids Jacket",price:900,category:"children",image:"images/c3.jpg"},
{id:14,name:"Kids Shorts",price:350,category:"children",image:"images/c4.jpg"},
{id:15,name:"Kids Hoodie",price:600,category:"children",image:"images/c5.jpg"},

/* EXTRA COLLECTION */

{id:16,name:"Summer Dress",price:1400,category:"women",image:"images/w6.jpg"},
{id:17,name:"Printed Kurti",price:1100,category:"women",image:"images/w7.jpg"},
{id:18,name:"Silk Saree",price:2500,category:"women",image:"images/w8.jpg"},
{id:19,name:"Casual Shirt",price:750,category:"men",image:"images/m6.jpg"},
{id:20,name:"Winter Jacket",price:2800,category:"men",image:"images/m7.jpg"},
{id:21,name:"Kids Sweater",price:650,category:"children",image:"images/c6.jpg"},
{id:22,name:"Kids Jeans",price:450,category:"children",image:"images/c7.jpg"},
{id:23,name:"Men Blazer",price:3000,category:"men",image:"images/m8.jpg"},
{id:24,name:"Women Jacket",price:2100,category:"women",image:"images/w9.jpg"},
{id:25,name:"Women Skirt",price:950,category:"women",image:"images/w10.jpg"}

];

function buyNow(id){
let product = products.find(p=>p.id===id);
localStorage.setItem("product", JSON.stringify(product));
window.location="checkout.html";
}
