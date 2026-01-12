 const menuToggle = document.getElementById("menuToggle");
 const sidebar = document.querySelector(".side-bar");

  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });

