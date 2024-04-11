// Get all the elements
const arrow = document.querySelector("#arrow");
const bookmark_icon = document.querySelector("#bookmark-icon");
const close_icon = document.querySelector("#close-icon");
const main_container = document.querySelector(".main-container");
const menu_icon = document.querySelector(".menu-icon");
const sideMenu = document.querySelector(".sidebar");
const subMenu = document.querySelector("#submenu");

// Function to toggle SidebarMenu
function toggleSidebarMenu() {
  sideMenu.classList.toggle("translate-x-[-100%]");
  toggleFixedMenu();
}

// Function to close SidebarMenu
function closeSidebarMenu() {
  toggleSidebarMenu();
  main_container.style.marginLeft = "";
  bookmark_icon.style.fill = "none";
}

// Function dropdown for subMenu
function dropdown() {
  subMenu.classList.toggle("hidden");
  arrow.classList.toggle("rotate-180");
}

// Function to toggle fixed menu
function toggleFixedMenu() {
  const isOpen = !sideMenu.classList.contains("translate-x-[-100%]");
  main_container.classList.toggle("ml-0", isOpen);
  main_container.style.marginLeft = isOpen ? "300px" : "";
  bookmark_icon.style.fill = isOpen ? "red" : "none";
}

// Event listeners
menu_icon.addEventListener("click", toggleSidebarMenu);
close_icon.addEventListener("click", closeSidebarMenu);
bookmark_icon.addEventListener("click", toggleFixedMenu);
arrow.addEventListener("click", dropdown);
