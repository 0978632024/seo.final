/* ==========================================
   AeroStep Shared JS - Cart & Global Elements
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Cart State
  initCart();

  // Inject Shared Elements (Header, Footer, Cart Drawer)
  injectHeader();
  injectFooter();
  injectCartDrawer();

  // Setup Scroll Effects
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (header) {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });

  // Setup Event Listeners
  setupCartEventListeners();
  
  // Highlight Active Link
  highlightActiveLink();
});

// --- Shopping Cart State & Functions ---
let cart = [];

function initCart() {
  const savedCart = localStorage.getItem('aerostep_cart');
  if (savedCart) {
    try {
      cart = JSON.parse(savedCart);
    } catch (e) {
      cart = [];
    }
  }
  updateCartBadge();
}

function saveCart() {
  localStorage.setItem('aerostep_cart', JSON.stringify(cart));
  updateCartBadge();
  renderCartItems();
}

function updateCartBadge() {
  const badges = document.querySelectorAll('.cart-badge');
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  badges.forEach(badge => {
    badge.textContent = totalCount;
    if (totalCount > 0) {
      badge.style.display = 'flex';
    } else {
      badge.style.display = 'none';
    }
  });
}

function addToCart(productId, quantity = 1, size = '', color = '') {
  // Get product details from products database
  const product = window.products ? window.products.find(p => p.id === productId) : null;
  if (!product) return;

  // Set defaults if not provided
  const selectedSize = size || (product.sizes ? product.sizes[0] : '');
  const selectedColor = color || (product.colors ? product.colors[0].name : '');

  // Check if item already exists in cart with same size and color
  const existingItemIndex = cart.findIndex(
    item => item.id === productId && item.size === selectedSize && item.color === selectedColor
  );

  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity,
      size: selectedSize,
      color: selectedColor
    });
  }

  saveCart();
  openCartDrawer();
  
  // Quick Visual Feedback
  showNotification(`已將 ${product.name} 加入購物車！`);
}

function updateCartQty(productId, size, color, newQty) {
  const idx = cart.findIndex(
    item => item.id === productId && item.size === size && item.color === color
  );
  if (idx > -1) {
    if (newQty <= 0) {
      cart.splice(idx, 1);
    } else {
      cart[idx].quantity = newQty;
    }
    saveCart();
  }
}

function removeCartItem(productId, size, color) {
  cart = cart.filter(
    item => !(item.id === productId && item.size === size && item.color === color)
  );
  saveCart();
}

function clearCart() {
  cart = [];
  saveCart();
}

// --- Injection of Shared HTML Components ---
function injectHeader() {
  const headerContainer = document.getElementById('shared-header');
  if (!headerContainer) return;

  headerContainer.innerHTML = `
    <header class="header">
      <div class="container nav-container">
        <a href="index.html" class="logo">
          <img src="assets/images/logo.png" alt="AeroStep Logo">
          <span>AeroStep</span>
        </a>
        <nav class="nav-menu">
          <a href="index.html" class="nav-link" data-page="index">首頁</a>
          <a href="about.html" class="nav-link" data-page="about">公司簡介</a>
          <a href="men.html" class="nav-link" data-page="men">男生鞋子</a>
          <a href="women.html" class="nav-link" data-page="women">女生鞋子</a>
          <a href="kids.html" class="nav-link" data-page="kids">兒童鞋子</a>
          <a href="accessories.html" class="nav-link" data-page="accessories">配件</a>
          <a href="others.html" class="nav-link" data-page="others">其它類</a>
          <a href="contact.html" class="nav-link" data-page="contact">聯絡我們</a>
        </nav>
        <div class="nav-actions">
          <button class="cart-trigger" id="cart-btn" aria-label="Open Shopping Cart">
            🛒 <span class="cart-badge" style="display:none;">0</span>
          </button>
        </div>
      </div>
    </header>
  `;
}

function injectFooter() {
  const footerContainer = document.getElementById('shared-footer');
  if (!footerContainer) return;

  footerContainer.innerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <h3>AeroStep</h3>
            <p>專注於極致舒適與創新設計的鞋履品牌。我們結合最新人體工學與環保材質，為您的雙腳提供最佳支持與無拘無束的行走體驗。</p>
            <div class="social-links">
              <a href="#" class="social-link" aria-label="Facebook">FB</a>
              <a href="#" class="social-link" aria-label="Instagram">IG</a>
              <a href="#" class="social-link" aria-label="Twitter">TW</a>
              <a href="#" class="social-link" aria-label="Line">LN</a>
            </div>
          </div>
          <div class="footer-links-col">
            <h4>商品類別</h4>
            <ul>
              <li><a href="men.html">男生鞋款</a></li>
              <li><a href="women.html">女生鞋款</a></li>
              <li><a href="kids.html">兒童鞋款</a></li>
              <li><a href="accessories.html">機能配件</a></li>
              <li><a href="others.html">保養與其它</a></li>
            </ul>
          </div>
          <div class="footer-links-col">
            <h4>客戶服務</h4>
            <ul>
              <li><a href="about.html">關於我們</a></li>
              <li><a href="contact.html">聯絡我們</a></li>
              <li><a href="contact.html#faq">常見問題 FAQ</a></li>
              <li><a href="#">退換貨政策</a></li>
              <li><a href="#">隱私權保護政策</a></li>
            </ul>
          </div>
          <div class="footer-newsletter">
            <h4>訂閱電子報</h4>
            <p>第一時間獲得最新鞋款發布、獨家優惠與品牌專欄活動！</p>
            <form class="newsletter-form" onsubmit="event.preventDefault(); alert('感謝您的訂閱！我們將為您發送最新優惠。'); this.reset();">
              <input type="email" placeholder="輸入您的電子信箱" required>
              <button type="submit">訂閱</button>
            </form>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2026 AeroStep 鞋履設計專賣店. 版權所有.</p>
          <p>期末網際網路行銷專案展示網頁</p>
        </div>
      </div>
    </footer>
  `;
}

function injectCartDrawer() {
  const drawerContainer = document.getElementById('shared-cart-drawer');
  if (!drawerContainer) return;

  drawerContainer.innerHTML = `
    <div class="cart-overlay" id="cart-overlay"></div>
    <div class="cart-drawer" id="cart-drawer-panel">
      <div class="cart-header">
        <h2>購物清單</h2>
        <button class="cart-close-btn" id="cart-close-btn">&times;</button>
      </div>
      <div class="cart-items-container" id="cart-items-list">
        <!-- Dynamic Cart Items -->
      </div>
      <div class="cart-footer">
        <div class="cart-summary-line">
          <span>商品小計</span>
          <span id="cart-subtotal">NT$ 0</span>
        </div>
        <div class="cart-summary-line">
          <span>運費</span>
          <span id="cart-shipping">免運費</span>
        </div>
        <div class="cart-summary-line total">
          <span>結帳總額</span>
          <span id="cart-total">NT$ 0</span>
        </div>
        <button class="btn btn-primary checkout-btn" id="checkout-btn">前往結帳</button>
      </div>
    </div>
  `;
}

// --- Cart Drawer Event Handling ---
function setupCartEventListeners() {
  const overlay = document.getElementById('cart-overlay');
  const drawer = document.getElementById('cart-drawer-panel');
  const trigger = document.getElementById('cart-btn');
  const closeBtn = document.getElementById('cart-close-btn');
  const checkoutBtn = document.getElementById('checkout-btn');

  if (!drawer || !overlay) return;

  const openCart = () => {
    overlay.classList.add('open');
    drawer.classList.add('open');
    renderCartItems();
  };

  const closeCart = () => {
    overlay.classList.remove('open');
    drawer.classList.remove('open');
  };

  if (trigger) trigger.addEventListener('click', openCart);
  if (closeBtn) closeBtn.addEventListener('click', closeCart);
  if (overlay) overlay.addEventListener('click', closeCart);

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        alert('您的購物車是空的，快去挑選喜歡的商品吧！');
        return;
      }
      alert('感謝您的模擬訂購！在正式系統中此處會導向結帳與金流頁面。');
      clearCart();
      closeCart();
    });
  }
}

function openCartDrawer() {
  const overlay = document.getElementById('cart-overlay');
  const drawer = document.getElementById('cart-drawer-panel');
  if (drawer && overlay) {
    overlay.classList.add('open');
    drawer.classList.add('open');
    renderCartItems();
  }
}

function renderCartItems() {
  const container = document.getElementById('cart-items-list');
  const subtotalEl = document.getElementById('cart-subtotal');
  const totalEl = document.getElementById('cart-total');

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-state">
        <div class="cart-empty-icon">🛍️</div>
        <p>購物車裡目前沒有商品</p>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = 'NT$ 0';
    if (totalEl) totalEl.textContent = 'NT$ 0';
    return;
  }

  let html = '';
  let subtotal = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;
    
    html += `
      <div class="cart-item">
        <div class="cart-item-img">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-option">${item.size ? '尺寸: ' + item.size : ''} ${item.color ? ' | 顏色: ' + item.color : ''}</div>
          <div class="cart-item-price-qty">
            <span class="cart-item-price">NT$ ${item.price.toLocaleString()}</span>
            <div class="cart-item-qty-selector">
              <button class="cart-item-qty-btn" onclick="adjustQty('${item.id}', '${item.size}', '${item.color}', -1)">-</button>
              <span class="cart-item-qty-val">${item.quantity}</span>
              <button class="cart-item-qty-btn" onclick="adjustQty('${item.id}', '${item.size}', '${item.color}', 1)">+</button>
            </div>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeCartItemAndRender('${item.id}', '${item.size}', '${item.color}')">&times;</button>
      </div>
    `;
  });

  container.innerHTML = html;
  if (subtotalEl) subtotalEl.textContent = `NT$ ${subtotal.toLocaleString()}`;
  if (totalEl) totalEl.textContent = `NT$ ${subtotal.toLocaleString()}`;
}

// Global functions for inline HTML onclick attributes
window.adjustQty = (productId, size, color, delta) => {
  const pId = parseInt(productId);
  const item = cart.find(i => i.id === pId && i.size === size && i.color === color);
  if (item) {
    updateCartQty(pId, size, color, item.quantity + delta);
  }
};

window.removeCartItemAndRender = (productId, size, color) => {
  const pId = parseInt(productId);
  removeCartItem(pId, size, color);
};

// --- Page Helper Functions ---
function highlightActiveLink() {
  const currentPath = window.location.pathname;
  const pageName = currentPath.substring(currentPath.lastIndexOf('/') + 1).replace('.html', '');
  
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const pageAttr = link.getAttribute('data-page');
    if (pageName === pageAttr || (pageName === '' && pageAttr === 'index')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function highlightCategoryMenu(category) {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    if (link.getAttribute('data-page') === category) {
      link.classList.add('active');
    }
  });
}

// --- Dynamic Toast Notification ---
function showNotification(message) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.style.cssText = `
      position: fixed;
      bottom: 30px;
      left: 30px;
      background-color: var(--dark);
      color: var(--white);
      padding: 16px 28px;
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-lg);
      z-index: 9999;
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 600;
      transform: translateY(100px);
      opacity: 0;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    `;
    document.body.appendChild(toast);
  }

  toast.innerHTML = `✨ ${message}`;
  // Animate in
  setTimeout(() => {
    toast.style.transform = 'translateY(0)';
    toast.style.opacity = '1';
  }, 100);

  // Animate out
  setTimeout(() => {
    toast.style.transform = 'translateY(100px)';
    toast.style.opacity = '0';
  }, 3500);
}

// Export functions to global scope
window.addToCart = addToCart;
window.showNotification = showNotification;
window.highlightCategoryMenu = highlightCategoryMenu;
