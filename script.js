document.addEventListener("DOMContentLoaded", function () {
    const toggles = document.querySelectorAll(".faq-toggle");
  
    toggles.forEach((toggle) => {
      toggle.addEventListener("change", function () {
        const answer = toggle.nextElementSibling.nextElementSibling;
        if (toggle.checked) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
          answer.style.maxHeight = 0;
        }
      });
    });
  });
  