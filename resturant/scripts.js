document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const menuItems = document.querySelectorAll(".menu-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const filterValue = button.getAttribute("data-filter");
      menuItems.forEach((item) => {
        const itemCategory = item.getAttribute("data-category");

        if (filterValue === "all" || filterValue === itemCategory) {
          item.style.display = "block"; 
          item.style.animation = "fadeIn 0.5s ease forwards";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
  const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
  const cartCountElement = document.getElementById("cart-count");
  let currentCount = 0;

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      currentCount++;
      cartCountElement.textContent = currentCount;

      const itemTitle = e.target
        .closest(".menu-item")
        .querySelector("h3").textContent;

      alert(`تم إضافة "${itemTitle}" إلى طلبك بنجاح! 🛒`);
    });
  });

  const bookingForm = document.getElementById("booking-form");

  if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const guests = document.getElementById("guests").value;
      const date = document.getElementById("date").value;
      alert(
        `شكراً لك يا ${name}! تم تسجيل حجزك لعدد ${guests} أفراد بتاريخ ${date}. ننتظر زيارتك! 🎉`,
      );

      bookingForm.reset();
    });
  }
});
