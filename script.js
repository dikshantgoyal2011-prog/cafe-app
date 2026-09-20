const menuItems = [
  {
    id: 1,
    name: "Hazelnut Latte",
    price: 6.5,
    category: "coffee",
    badge: "Best seller",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
    description: "Silky espresso, roasted hazelnut cream, and a warm cinnamon finish.",
  },
  {
    id: 2,
    name: "Cold Brew Tonic",
    price: 5.8,
    category: "coffee",
    badge: "Refreshing",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80",
    description: "Smooth cold brew lifted with sparkling tonic and orange peel.",
  },
  {
    id: 3,
    name: "Blueberry Scone",
    price: 4.2,
    category: "pastry",
    badge: "Fresh bake",
    image:
      "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?auto=format&fit=crop&w=900&q=80",
    description: "Buttery, flaky, and loaded with wild berry sweetness.",
  },
  {
    id: 4,
    name: "Avocado Toast",
    price: 9.5,
    category: "brunch",
    badge: "Healthy",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
    description: "Sourdough with smashed avocado, chili flakes, lime, and herbs.",
  },
  {
    id: 5,
    name: "Cinnamon Roll",
    price: 4.9,
    category: "pastry",
    badge: "Sweet",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
    description: "Tender dough swirled with cinnamon butter and vanilla glaze.",
  },
  {
    id: 6,
    name: "Sunrise Bowl",
    price: 11.5,
    category: "brunch",
    badge: "Signature",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80",
    description: "Poached eggs, roasted vegetables, quinoa, and herb yogurt.",
  },
];

const menuContainer = document.getElementById("menu-items");
const filterButtons = document.querySelectorAll(".filter");
const cartItemsContainer = document.getElementById("cart-items");
const subtotalElement = document.getElementById("subtotal");
const cartCount = document.getElementById("cart-count");

let activeFilter = "all";
let cart = [];

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function getFilteredItems() {
  if (activeFilter === "all") return menuItems;
  return menuItems.filter((item) => item.category === activeFilter);
}

function renderMenu() {
  const items = getFilteredItems();

  menuContainer.innerHTML = items
    .map(
      (item) => `
        <article class="menu-item">
          <div class="menu-item-image" style="background-image: url('${item.image}')" aria-label="${item.name}"></div>
          <div class="menu-content">
            <div class="menu-top">
              <h3>${item.name}</h3>
              <span class="menu-price">${formatCurrency(item.price)}</span>
            </div>
            <p class="menu-desc">${item.description}</p>
            <div class="menu-meta">
              <span class="badge">${item.badge}</span>
              <button class="mini-button" type="button" data-name="${item.name}" data-price="${item.price}">Add</button>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  attachAddButtons();
}

function attachAddButtons() {
  document.querySelectorAll(".mini-button[data-name]").forEach((button) => {
    button.addEventListener("click", () => {
      const name = button.dataset.name;
      const price = Number(button.dataset.price);

      const existingItem = cart.find((entry) => entry.name === name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ name, price, quantity: 1 });
      }

      updateCart();
    });
  });
}

function updateCart() {
  if (!cart.length) {
    cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty. Add a favorite from the menu.</p>';
    subtotalElement.textContent = "$0.00";
    cartCount.textContent = "0 items";
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  cartItemsContainer.innerHTML = cart
    .map(
      (item) => `
        <div class="cart-item">
          <div class="cart-item-info">
            <strong>${item.name}</strong>
            <span>${item.quantity} × ${formatCurrency(item.price)}</span>
          </div>
          <button class="remove-item" type="button" data-name="${item.name}">Remove</button>
        </div>
      `
    )
    .join("");

  cartCount.textContent = `${itemCount} item${itemCount > 1 ? "s" : ""}`;
  subtotalElement.textContent = formatCurrency(total);

  document.querySelectorAll(".remove-item").forEach((button) => {
    button.addEventListener("click", () => {
      const name = button.dataset.name;
      cart = cart.filter((item) => item.name !== name);
      updateCart();
    });
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderMenu();
  });
});

renderMenu();
updateCart();
