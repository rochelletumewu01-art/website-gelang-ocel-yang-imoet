// Menghitung Item di Keranjang
let cartValue = 0;
const cartCount = document.getElementById('cart-count');
const buttons = document.querySelectorAll('.cart-btn');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        cartValue++;
        cartCount.innerText = cartValue;
        
        // Animasi Tombol Sederhana
        btn.innerText = "Berhasil!";
        btn.style.backgroundColor = "#ff85a1";
        btn.style.color = "#fff";
        
        setTimeout(() => {
            btn.innerText = "Tambah ke Keranjang";
            btn.style.backgroundColor = "#f0f0f0";
            btn.style.color = "#555";
        }, 1000);
    });
});

// Smooth Scroll Navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});