const DELIVERY_COST = 2.5;

const products = [
  {
    id: "pizza-1",
    name: "Truffle Funghi",
    category: "pizza",
    price: 16.5,
    description: "Romige basis, champignons, truffelolie, mozzarella en rucola.",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1400&q=80",
    featured: true,
    featuredSize: "large",
    quickOrder: true,
    featuredLabel: "Signature pizza"
  },
  {
    id: "pizza-2",
    name: "Margherita",
    category: "pizza",
    price: 12.5,
    description: "Tomatensaus, mozzarella en basilicum.",
    image:
      "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    quickOrder: true,
    featuredLabel: "Klassieker"
  },
  {
    id: "pasta-1",
    name: "Pasta Alfredo",
    category: "pasta",
    price: 13.5,
    description: "Romige saus, parmezaan en verse peterselie.",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    quickOrder: true,
    featuredLabel: "Verse pasta"
  },
  {
    id: "pizza-3",
    name: "Diavola",
    category: "pizza",
    price: 14.5,
    description: "Pittige salami, mozzarella, tomatensaus en chili.",
    image:
      "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "pizza-4",
    name: "Vegetariana",
    category: "pizza",
    price: 13.5,
    description: "Gegrilde groenten, mozzarella en mediterrane kruiden.",
    image:
      "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "pizza-5",
    name: "Quattro Formaggi",
    category: "pizza",
    price: 15.5,
    description: "Mozzarella, gorgonzola, parmezaan en provolone.",
    image:
      "https://images.unsplash.com/photo-1511689660979-10d2b1aada49?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "pizza-6",
    name: "Pepperoni",
    category: "pizza",
    price: 14.0,
    description: "Tomatensaus, mozzarella en licht pittige pepperoni.",
    image:
      "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "pizza-7",
    name: "Prosciutto e Rucola",
    category: "pizza",
    price: 16.0,
    description: "Prosciutto, rucola, parmezaan en tomatensaus.",
    image:
      "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "pizza-8",
    name: "Marinara",
    category: "pizza",
    price: 11.5,
    description: "Tomatensaus, knoflook, oregano en olijfolie.",
    image:
      "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "pasta-2",
    name: "Pasta Pomodoro",
    category: "pasta",
    price: 12.0,
    description: "Tomatensaus, basilicum, knoflook en olijfolie.",
    image:
      "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "pasta-3",
    name: "Lasagne al Forno",
    category: "pasta",
    price: 14.5,
    description: "Rijke vleessaus, bechamel en gegratineerde kaas.",
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "pasta-4",
    name: "Pasta Pesto",
    category: "pasta",
    price: 13.0,
    description: "Basilicumpesto, cherrytomaat en parmezaan.",
    image:
      "https://images.unsplash.com/photo-1622973536968-3ead9e780960?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "pasta-5",
    name: "Pasta Arrabbiata",
    category: "pasta",
    price: 13.5,
    description: "Pittige tomatensaus, knoflook en verse kruiden.",
    image:
      "https://images.unsplash.com/photo-1521389508051-d7ffb5dc8f70?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "dessert-1",
    name: "Tiramisu",
    category: "dessert",
    price: 6.5,
    description: "Klassiek Italiaans dessert met mascarpone en cacao.",
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "dessert-2",
    name: "Panna Cotta",
    category: "dessert",
    price: 6.0,
    description: "Fluweelzachte roompudding met rood fruit.",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "drink-1",
    name: "San Pellegrino",
    category: "drinks",
    price: 3.5,
    description: "Bruisende Italiaanse frisdrank, gekoeld geserveerd.",
    image:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "drink-2",
    name: "Espresso",
    category: "drinks",
    price: 2.8,
    description: "Krachtige Italiaanse koffie, kort en intens.",
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "drink-3",
    name: "Chianti Classico",
    category: "drinks",
    price: 5.5,
    description: "Glas rode wijn met een volle en kruidige afdronk.",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "drink-4",
    name: "Citroenlimonade",
    category: "drinks",
    price: 4.0,
    description: "Frisse huisgemaakte limonade met munt en citrus.",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80"
  }
];

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const filterButtons = document.querySelectorAll(".filter-btn");
const featuredGrid = document.getElementById("featured-grid");
const menuGrid = document.getElementById("menu-grid");
const quickOrderList = document.getElementById("quick-order-list");
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

const cartButton = document.getElementById("cart-button");
const heroCartButton = document.getElementById("hero-cart-button");
const cartDrawer = document.getElementById("cart-drawer");
const cartOverlay = document.getElementById("cart-overlay");
const cartClose = document.getElementById("cart-close");
const cartItemsContainer = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartSubtotal = document.getElementById("cart-subtotal");
const cartDelivery = document.getElementById("cart-delivery");
const cartTotal = document.getElementById("cart-total");
const checkoutButton = document.getElementById("checkout-button");
const checkoutNote = document.getElementById("checkout-note");

let cart = [];
let activeCategory = "all";

function formatPrice(price) {
  return `€${price.toFixed(2)}`;
}

function openCart() {
  cartDrawer.classList.add("show");
  cartOverlay.classList.add("show");
  cartDrawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}

function closeCart() {
  cartDrawer.classList.remove("show");
  cartOverlay.classList.remove("show");
  cartDrawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}

function saveCart() {
  localStorage.setItem("pizza-house-cart", JSON.stringify(cart));
}

function loadCart() {
  const savedCart = localStorage.getItem("pizza-house-cart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
}

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1
    });
  }

  saveCart();
  renderCart();
  openCart();
}

function updateQuantity(itemId, change) {
  cart = cart
    .map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + change };
      }
      return item;
    })
    .filter((item) => item.quantity > 0);

  saveCart();
  renderCart();
}

function removeFromCart(itemId) {
  cart = cart.filter((item) => item.id !== itemId);
  saveCart();
  renderCart();
}

function getSubtotal() {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function getTotalItemCount() {
  return cart.reduce((total, item) => total + item.quantity, 0);
}

function createFeaturedCard(product, index) {
  const isLarge = product.featuredSize === "large" || index === 0;

  return `
    <article class="featured-card ${isLarge ? "large" : ""}">
      <img src="${product.image}" alt="${product.name}" />
      <div class="featured-card-content">
        <p class="featured-label">${product.featuredLabel || "Specialiteit"}</p>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="card-footer-row">
          <span class="price">${formatPrice(product.price)}</span>
          <button
            class="btn btn-primary small-btn add-to-cart"
            data-id="${product.id}"
            type="button"
          >
            Bestellen
          </button>
        </div>
      </div>
    </article>
  `;
}

function createMenuCard(product) {
  const categoryLabelMap = {
    pizza: "Pizza",
    pasta: "Pasta",
    dessert: "Dessert",
    drinks: "Drank"
  };

  return `
    <article class="menu-card" data-category="${product.category}">
      <img src="${product.image}" alt="${product.name}" />
      <div class="menu-card-content">
        <div class="menu-card-header">
          <h3>${product.name}</h3>
          <span class="price">${formatPrice(product.price)}</span>
        </div>
        <p>${product.description}</p>
        <div class="menu-card-bottom">
          <span class="tag">${categoryLabelMap[product.category]}</span>
          <button
            class="btn btn-primary small-btn add-to-cart"
            data-id="${product.id}"
            type="button"
          >
            Toevoegen
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderQuickOrder() {
  const quickItems = products.filter((product) => product.quickOrder).slice(0, 3);

  quickOrderList.innerHTML = quickItems
    .map(
      (product) => `
        <div class="reservation-item">
          <span>${product.name}</span>
          <strong>${formatPrice(product.price)}</strong>
        </div>
      `
    )
    .join("");
}

function renderFeaturedProducts() {
  const featuredProducts = products.filter((product) => product.featured).slice(0, 3);
  featuredGrid.innerHTML = featuredProducts
    .map((product, index) => createFeaturedCard(product, index))
    .join("");
}

function renderMenuProducts() {
  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  menuGrid.innerHTML = filteredProducts.map((product) => createMenuCard(product)).join("");
}

function renderCart() {
  const subtotal = getSubtotal();
  const total = cart.length > 0 ? subtotal + DELIVERY_COST : 0;

  cartCount.textContent = getTotalItemCount();
  cartSubtotal.textContent = formatPrice(subtotal);
  cartDelivery.textContent = cart.length > 0 ? formatPrice(DELIVERY_COST) : formatPrice(0);
  cartTotal.textContent = formatPrice(total);

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <p class="empty-cart-message">Je winkelwagen is nog leeg.</p>
    `;
    return;
  }

  cartItemsContainer.innerHTML = cart
    .map(
      (item) => `
        <article class="cart-item">
          <div class="cart-item-top">
            <div>
              <h4>${item.name}</h4>
              <span class="cart-item-price">${formatPrice(item.price)}</span>
            </div>
            <strong>${formatPrice(item.price * item.quantity)}</strong>
          </div>

          <div class="cart-controls">
            <div class="quantity-controls">
              <button class="qty-btn" data-action="decrease" data-id="${item.id}" type="button">−</button>
              <span class="quantity-value">${item.quantity}</span>
              <button class="qty-btn" data-action="increase" data-id="${item.id}" type="button">+</button>
            </div>

            <button class="remove-btn" data-action="remove" data-id="${item.id}" type="button">
              Verwijderen
            </button>
          </div>
        </article>
      `
    )
    .join("");
}

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;

    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    renderMenuProducts();
  });
});

document.addEventListener("click", (event) => {
  const addButton = event.target.closest(".add-to-cart");

  if (addButton) {
    addToCart(addButton.dataset.id);
  }
});

cartButton.addEventListener("click", openCart);
heroCartButton.addEventListener("click", openCart);
cartClose.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

cartItemsContainer.addEventListener("click", (event) => {
  const target = event.target;
  const action = target.dataset.action;
  const itemId = target.dataset.id;

  if (!action || !itemId) return;

  if (action === "increase") {
    updateQuantity(itemId, 1);
  }

  if (action === "decrease") {
    updateQuantity(itemId, -1);
  }

  if (action === "remove") {
    removeFromCart(itemId);
  }
});

checkoutButton.addEventListener("click", () => {
  if (cart.length === 0) {
    checkoutNote.textContent = "Voeg eerst een gerecht toe aan je winkelwagen.";
    checkoutNote.style.color = "#dc2626";
    return;
  }

  checkoutNote.textContent =
    "Demo-modus actief. De winkelwagen werkt, maar checkout is nog niet gekoppeld aan betalingen.";
  checkoutNote.style.color = "#15803d";
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = contactForm.elements.name.value.trim();
  const email = contactForm.elements.email.value.trim();
  const message = contactForm.elements.message.value.trim();

  if (!name || !email || !message) {
    formStatus.textContent = "Vul alle velden correct in.";
    formStatus.style.color = "#dc2626";
    return;
  }

  formStatus.textContent =
    "Demo-modus actief. Het formulier is visueel klaar, maar nog niet gekoppeld aan een echte backend.";
  formStatus.style.color = "#15803d";
  contactForm.reset();
});

loadCart();
renderQuickOrder();
renderFeaturedProducts();
renderMenuProducts();
renderCart();