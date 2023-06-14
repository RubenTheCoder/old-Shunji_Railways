// █████████████████████
// █ PREDEFINED VALUES █
// █████████████████████

  /* HEADER MODULE */
  MDL_header_mobileMenuButton = document.getElementById("MDL_header_mobileMenuButton");
  MDL_header_mobileNavMenu = document.getElementById("MDL_header_mobileNavMenu");
  MDL_header_isMobileNavMenuOpen = false;



// █████████████████
// █ HEADER MODULE █
// █████████████████

function toggleMobileNavMenu() {
  switch (MDL_header_isMobileNavMenuOpen) {
    // Menu closed, open
    case false:
      if (!MDL_header_mobileNavMenu.classList.contains("open")) {
        MDL_header_mobileNavMenu.classList.add("open")
      };
      MDL_header_isMobileNavMenuOpen = true;
      break;
    // Menu open, close
    case true:
      if (MDL_header_mobileNavMenu.classList.contains("open")) {
        MDL_header_mobileNavMenu.classList.remove("open")
      };
      MDL_header_isMobileNavMenuOpen = false;
      break;
  }
};



// ██████████████████
// █ EVENT COUPLERS █
// ██████████████████

// HEADER MODULE
MDL_header_mobileMenuButton.addEventListener("click", toggleMobileNavMenu);


