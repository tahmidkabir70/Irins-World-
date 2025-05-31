const products = [
  {
    name: "Mom's Traditional Saree",
    price: 1500,
    img: "https://i.ibb.co/your-image-link.jpg"  // এখানে ছবি লিংক বসাও
  },
  {
    name: "Elegant Kurti",
    price: 900,
    img: "https://i.ibb.co/your-second-image.jpg"
  },
  {
    name: "Beautiful Jewellery Set",
    price: 700,
    img: "https://i.ibb.co/your-third-image.jpg"
  }
];

let cartCount = 0;

function renderProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";  // ক্লিয়ার করে নতুন করে প্রোডাক্ট দেখাবে
  products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>৳${product.price}</p>
      <button onclick="addToCart()">Add to Cart</button>
    `;
    productList.appendChild(productDiv);
  });
}

function addToCart() {
  cartCount++;
  document.getElementById("cart-count").textContent = cartCount;
}

renderProducts();