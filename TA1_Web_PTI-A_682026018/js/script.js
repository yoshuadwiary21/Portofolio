document.addEventListener("DOMContentLoaded", () => {
    // 1. Pembaruan tahun otomatis pada footer
    const yearSpan = document.getElementById("currentYear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const roles = [
        "Pengembangan Web Modern",
        "Desain Antarmuka (UI/UX)",
        "Pemecahan Masalah Berbasis Teknologi"
    ];
    let roleIndex = 0;
    const roleElement = document.getElementById("typing-role");

    if (roleElement) {
        setInterval(() => {
            roleIndex = (roleIndex + 1) % roles.length;
            roleElement.style.opacity = 0;
            setTimeout(() => {
                roleElement.textContent = roles[roleIndex];
                roleElement.style.opacity = 1;
            }, 300);
        }, 3000);
        roleElement.style.transition = "opacity 0.3s ease";
    }

    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
        navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                if (navbarCollapse.classList.contains("show")) {
                    bsCollapse.hide();
                }
            });
        });
    }
});