// get all the links
const arrow = document.querySelector("#arrow");
const bookmark_icon = document.querySelector("#bookmark-icon");
const close_icon = document.querySelector("#close-icon");
const main_container = document.querySelector(".main-container");
const menu_icon = document.querySelector(".menu-icon");
const sideMenu = document.querySelector(".sidebar");
const subMenu = document.querySelector("#submenu");

// Function to open SidebarMenu
function openSidebarMenu() {
  sideMenu.classList.toggle("translate-x-[-100%]");
  console.log("Test to open modal");
}

// Function to close SidebarMenu
function closeSidebarMenu() {
  sideMenu.classList.toggle("translate-x-[-100%]");
  main_container.style.marginLeft = "";
  bookmark_icon.style.fill = "none";
  console.log("Test to close modal");
}
// Function dropdown for subMenu
function dropdown() {
  subMenu.classList.toggle("hidden");
  arrow.classList.toggle("rotate-180");
  console.log("Test to dropdown menu");
}

// Function toggle fixed menu
function toggleFixedMenu() {
  if (!sideMenu.classList.contains("translate-x-[-100%]")) {
    main_container.classList.toggle("ml-0");
    main_container.style.marginLeft = "300px";
    bookmark_icon.style.fill = "red";
    console.log("Test for toggleFixedMenu");
  } else {
    main_container.classList.toggle("ml-0");
    main_container.style.marginLeft = "";
  }
}

// Open menu when click on menu icon
menu_icon.addEventListener("click", () => {
  sideMenu.classList.contains("translate-x-[-100%]")
    ? openSidebarMenu()
    : closeSidebarMenu();
});

close_icon.addEventListener("click", closeSidebarMenu);
bookmark_icon.addEventListener("click", toggleFixedMenu);
arrow.addEventListener("click", dropdown);