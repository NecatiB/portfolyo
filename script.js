// Mobil menüyü açıp kapatır.
    const menuButton = document.getElementById("menuButton");
    const navLinks = document.getElementById("navLinks");
    menuButton.addEventListener("click", () => navLinks.classList.toggle("open"));
    navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => navLinks.classList.remove("open")));

    // Sayfa aşağı kaydırıldığında menüye arka plan çizgisi ekler.
    window.addEventListener("scroll", () => {
      document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 20);
    });

    // E-posta ve telefon bilgisini panoya kopyalar.
    function copyText(text, button) {
      navigator.clipboard.writeText(text).then(() => {
        const oldText = button.textContent;
        button.textContent = "Kopyalandı ✓";
        setTimeout(() => button.textContent = oldText, 1800);
      });
    }
