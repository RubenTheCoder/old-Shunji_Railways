// ██████████████
// █ REFERENCES █
// ██████████████

/* HEADER MODULE (MDL_HDR) */
MDL_hdr_mobileMenuButton = document.getElementById("MDL_hdr_mobileMenuButton");
MDL_hdr_mobileNavMenu = document.getElementById("MDL_hdr_mobileNavMenu");



// █████████████████████
// █ PREDEFINED VALUES █
// █████████████████████

/* HEADER MODULE (MDL_HDR) */
MDL_hdr_isMobileNavMenuOpen = false;



// █████████████
// █ FUNCTIONS █
// █████████████

/* HEADER MODULE (MDL_HDR) */
function toggleMobileNavMenu() {
  switch (MDL_hdr_isMobileNavMenuOpen) {
    // Menu closed, open
    case false:
      if (!MDL_hdr_mobileNavMenu.classList.contains("open")) {
        MDL_hdr_mobileNavMenu.classList.add("open")
      };
      MDL_hdr_isMobileNavMenuOpen = true;
      break;
    // Menu open, close
    case true:
      if (MDL_hdr_mobileNavMenu.classList.contains("open")) {
        MDL_hdr_mobileNavMenu.classList.remove("open")
      };
      MDL_hdr_isMobileNavMenuOpen = false;
      break;
  }
};



// ██████████████████
// █ EVENT COUPLERS █
// ██████████████████

// HEADER MODULE (MDL_HDR)
MDL_hdr_mobileMenuButton.addEventListener("click", toggleMobileNavMenu);


