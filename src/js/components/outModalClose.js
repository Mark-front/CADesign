function modalOutClose(modalBtn, modal, tl) {
  document.addEventListener('click', (ev) => {
    (modal.style.display === "block" && !modal?.contains(ev.target)&& !modalBtn?.contains(ev.target)) ?  
    tl.reverse(1) : null;
  });
}
