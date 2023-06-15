// ██████████████
// █ REFERENCES █
// ██████████████

/* HEADER MODULE (MDL_HDR) */
MDL_HDR_MMB = document.getElementById("MDL_HDR_MMB");
MDL_HDR_MNVM = document.getElementById("MDL_HDR_MNVM");



// █████████████████████
// █ PREDEFINED VALUES █
// █████████████████████

/* HEADER MODULE (MDL_HDR) */
MDL_HDR_isMNVMOpen = false;



// █████████████
// █ FUNCTIONS █
// █████████████

/* HEADER MODULE (MDL_HDR) */

function toggleMNVM() {
  switch (MDL_HDR_isMNVMOpen) {
    // Menu closed, open
    case false:
      if (!MDL_HDR_MNVM.classList.contains("open")) {
        MDL_HDR_MNVM.classList.add("open");
        MDL_HDR_MMB.title = "Close navigation menu";
      };
      MDL_HDR_isMNVMOpen = true;
      break;
    // Menu open, close
    case true:
      if (MDL_HDR_MNVM.classList.contains("open")) {
        MDL_HDR_MNVM.classList.remove("open");
        MDL_HDR_MMB.title = "Open navigation menu";
      };
      MDL_HDR_isMNVMOpen = false;
      break;
  }
};



// ██████████████████
// █ EVENT COUPLERS █
// ██████████████████

// HEADER MODULE (MDL_HDR)
MDL_HDR_MMB.addEventListener("click", toggleMNVM);


