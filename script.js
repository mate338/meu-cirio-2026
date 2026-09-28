document.addEventListener("DOMContentLoaded", () => {

  // FAQ
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      faqItems.forEach((faq) => {
        faq.classList.remove("active");
      });

      if (!isActive) {
        item.classList.add("active");
      }
    });
  });

  // Botão principal do checkout
  const checkoutButton = document.getElementById("checkoutButton");

  if (checkoutButton) {
    checkoutButton.addEventListener("click", (event) => {
      event.preventDefault();

      // TROCAR DEPOIS PELO LINK REAL DO CHECKOUT
      const checkoutUrl = "https://ggcheckout.app/checkout/v2/0INB4hQWi748sJsy8Un9";

      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      } else {
        alert("Checkout será liberado em breve.");
      }
    });
  }

  // Rolagem suave dos links internos
  const internalLinks = document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

});