:root {
  --bg: #fff7ee;
  --panel: #ffffff;
  --text: #18120f;
  --muted: #60514d;
  --red: #ee4134;
  --red-dark: #d7281f;
  --yellow: #ffd95a;
  --gold: #f0b843;
  --green: #1ea76c;
  --line: rgba(24, 18, 15, 0.08);
  --shadow: rgba(27, 18, 15, 0.12);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: linear-gradient(180deg, #fffdf9 0%, #f8efe2 100%);
  font-family: "Inter", sans-serif;
  color: var(--text);
}

button,
input,
textarea,
select {
  font: inherit;
}

button {
  cursor: pointer;
}

.app-shell {
  max-width: 480px;
  min-height: 100vh;
  margin: 0 auto;
  background: linear-gradient(180deg, #fffaf3 0%, #fff4e9 100%);
  position: relative;
  box-shadow: 0 18px 38px rgba(0,0,0,0.08);
  padding-bottom: 86px;
}

.top-header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(255, 250, 244, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--line);
  padding: 12px 16px 10px;
}

.top-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--red), var(--gold));
  display: grid;
  place-items: center;
  color: #fff;
  font-weight: 900;
}

.brand-small {
  display: block;
  font-size: 0.62rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
}

.brand-wrap h1 {
  margin: 0;
  font-family: "Bangers", cursive;
  font-weight: 400;
  letter-spacing: 0.04em;
  font-size: 2rem;
  line-height: 1;
}

.icon-button {
  width: 40px;
  height: 40px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--panel);
}

.location-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 10px 12px;
  font-size: 0.82rem;
  color: var(--muted);
}

.location-bar p {
  margin: 0;
  font-weight: 600;
}

.screen-container {
  padding: 16px 16px 0;
}

.screen {
  display: none;
}

.screen.active {
  display: block;
}

.hero-card {
  background: linear-gradient(135deg, #1c1714 0%, #312621 100%);
  border-radius: 25px;
  padding: 20px 18px 18px;
  color: white;
  box-shadow: 0 18px 24px rgba(31, 15, 13, 0.12);
}

.eyebrow {
  margin: 0;
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #ffd95a;
  font-weight: 700;
}

.hero-card h2 {
  margin: 8px 0 20px;
  font-size: clamp(2.2rem, 9vw, 3.2rem);
  font-family: "Bangers", cursive;
  font-weight: 400;
  letter-spacing: 0.04em;
  line-height: 1;
}

.hero-actions {
  display: flex;
  gap: 10px;
}

.primary-btn,
.ghost-btn,
.tiny-btn,
.chip,
.link-btn,
.nav-btn {
  border: none;
  cursor: pointer;
  transition: transform 0.15s ease;
}

.primary-btn {
  background: linear-gradient(135deg, var(--red), var(--red-dark));
  color: white;
  border-radius: 999px;
  padding: 0.9rem 1.2rem;
  font-weight: 800;
  box-shadow: 0 10px 18px rgba(238, 65, 52, 0.2);
}

.ghost-btn {
  background: rgba(255,255,255,0.08);
  color: white;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 999px;
  padding: 0.9rem 1.1rem;
  font-weight: 700;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-top: 16px;
}

.feature-box {
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 12px;
  box-shadow: 0 10px 18px var(--shadow);
}

.feature-box.accent {
  background: linear-gradient(135deg, #fff2c8, #fffde4);
}

.feature-box span {
  width: 38px;
  height: 38px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: rgba(255,255,255,0.6);
  font-size: 1.2rem;
}

.feature-box strong {
  display: block;
  font-size: 1.1rem;
}

.feature-box small {
  color: var(--muted);
}

.section-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin: 20px 0 12px;
}

.section-row h3 {
  margin: 0;
  font-size: 1.2rem;
}

.link-btn {
  background: transparent;
  color: var(--red);
  font-weight: 800;
  padding: 0;
}

.featured-list {
  display: grid;
  gap: 12px;
}

.featured-item {
  display: flex;
  gap: 12px;
  background: rgba(255,255,255,0.9);
  border: 1px solid var(--line);
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 8px 16px var(--shadow);
}

.featured-image {
  width: 120px;
  min-width: 120px;
  background-size: cover;
  background-position: center;
}

.image-one {
  background-image: url("https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80");
}

.image-two {
  background-image: url("https://images.unsplash.com/photo-1498804103079-a4f7d7d2b0a3?auto=format&fit=crop&w=900&q=80");
}

.featured-info {
  flex: 1;
  padding: 12px 12px 10px 0;
}

.featured-info h4 {
  margin: 0 0 14px;
  font-size: 1.08rem;
}

.mini-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.mini-row span {
  color: var(--red);
  font-weight: 900;
}

.tiny-btn {
  background: #111;
  color: white;
  border-radius: 999px;
  padding: 0.5rem 0.75rem;
  font-size: 0.72rem;
  font-weight: 700;
}

.toolbar {
  margin-bottom: 12px;
}

.compact {
  margin-top: 0;
}

.chip-row {
  display: flex;
  overflow-x: auto;
  gap: 8px;
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
  gap: 12px;
}

.menu-item {
  background: rgba(255,255,255,0.88);
  border: 1px solid var(--line);
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 8px 14px var(--shadow);
}

.menu-item-image {
  height: 160px;
  background-size: cover;
  background-position: center;
}

.menu-content {
  padding: 12px;
}

.menu-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
}

.menu-top h4 {
  margin: 0;
  font-size: 1.1rem;
}

.menu-price {
  color: var(--red);
  font-weight: 900;
  font-size: 1rem;
}

.menu-desc {
  margin: 8px 0 12px;
  color: var(--muted);
  font-size: 0.82rem;
  line-height: 1.5;
}

.menu-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}

.badge {
  background: #ffe694;
  color: #4d3a00;
  border-radius: 999px;
  font-size: 0.62rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  padding: 0.4rem 0.56rem;
  text-transform: uppercase;
}

.mute {
  color: var(--muted);
}

.cart-list {
  display: grid;
  gap: 10px;
}

.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255,255,255,0.9);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 10px 12px;
}

.cart-item-info {
  display: grid;
  gap: 4px;
}

.cart-item strong {
  font-size: 0.96rem;
}

.cart-item span {
  color: var(--muted);
  font-size: 0.74rem;
}

.remove-item {
  border: none;
  background: transparent;
  color: var(--red);
  font-weight: 800;
}

.checkout-card {
  background: rgba(255,255,255,0.92);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 14px;
  margin-top: 16px;
  box-shadow: 0 10px 18px var(--shadow);
}

.summary-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--muted);
  padding: 8px 0;
  font-weight: 600;
}

.summary-row strong {
  color: var(--text);
}

.total-row {
  font-size: 1.02rem;
  color: var(--text);
}

.full-width {
  width: 100%;
  margin-top: 8px;
}

.checkout-form {
  display: grid;
  gap: 12px;
  margin-top: 8px;
}

.checkout-form label {
  display: grid;
  gap: 8px;
  color: var(--muted);
  font-weight: 700;
  font-size: 0.8rem;
}

.checkout-form input,
.checkout-form textarea,
.checkout-form select {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 0.85rem 0.9rem;
  color: var(--text);
}

.profile-card {
  display: flex;
  align-items: center;
  gap: 14px;
  background: rgba(255,255,255,0.9);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 16px;
  box-shadow: 0 10px 16px var(--shadow);
}

.avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--gold), var(--red));
  display: grid;
  place-items: center;
  color: white;
  font-weight: 900;
}

.profile-card h3 {
  margin: 0 0 6px;
  font-size: 1.15rem;
}

.profile-card p {
  margin: 0;
  color: var(--muted);
}

.account-list {
  display: grid;
  gap: 12px;
  margin-top: 16px;
}

.account-item {
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255,255,255,0.9);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 12px 14px;
}

.account-item span {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: #fff5d2;
}

.account-item p {
  margin: 0;
  font-weight: 700;
}

.bottom-nav {
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: min(480px, calc(100% - 0px));
  background: rgba(255,255,255,0.96);
  backdrop-filter: blur(12px);
  border-top: 1px solid var(--line);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 8px 10px 12px;
  box-shadow: 0 -8px 18px rgba(0,0,0,0.05);
}

.nav-btn {
  display: grid;
  place-items: center;
  gap: 4px;
  background: transparent;
  border-radius: 12px;
  padding: 8px 0;
  color: var(--muted);
}

.nav-btn.active {
  color: var(--red);
  background: rgba(238, 65, 52, 0.06);
}

.nav-btn span {
  font-size: 1.3rem;
}

.nav-btn small {
  font-weight: 700;
}

.modal {
  position: fixed;
  inset: 0;
  background: rgba(15, 10, 9, 0.45);
  display: grid;
  place-items: center;
  padding: 18px;
  z-index: 30;
}

.modal.hidden {
  display: none;
}

.modal-card {
  position: relative;
  width: min(380px, 100%);
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 24px 48px rgba(0,0,0,0.2);
}

.close-modal {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background: rgba(255,255,255,0.9);
  z-index: 1;
}

.modal-image {
  width: 100%;
  height: 210px;
  background-size: cover;
  background-position: center;
}

.modal-body {
  padding: 16px;
}

.modal-body h4 {
  margin: 0 0 8px;
  font-size: 1.4rem;
}

.modal-body p {
  margin: 0;
  color: var(--muted);
  line-height: 1.6;
}

.modal-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  margin-top: 14px;
}

.modal-footer strong {
  font-size: 1.2rem;
  color: var(--red);
}

.primary-btn:hover,
.ghost-btn:hover,
.chip:hover,
.tiny-btn:hover,
.nav-btn:hover,
.link-btn:hover {
  transform: translateY(-1px);
}

@media (min-width: 700px) {
  .app-shell {
    max-width: 700px;
  }

  .bottom-nav {
    width: min(700px, 100%);
  }

  .menu-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
