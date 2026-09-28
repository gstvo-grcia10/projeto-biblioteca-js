/**
 * PROJETO: ApexTech - Demonstração de Bibliotecas JavaScript
 * DISCIPLINA: Programação Web I
 * 
 * BIBLIOTECAS UTILIZADAS:
 * 1. Swiper.js -> Carrossel touch responsivo para exibição de produtos
 * 2. SweetAlert2 -> Modais modernos e notificações elegantes (substitui alert padrão)
 * 3. canvas-confetti -> Efeito visual de confetes na finalização de compra
 */

// ========================================================
// 1. DADOS DOS PRODUTOS
// ========================================================
const featuredProducts = [
  {
    id: 1,
    name: "Headphone Nova ANC Pro",
    category: "Áudio Espacial",
    badge: "Lançamento",
    price: 899.00,
    oldPrice: 1199.00,
    desc: "Cancelamento de ruído ativo inteligente de 45dB com drivers de titânio de 40mm.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Sneaker Apex CyberRun",
    category: "Calçados Tech",
    badge: "Mais Vendido",
    price: 649.90,
    oldPrice: 799.90,
    desc: "Amortecimento responsivo por nitrogênio injetado e cabedal respirável.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Smartwatch Titanium Ultra",
    category: "Wearables",
    badge: "Premium",
    price: 1450.00,
    oldPrice: 1890.00,
    desc: "Caixa em titânio aeroespacial, monitor cardíaco ECG e bateria de 14 dias.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    name: "Teclado Mecânico RGB Wireless",
    category: "Periféricos",
    badge: "Gamer",
    price: 499.00,
    oldPrice: 599.00,
    desc: "Switches ópticos lubrificados de fábrica e iluminação personalizável por tecla.",
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    name: "Drone Explorer 4K HDR",
    category: "Fotografia",
    badge: "Exclusivo",
    price: 2399.00,
    oldPrice: 2899.00,
    desc: "Gimbal mecânico de 3 eixos com transmissão OcuSync de até 10km.",
    image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=600&auto=format&fit=crop&q=80"
  }
];

const catalogProducts = [
  ...featuredProducts,
  {
    id: 6,
    name: "Mouse Gamer Sem Fio 26K DPI",
    category: "Periféricos",
    price: 289.00,
    rating: "★★★★★ (4.9)",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 7,
    name: "Óculos de Realidade Virtual XR",
    category: "VR / Games",
    price: 3190.00,
    rating: "★★★★★ (4.8)",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 8,
    name: "Caixa de Som Bluetooth 40W",
    category: "Áudio",
    price: 349.90,
    rating: "★★★★☆ (4.7)",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&auto=format&fit=crop&q=80"
  }
];

// Estado do Carrinho de Compras
let cart = [];

// ========================================================
// 2. RENDERIZAÇÃO INICIAL DO DOM
// ========================================================
function renderSlides() {
  const container = document.getElementById("swiper-slides-container");
  if (!container) return;

  container.innerHTML = featuredProducts.map(p => `
    <div class="swiper-slide">
      <div class="slide-img-wrapper">
        <span class="slide-badge">${p.badge}</span>
        <img src="${p.image}" alt="${p.name}" loading="lazy">
      </div>
      <div class="slide-body">
        <span class="slide-category">${p.category}</span>
        <h3 class="slide-title">${p.name}</h3>
        <p class="slide-desc">${p.desc}</p>
        <div class="slide-footer">
          <div class="slide-price">
            R$ ${p.price.toFixed(2).replace('.', ',')}
            ${p.oldPrice ? `<span>R$ ${p.oldPrice.toFixed(2).replace('.', ',')}</span>` : ''}
          </div>
          <button class="btn-add-cart" onclick="adicionarAoCarrinho(${p.id})">
            🛒 Adicionar
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function renderCatalog() {
  const grid = document.getElementById("products-grid");
  if (!grid) return;

  grid.innerHTML = catalogProducts.map(p => `
    <div class="product-card">
      <div class="product-img-box">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
      </div>
      <div class="product-info">
        <span class="product-tag">${p.category}</span>
        <h4 class="product-name">${p.name}</h4>
        <div class="product-rating">${p.rating || "★★★★★ (5.0)"}</div>
        <div class="product-bottom">
          <div class="product-price">R$ ${p.price.toFixed(2).replace('.', ',')}</div>
          <button class="btn-add-cart" onclick="adicionarAoCarrinho(${p.id})">
            + Adicionar
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// ========================================================
// 3. INICIALIZAÇÃO DA BIBLIOTECA 1: SWIPER.JS
// ========================================================
function initSwiperSlider() {
  new Swiper('.mySwiper', {
    // Quantidade de slides por visão de acordo com o tamanho da tela (Responsividade)
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    // Bolinhas de paginação clicáveis
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // Setas de navegação
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Quebras de layout responsivas
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 28,
      }
    }
  });
}

// ========================================================
// 4. INTEGRAÇÃO DA BIBLIOTECA 2: SWEETALERT2
// ========================================================

// Configuração do Toast de Notificação Rápida
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});

// Adicionar produto ao carrinho
window.adicionarAoCarrinho = function(productId) {
  const produto = catalogProducts.find(p => p.id === productId);
  if (!produto) return;

  const itemExistente = cart.find(i => i.id === productId);
  if (itemExistente) {
    itemExistente.qtd += 1;
  } else {
    cart.push({ ...produto, qtd: 1 });
  }

  atualizarContadorCarrinho();

  // Chamada do SweetAlert2: Toast de confirmação visual
  Toast.fire({
    icon: 'success',
    title: `<strong>${produto.name}</strong> adicionado ao carrinho!`,
    background: '#1e293b',
    color: '#f8fafc',
    iconColor: '#10b981'
  });
};

function atualizarContadorCarrinho() {
  const counter = document.getElementById("cart-counter");
  const totalItens = cart.reduce((acc, item) => acc + item.qtd, 0);
  counter.textContent = totalItens;
}

// Modal do Carrinho usando SweetAlert2
function abrirModalCarrinho() {
  if (cart.length === 0) {
    Swal.fire({
      icon: 'info',
      title: 'Carrinho Vazio',
      text: 'Você ainda não adicionou nenhum item ao seu carrinho.',
      confirmButtonText: 'Explorar Produtos',
      confirmButtonColor: '#6366f1'
    });
    return;
  }

  const total = cart.reduce((acc, item) => acc + (item.price * item.qtd), 0);
  
  const itensHtml = `
    <div class="cart-modal-items">
      ${cart.map(item => `
        <div class="cart-modal-item">
          <div>
            <strong>${item.name}</strong><br>
            <small style="color: #94a3b8">${item.qtd}x R$ ${item.price.toFixed(2).replace('.', ',')}</small>
          </div>
          <div><strong>R$ ${(item.price * item.qtd).toFixed(2).replace('.', ',')}</strong></div>
        </div>
      `).join('')}
    </div>
    <div class="cart-modal-total">
      Total: R$ ${total.toFixed(2).replace('.', ',')}
    </div>
  `;

  Swal.fire({
    title: '🛒 Seu Carrinho de Compras',
    html: itensHtml,
    showCancelButton: true,
    showDenyButton: true,
    confirmButtonText: 'Finalizar Pedido ✨',
    confirmButtonColor: '#10b981',
    denyButtonText: 'Limpar Carrinho',
    denyButtonColor: '#ef4444',
    cancelButtonText: 'Continuar Comprando',
    cancelButtonColor: '#64748b',
    width: '520px'
  }).then((result) => {
    if (result.isConfirmed) {
      processarFinalizacaoCompra(total);
    } else if (result.isDenied) {
      cart = [];
      atualizarContadorCarrinho();
      Toast.fire({
        icon: 'info',
        title: 'Carrinho esvaziado.'
      });
    }
  });
}

// ========================================================
// 5. INTEGRAÇÃO DA BIBLIOTECA 3: CANVAS-CONFETTI
// ========================================================

// Efeito de celebração com confetes multicoloridos
function dispararConfetes() {
  const duration = 2.5 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    
    // Dispara confetes do lado esquerdo
    confetti(Object.assign({}, defaults, { 
      particleCount, 
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } 
    }));
    
    // Dispara confetes do lado direito
    confetti(Object.assign({}, defaults, { 
      particleCount, 
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } 
    }));
  }, 250);
}

// Finalização da compra: Une SweetAlert2 + canvas-confetti
function processarFinalizacaoCompra(total) {
  // Dispara o efeito de confete
  dispararConfetes();

  // Exibe o modal de sucesso com SweetAlert2
  Swal.fire({
    icon: 'success',
    title: '🎉 Pedido Confirmado com Sucesso!',
    html: `
      <p>Obrigado pela sua compra na <strong>ApexTech</strong>!</p>
      <p style="margin-top: 10px; font-size: 1.1rem; color: #10b981;">
        Valor Total: <strong>R$ ${total.toFixed(2).replace('.', ',')}</strong>
      </p>
      <p style="margin-top: 8px; font-size: 0.85rem; color: #94a3b8;">
        O código de rastreio e a nota fiscal foram enviados para o seu e-mail.
      </p>
    `,
    confirmButtonText: 'Sensacional!',
    confirmButtonColor: '#6366f1'
  });

  // Limpa o carrinho
  cart = [];
  atualizarContadorCarrinho();
}

// ========================================================
// 6. EVENT LISTENERS E INICIALIZAÇÃO GERAL
// ========================================================
document.addEventListener("DOMContentLoaded", () => {
  renderSlides();
  renderCatalog();
  initSwiperSlider();

  // Botão do carrinho no topo
  document.getElementById("btn-ver-carrinho").addEventListener("click", abrirModalCarrinho);

  // Botão surpresa no banner principal para demonstrar os confetes
  document.getElementById("btn-surpresa").addEventListener("click", () => {
    dispararConfetes();
    Toast.fire({
      icon: 'success',
      title: 'Efeito de Confetes (canvas-confetti) disparado!'
    });
  });
});
