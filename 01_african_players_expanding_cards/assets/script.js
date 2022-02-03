const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  panel.addEventListener('mouseover', () => {
    removeActivePanel(panels);
    panel.classList.add('active');
  });
});

function removeActivePanel(panels) {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}
