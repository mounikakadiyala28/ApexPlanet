// Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('header nav ul');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('showing');
  });
}

// Product Modal
const modal = document.getElementById('productModal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const closeBtn = document.querySelector('.closeBtn');
const productCards = document.querySelectorAll('.product-card');

if (productCards) {
  productCards.forEach(card => {
    card.addEventListener('click', () => {
      modal.style.display = 'flex';
      modalTitle.textContent = card.querySelector('h3').textContent;
      modalDesc.textContent = `${card.querySelector('h3').textContent} is an amazing product available now!`;
    });
  });
}

if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
