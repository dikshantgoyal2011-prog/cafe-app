:root {
  --bg: #fff8ef;
  --panel: #fffdfb;
  --card: #ffffff;
  --text: #17120f;
  --muted: #5c4b45;
  --red: #ef3b2d;
  --red-dark: #d51f1f;
  --yellow: #ffd84a;
  --gold: #f4bd3b;
  --green: #2aa96b;
  --shadow: rgba(30, 20, 15, 0.14);
  --line: rgba(23, 18, 15, 0.08);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: linear-gradient(180deg, #fff8ef 0%, #f6efe6 100%);
  color: var(--text);
  font-family: "Inter", sans-serif;
}

button {
  font: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}

.app-shell {
  max-width: 480px;
  margin: 0 auto;
  min-height: 100vh;
  background: linear-gradient(180deg, #fffaf4 0%, #fff3e0 100%);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  position: relative;
  padding-bottom: 100px;
}

.top-header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(255, 250, 244, 0.96);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--line);
  padding: 14px 16px 10px;
}

.header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand-box {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  width: 46px;
  height: 46px;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--red), var(--gold));
  color: #fff;
  display: grid;
  place-items: center;
  font-weight: 900;
  font-size: 1.1rem;
  box-shadow: 0 8px 14px rgba(239, 59, 45, 0.2);
}

.brand-tag {
  display: block;
  font-size: 0.62rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
}

.brand-box h1 {
  margin: 0;
  font-family: "Bangers", cursive;
  font-weight: 400;
  letter-spacing: 0.04em;
  font-size: 2.1rem;
  line-height: 0.9;
}

.menu-button {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: var(--card);
  font-size: 1.2rem;
}

.promo-banner {
  margin-top: 12px;
  background: linear-gradient(135deg, var(--red), #ff5a3a);
  color: #fff;
  border-radius: 14px;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  font-size: 0.86rem;
  box-shadow: 0 10px 20px rgba(239, 59, 45, 0.18);
}

.content {
  padding: 14px 16px 0;
}

.hero-card {
  background: linear-gradient(135deg, #1c1513 0%, #342823 100%);
  border-radius: 22px;
  padding: 18px 18px 16px;
  color: white;
  box-shadow: 0 18px 28px rgba(34, 20, 16, 0.15);
}

.eyebrow {
  margin: 0;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #f7d77c;
  font-weight: 700;
}

.hero-card h2 {
  margin: 8px 0 18px;
  font-size: clamp(2rem, 8vw, 3rem);
  line-height: 1;
  letter-spacing: -0.04em;
  font-family: "Bangers", cursive;
  font-weight: 400;
}

.hero-actions {
  display: flex;
  gap: 10px;
}

.primary-btn,
.ghost-btn,
.checkout-btn,
.chip,
.mini-button {
  border: none;
  cursor: pointer;
  transition: transform 0.15s ease;
}

.primary-btn,
.checkout-btn {
  background: linear-gradient(135deg, var(--red), var(--red-dark));
  color: #fff;
  padding: 0.85rem 1.1rem;
  border-radius: 999px;
  font-weight: 800;
  box-shadow: 0 10px 18px rgba(239, 59, 45, 0.2);
}

.ghost-btn {
  background: rgba(255,255,255,0.08);
  color: white;
  border: 1px solid rgba(255,255,255,0.12);
  padding: 0.85rem 1.1rem;
  border-radius: 999px;
  font-weight: 700;
}

.quick-picks,
.menu-section {
  margin-top: 18px;
}

.section-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.section-head h3 {
  margin: 0;
  font-size: 1.23rem;
}

.section-head a {
  color: var(--red);
  font-weight: 700;
  font-size: 0.9rem;
}

.badge-live {
  background: var(--green);
  color: white;
  display: inline-block;
  padding: 0.3rem 0.5rem;
  border-radius: 999px;
  font-size: 0.68rem;
  font-weight: 700;
}

.chip-row {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 4px;
  scrollbar-width: none;
}

.chip-row::-webkit-scrollbar {
  display: none;
}

.chip {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 0.7rem 0.9rem;
  white-space: nowrap;
  font-weight: 700;
  flex-shrink: 0;
}

.chip.active {
  background: var(--text);
  color: white;
}

.menu-list {
  display: grid;
  gap: 14px;
}

.menu-item {
  background: rgba(255,255,255,0.8);
  border: 1px solid var(--line);
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 10px 18px var(--shadow);
}

.menu-item-image {
  height: 150px;
  background-size: cover;
  background-position: center;
}

.menu-content {
  padding: 12px 12px 14px;
}

.menu-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
}

.menu-item h4 {
  margin: 0;
  font-size: 1.15rem;
}

.menu-price {
  color: var(--red);
  font-size: 1.02rem;
  font-weight: 900;
}

.menu-desc {
  margin: 8px 0 12px;
  color: var(--muted);
  line-height: 1.5;
  font-size: 0.82rem;
}

.menu-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.badge {
  padding: 0.38rem 0.56rem;
  border-radius: 999px;
  background: #ffe9a3;
  color: #4e4300;
  font-size: 0.64rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.mini-button {
  background: var(--text);
  color: white;
  padding: 0.6rem 0.8rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 800;
}

.cart-panel {
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: min(480px, calc(100% - 18px));
  background: rgba(255,255,255,0.96);
  border: 1px solid var(--line);
  border-radius: 22px 22px 0 0;
  padding: 14px 14px 16px;
  box-shadow: 0 -12px 24px rgba(0,0,0,0.08);
  backdrop-filter: blur(10px);
}

.cart-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.cart-top h3 {
  margin: 0;
  font-size: 1.5rem;
}

.cart-top span {
  color: var(--muted);
  font-size: 0.78rem;
  font-weight: 700;
}

.cart-items {
  display: grid;
  gap: 10px;
  min-height: 58px;
}

.empty-cart {
  margin: 0;
  color: var(--muted);
  font-size: 0.9rem;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  background: #fff9ef;
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 10px 12px;
}

.cart-item-info {
  display: grid;
  gap: 3px;
}

.cart-item-info strong {
  font-size: 0.9rem;
}

.cart-item-info span {
  color: var(--muted);
  font-size: 0.75rem;
}

.remove-item {
  border: none;
  background: transparent;
  color: var(--red);
  font-weight: 700;
  cursor: pointer;
}

.cart-summary {
  border-top: 1px solid var(--line);
  margin-top: 12px;
  padding-top: 12px;
}

.summary-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  color: var(--muted);
  font-weight: 700;
}

#subtotal {
  color: var(--text);
  font-size: 1.3rem;
}

.checkout-btn {
  width: 100%;
  padding: 0.9rem 1rem;
  border-radius: 14px;
}

.primary-btn:hover,
.ghost-btn:hover,
.checkout-btn:hover,
.chip:hover,
.mini-button:hover {
  transform: translateY(-1px);
}

@media (min-width: 700px) {
  .app-shell {
    max-width: 700px;
  }

  .menu-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
