let cart = JSON.parse(localStorage.getItem("cart")) || [];

const productsData = [
    {
        id: 1,
        name: "Premium Wireless Headphones",
        price: 149.99,
        originalPrice: 199.99,
        image: "https://m.media-amazon.com/images/I/61+hUOROEmL.jpg",
        description: "Noise cancelling technology with premium sound quality. Enjoy 30+ hours of battery life.",
        sale: true
    },
    {
        id: 2,
        name: "Smart Fitness Watch",
        price: 89.99,
        originalPrice: 119.99,
        image: "https://5.imimg.com/data5/SELLER/Default/2023/12/372262640/ZG/NQ/ZC/13784088/317-500x500.jpg",
        description: "Track your workouts, heart rate, and sleep patterns with this waterproof smart watch.",
        sale: true
    },
    // Add remaining products...
        {
        id: 3,
        name: "Gaming Laptop",
        price: 1200.00,
        originalPrice: 1500.00,
        image: "https://images.jdmagicbox.com/quickquotes/images_main/asus-rog-strix-hero-gaming-laptop-gl504-15-6-144hz-ips-type-slim-display-intel-core-i7-8750h-processor-up-to-3-9ghz-113434402-8iqea.jpg",
        description: "High-performance gaming laptop with a 144Hz display and powerful GPU.",
        sale: true
    },
    {
        id: 4,
        name: "4K Smart TV",
        price: 799.99,
        originalPrice: 999.99,
        image: "https://m.media-amazon.com/images/I/71d5fMDvq9L._AC_SL1500_.jpg",
        description: "Ultra HD 4K Smart TV with HDR support and voice assistant integration.",
        sale: false
    },
    {
        id: 5,
        name: "Wireless Earbuds",
        price: 59.99,
        originalPrice: 79.99,
        image: "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1500_.jpg",
        description: "Compact and lightweight earbuds with superior sound and noise isolation.",
        sale: true
    },
    {
        id: 6,
        name: "Smart Home Speaker",
        price: 129.99,
        originalPrice: 159.99,
        image: "https://m.media-amazon.com/images/I/61kWB+uzR2L._AC_SL1500_.jpg",
        description: "Voice-controlled smart home speaker with built-in assistant support.",
        sale: false
    },
    {
        id: 7,
        name: "Digital Camera",
        price: 499.99,
        originalPrice: 599.99,
        image: "https://in.canon/media/image/2018/11/19/b639ce271d2b450c974112ee3a7246ba_PowerShot-SX70-HS-Front-Slant.png",
        description: "Capture stunning photos and videos with this high-resolution digital camera.",
        sale: true
    },
    {
        id: 8,
        name: "Electric Toothbrush",
        price: 79.99,
        originalPrice: 99.99,
        image: "https://cdn11.bigcommerce.com/s-xyx0x9ybhg/images/stencil/1280x1280/products/1250/9075/B0C1H5CFSX.MAIN__71094.1722318163.jpg?c=2",
        description: "Advanced electric toothbrush with multiple cleaning modes and timer.",
        sale: false
    },
    {
        id: 9,
        name: "Smartphone Gimbal",
        price: 109.99,
        originalPrice: 139.99,
        image: "https://m.media-amazon.com/images/I/71rMpxI9dYL.jpg",
        description: "Stabilize your smartphone videos with this professional-grade gimbal.",
        sale: true
    },
    {
        id: 10,
        name: "Robot Vacuum Cleaner",
        price: 349.99,
        originalPrice: 399.99,
        image: "https://www.electrolux.com.au/globalassets/article/robotic-vacuum-cleaner-contender/robotic-contender-banner-mb.jpg?width=464",
        description: "Intelligent robot vacuum cleaner with mapping and automatic charging.",
        sale: false
    },
    {
        id: 11,
        name: "Bluetooth Keyboard",
        price: 49.99,
        originalPrice: 69.99,
        image: "https://images-cdn.ubuy.co.in/652f8785514e1a748c78be39-wireless-bluetooth-keyboard-2-4ghz.jpg",
        description: "Slim and responsive Bluetooth keyboard for all your typing needs.",
        sale: true
    },
    {
        id: 12,
        name: "Portable Power Bank",
        price: 39.99,
        originalPrice: 49.99,
        image: "https://mobilla.in/cdn/shop/files/white_725_1st_images.webp?v=1735369854",
        description: "High-capacity portable power bank with fast charging support.",
        sale: true
    }

];


// Render Products
function renderProducts() {
    let productHTML = '';
    productsData.forEach(product => {
        productHTML += `
            <div class="product">
                <img src="${product.image}" alt="${product.name}" width="150">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <span><strong>$${product.price.toFixed(2)}</strong> <s>$${product.originalPrice.toFixed(2)}</s></span>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
    });
    document.getElementById('products').innerHTML = productHTML;
}

// Add to Cart
function addToCart(productId) {
    let product = productsData.find(p => p.id === productId);
    if (!product) return;

    let existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        if (cart.length >= 100) {
            alert("Cart limit exceeded.");
            return;
        }
        cart.push({ ...product, quantity: 1 });
    }
    updateLocalStorage();
    renderCart();
}

// Increment Quantity
function incrementQuantity(productId) {
    let product = cart.find(item => item.id === productId);
    if (product) {
        product.quantity += 1;
        updateLocalStorage();
        renderCart();
    }
}

// Decrement Quantity
function decrementQuantity(productId) {
    let product = cart.find(item => item.id === productId);
    if (product) {
        if (product.quantity > 1) {
            product.quantity -= 1;
        } else {
            cart = cart.filter(item => item.id !== productId);
        }
        updateLocalStorage();
        renderCart();
    }
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateLocalStorage();
    renderCart();
}

// Clear Cart
function clearCart() {
    cart = [];
    updateLocalStorage();
    renderCart();
}

// Sort Cart
function sortCart(order) {
    cart.sort((a, b) => order === 'asc' ? a.price - b.price : b.price - a.price);
    renderCart();
}

// Update Local Storage
function updateLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Render Cart Items
function renderCart() {
    const cartContainer = document.getElementById("cart");
    const cartWrapper = document.getElementById("cart-container");
    const emptyMessage = document.getElementById("empty-message");
    const totalPriceEl = document.getElementById("total-price");
    const avgPriceEl = document.getElementById("average-price");

    cartContainer.innerHTML = "";
    if (cart.length === 0) {
        cartWrapper.style.display = "none";
        emptyMessage.style.display = "block";
        totalPriceEl.innerText = "0.00";
        avgPriceEl.innerText = "0.00";
        return;
    }
    
    cartWrapper.style.display = "block";
    emptyMessage.style.display = "none";

    cart.forEach(item => {
        let cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" width="80">
            <h4>${item.name}</h4>
            <p>$${item.price.toFixed(2)}</p>
            <div>
                <button onclick="decrementQuantity(${item.id})">➖</button>
                <span>${item.quantity}</span>
                <button onclick="incrementQuantity(${item.id})">➕</button>
            </div>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartContainer.appendChild(cartItem);
    });

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const avg = total / cart.reduce((sum, item) => sum + item.quantity, 0);
    
    totalPriceEl.innerText = total.toFixed(2);
    avgPriceEl.innerText = isNaN(avg) ? "0.00" : avg.toFixed(2);
}

// Initialize
window.onload = function () {
    renderProducts();
    renderCart();
};
