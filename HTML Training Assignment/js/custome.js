
  const menuToggle = document.getElementById("menuToggle");
  const sidebar = document.querySelector(".side-bar");

  menuToggle.addEventListener("click", () => {
    console.log("click");
    sidebar.classList.toggle("active");
  });

