/**
 * MORAIS ADVOCACIA - SCRIPT PRINCIPAL
 * Funcionalidades: navegação suave, menu ativo, FAQ accordion, scroll smooth
 */

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  // Atualizar link ativo durante scroll
  function updateActiveLink() {
    const scrollTop = window.pageYOffset;
    const sections = ["sobre", "servicos", "equipe", "faq", "contato"];

    navLinks.forEach((link) => link.classList.remove("active"));

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section && scrollTop >= section.offsetTop - 150) {
        const link = document.querySelector(`a[href="#${sections[i]}"]`);
        if (link) link.classList.add("active");
        break;
      }
    }
  }

  window.addEventListener("scroll", updateActiveLink);

  // Navegação suave ao clicar em links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // Logo redireciona para o topo com scroll suave
  const brandLink = document.querySelector(".brand-link");
  if (brandLink) {
    brandLink.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // FAQ Accordion - expandir/retrair perguntas
  document.querySelectorAll(".faq-question").forEach((question) => {
    question.addEventListener("click", () => {
      const faqItem = question.parentElement;
      const isActive = faqItem.classList.contains("active");

      document.querySelectorAll(".faq-item").forEach((item) => {
        item.classList.remove("active");
      });

      if (!isActive) {
        faqItem.classList.add("active");
      }
    });
  });

  // Navegação para serviços específicos via dropdown
  document.querySelectorAll(".dropdown-menu a").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const headerOffset = 100;
        const elementPosition =
          targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Inicializar estado ativo
  updateActiveLink();

  // Mobile Menu Toggle
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const mainNav = document.querySelector(".main-nav");
  const navListLinks = document.querySelectorAll(".nav-list a");
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", function () {
      this.classList.toggle("active");
      mainNav.classList.toggle("active");
      // Permitir rolagem mesmo com o menu aberto no mobile
      document.body.style.overflow = "";
    });

    // Fechar menu ao clicar em um link
    navListLinks.forEach((link) => {
      link.addEventListener("click", function () {
        if (window.innerWidth <= 768) {
          mobileMenuToggle.classList.remove("active");
          mainNav.classList.remove("active");
          document.body.style.overflow = "";
        }
      });
    });

    // Toggle dropdown no mobile
    dropdownToggles.forEach((toggle) => {
      toggle.addEventListener("click", function (e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          const dropdown = this.parentElement;
          dropdown.classList.toggle("active");
        }
      });
    });
  }
});
